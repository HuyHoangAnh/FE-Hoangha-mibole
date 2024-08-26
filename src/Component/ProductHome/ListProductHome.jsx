import React, { useState } from "react";
import IPhone11 from "../../assets/iphone-11.webp";
import classNames from "classnames/bind";
import styles from "./ProductHome.module.scss";
import Label from "../Label/Label";

const cx = classNames.bind(styles);

const ListProductHome = (props) => {
  //! Props
  const { productData, companyProduct } = props;
  //! State
  //! Function
  //! Effect
  //! Render
  const listProduct = productData?.data
    ?.filter((item) => item.productCompany === companyProduct)
    ?.slice(0, 3);
  console.log("checked", listProduct);

  return (
    <div className={cx("col-content lts-product")}>
      {listProduct?.map((el, index) => {
        return (
          <a
            href={`/product/${el?._id}`}
            alt={el?.productName}
            className={cx("item")}
            key={index}
          >
            <div className={cx("img")}>
              <img src={el?.images[0]?.url} alt={el?.productName} />
            </div>
            {/* <div className={cx("sticker sticker-left")}>
                    <span>
                        <img src={el?.bannerImg} alt="Chính hãng Apple" />
                    </span>
                </div> */}
            <Label labelText={el?.discountEvent} />
            <div className={cx("info")}>
              <a
                href={el?.urlProduct}
                className={cx("title")}
                title={el?.productName}
              >
                {el?.productName}
              </a>
              <span className={cx("price")}>
                <strong>{el?.promotionalPrice}đ</strong>{" "}
                <strike>{el?.originalPrice}₫</strike>
              </span>
              {el?.priceGoesUp && (
                <div
                  style={{
                    paddingTop: "8px",
                    fontStyle: "italic",
                    textAlign: "left",
                  }}
                >
                  <label>
                    Giá lên đời từ:{" "}
                    <strong className={cx("text-red")}>
                      {el?.priceGoesUp} ₫
                    </strong>
                  </label>
                </div>
              )}
              {/* <div className={cx("note")}>
                                <span class={cx("bag")}>KM</span>
                                <label title="Thu cũ đổi mới lên đời điện thoại Android &amp; Máy tính bảng, tiết kiệm tới 20 triệu đồng">
                                    Thu cũ đổi mới lên đời điện thoại A...
                                </label>
                                <strong class={cx("text-orange")}> VÀ 12 KM KHÁC</strong>
                            </div> */}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ListProductHome;
