import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import LogoSearch from '../../common/LogoSearch.jsx'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

const Header = (props) => {
    //! Props
    const { listHeader } = props
    //! State
    const navigate = useNavigate();
    //! Function
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("checkedAdmin");
        navigate("/account")
        toast.success("Log out success")
    }
    //! Effect
    //! Render
    const showListHeader = listHeader.map((el) => {
        return (
            <a href={el.url}>
                {el.title}
            </a>
        )
    })

    return (
        <header>
            <div className={cx('top-navigation')}>
                <div className={cx('container-header')}>
                    {showListHeader}
                    {
                        localStorage.getItem("checkedAdmin") === "user" ? 
                        <a href={`/profile/${localStorage.getItem("userId")}`}>
                            Profile
                        </a>
                        :
                        <a href={`/profile/${localStorage.getItem("userId")}`}>
                            Admin
                        </a>
                    }
                    {localStorage.getItem("token") ?
                        <a onClick={handleLogout} style={{cursor: "pointer"}}>
                            Logout
                        </a>
                        :
                        <a href='/account'>
                            Login
                        </a>
                    }
                    <div className={cx('header-search')}>
                        <LogoSearch color={"#fff"} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header