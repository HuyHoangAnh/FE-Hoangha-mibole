import React from 'react'
import classNames from 'classnames/bind'
import styles from './ProductHome.module.scss'

const cx = classNames.bind(styles)


const HeaderProduct = (props) => {
  //! Props
  const { listAppleReseller, companyProduct } = props
  //! State
  //! Function
  //! Effect
  //! Render
  return (
    <div className={cx('header-container')}>
      <div className={cx('header')}> 
        <h4>
        {/* {listAppleReseller.map((el) => {
          return <a id={el.id}>
            {el?.header}
          </a>
        })} */}
        {companyProduct === "Apple" && "Apple authorised Reseller"}
        </h4>
      </div>
      <div class="other-link">
      {/* {listAppleReseller.map((el) => {
          return <>
            {el?.linkCollection.map((index) => {
              return (
                <a id={index?.id} href={index?.url} className={cx(`${index?.class}`)}>
                  {index?.title}
                </a>
              )
            })}
          </>
        })} */}
        <a href={`/collections?productCompany=${companyProduct}`} className={cx(`actived`)}>
                  Xem tất cả
                </a>
      </div>
    </div>
  )
}

export default HeaderProduct