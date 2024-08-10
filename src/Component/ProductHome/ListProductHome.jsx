import React from 'react'
import classNames from 'classnames/bind'
import styles from './ProductHome.module.scss'

const cx = classNames.bind(styles)


const ListProductHome = (props) => {
    //! Props
    const {listProductApple} = props
    //! State
    //! Function
    //! Effect
    //! Render
    return(
        <div className={cx('col-content lts-product')}>
        {listProductApple?.map((el) => {
            return (
            <div className={cx('item')}>
                <div className={cx('img')}>
                    <a href={el?.urlProduct} title='product'>
                        <img 
                        src={el?.urlImg}
                        alt={el?.title}
                        />
                    </a>
                </div>
                <div className={cx("sticker sticker-left")}>
                    <span>
                        <img src={el?.bannerImg} alt="Chính hãng Apple" />
                    </span>
                </div>
                <div className={cx('cover')}>
                    <div className={cx('label')} >
                    <span style={{color: "white", fontSize: "11px"}}>{el?.bannerText}</span>
                    </div>
                </div>
                <div className={cx("info")}>
                    <a href={el?.urlProduct} className={cx("title")} title="iPhone 11 (64GB) - Chính hãng VN/A">iPhone 11 (64GB) - Chính hãng VN/A</a>
                    <span className={cx("price")}>
                        <strong>{el?.priceSale} đ</strong>
                        <strike>{el?.priceDefault} ₫</strike>
                    </span>
                    <div style={{paddingTop:"8px", fontStyle:"italic", textAlign:"left",}}>
                        <label>Giá lên đời từ: <strong className={cx("text-red")}>{el?.priceUpSale} ₫</strong></label>
                    </div>
                    <div class="note">
                        <span class="bag">KM</span> 
                        <label title="Thu cũ đổi mới lên đời điện thoại Android &amp; Máy tính bảng, tiết kiệm tới 20 triệu đồng">
                            Thu cũ đổi mới lên đời điện thoại A...
                        </label> 
                        <strong class="text-orange"> VÀ 12 KM KHÁC</strong>
                    </div>
                </div>
            </div>
            )
        })}
        </div>
    )
}

export default ListProductHome