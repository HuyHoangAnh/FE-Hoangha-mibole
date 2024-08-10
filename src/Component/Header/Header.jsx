import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import LogoSearch from '../../common/LogoSearch.jsx'


const cx = classNames.bind(styles)

const Header = (props) => {
    //! Props
    const {listHeader} = props
    //! State
    //! Function
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
                    <div className={cx('header-search')}>
                        <LogoSearch color={"#fff"} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header