import React from "react";
import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import SamSungS23 from "../../assets/samsung-1.png";
import Macbook from "../../assets/macbook-air-m1.png";
import Thucu from "../../assets/sanphamhot-thu-cu.png";
import LaptopHuawei from "../../assets/samsung-1.png";
import styled from "styled-components";

const listBannerImage = [
  {
    id: 1,
    title: "SamSung S23 Ultra",
    url: "/",
    imgPath: SamSungS23,
  },
  {
    id: 2,
    title: "Macbook Air M1",
    url: "/",
    imgPath: Macbook,
  },
  {
    id: 3,
    title: "Thu cu doi moi",
    url: "/",
    imgPath: Thucu,
  },
  {
    id: 4,
    title: "Laptop Huawei",
    url: "/",
    imgPath: LaptopHuawei,
  },
];
const cx = classNames.bind(styles);

const BannerImage = () => {
  //! Props
  //! State
  //! Function
  //! Effect
  //! Render
  return (
    <SWrapBannerImage>
      <div className={cx("container")}>
        <div className={cx("quick-sales")}>
          {listBannerImage.map((el) => {
            return (
              <div key={el.id} className={cx("items")}>
                <a href="#">
                  <img src={el.imgPath} alt={el.title} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </SWrapBannerImage>
  );
};

export default BannerImage;

export const SWrapBannerImage = styled.div`
  .container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;
