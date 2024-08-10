import React from 'react'
import classNames from 'classnames/bind'
import styles from './ProductHome.module.scss'

const cx = classNames.bind(styles)


const HeaderProduct = (props) => {
  //! Props
  const { listAppleReseller } = props
  //! State
  //! Function
  //! Effect
  //! Render
  return (
    <div className={cx('header-container')}>
      <div className={cx('header')}> 
        <h4>
        {listAppleReseller.map((el) => {
          return <a id={el.id}>
            {el?.header}
          </a>
        })}
        </h4>
      </div>
      <div class="other-link">
      {listAppleReseller.map((el) => {
          return <>
            {el?.linkCollection.map((index) => {
              return (
                <a id={index?.id} href={index?.url} className={cx(`${index?.class}`)}>
                  {index?.title}
                </a>
              )
            })}
          </>
        })}
      </div>
    </div>
  )
}

export default HeaderProduct