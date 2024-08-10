import React from 'react'
import classNames from 'classnames/bind'
import styles from './FlashSale.module.scss'
import Flash1 from '../../../assets/flash1.png'

const cx = classNames.bind(styles)

const FlashSale = (props) => {
  //! Props
  //! State
  //! Function
  //! Effect
  //! Render
  return (
    <>
      <div className={cx('container')}>
        <div className={cx('flash-sales')}>
          <div className={cx('fls-header')}>
            <h3>F
              <img src={Flash1} alt='F' height={'30px'} width={'30px'} />
              ASH SALE ONLINE
            </h3>
            <div>FlashSale</div>
            <div>FlashSale</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlashSale