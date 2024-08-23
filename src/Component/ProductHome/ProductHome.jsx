import React from "react";
import classNames from "classnames/bind";
import styles from "./ProductHome.module.scss";
import HeaderProduct from "./HeaderProduct";
import ListProductHome from "./ListProductHome";
import { listProductApple } from "../../constant/indexProduct";
import styled from "styled-components";

const cx = classNames.bind(styles);

const ProductHome = (props) => {
  //! Props
  const { listAppleReseller,productData, companyProduct } = props;
  //! State
  //! Function
  //! Effect
  //! Render
  return (
    <SWrapProductHome>
      <div className={cx("container")}>
        <div className={cx("box-product-home box-home")}>
          <HeaderProduct listAppleReseller={listAppleReseller} companyProduct={companyProduct} />
          <ListProductHome listProductApple={listProductApple} productData={productData} companyProduct={companyProduct}/>
        </div>
      </div>
    </SWrapProductHome>
  );
};
export default ProductHome;

export const SWrapProductHome = styled.div`
  .container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .box-product-home {
    margin: 20px 0;
    max-width: 1200px;
    width: 100%;
  }
  .header-container {
    display: flex;
  }
  .box-home .header {
    background-image: linear-gradient(90deg, #009981, #00483d);
    // background: #009981;
    margin-bottom: 20px;
    display: inline-block;
    height: 30px;
    overflow: hidden;
    width: 370px;
  }
  .box-home .header h4 {
    padding: 5px 60px 6px 35px;
    margin: 0 0 0 60px;
    // background: #00483d;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
  }
  h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
  }
  div.header a {
    color: #fff;
    text-decoration: none;
  }
  .box-home .header-container .other-link {
    flex-grow: 3;
    display: flex;
    justify-content: flex-end;
  }

  .box-home .header-container .other-link a,
  .box-home .header-container .other-link a:link,
  .box-home .header-container .other-link a:visited {
    display: block;
    margin-left: 10px;
    border: 1px solid #ccc;
    background: #fff;
    padding: 5px 10px;
    border-radius: 8px;
    color: #333;
    text-decoration: none;
    margin-bottom: 18px;
    cursor: pointer;
  }

  .box-home .header-container .other-link a:hover,
  .box-home .header-container .other-link a.actived {
    color: #fff;
    background: #00483d;
    border-color: #00483d;
  }
  .lts-product {
    display: flex;
    flex-flow: wrap;
    animation: append 0.2s ease-in-out;
  }

  .lts-product .item {
    margin: 0 10px 10px 0;
    width: calc(1 / 5 * 100% - 10px);
    background: #fff;
    box-shadow: 0 4px 6px #00000029;
    border-radius: 8px;
    text-align: center;
    position: relative;
  }
  .lts-product .item .img {
    width: 150px;
    margin: 30px auto 0 auto;
  }
  .lts-product .item .img img {
    width: 100%;
  }
  .sticker-left {
    left: 5px;
    text-align: left;
  }
  .sticker {
    position: absolute;
    top: 5px;
    display: flex;
    flex-direction: column;
  }
  .sticker span {
    display: block;
  }
  .lts-product .item .info {
    margin-top: 5px;
    padding: 0 10px 15px 10px;
    margin-bottom: 50px;
  }

  .lts-product .item .info a.title,
  .lts-product .item .info a.title:link,
  .lts-product .item .info a.title:visited {
    color: #000;
    font-weight: bold;
    display: block;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: #00483d;
  }
  .lts-product .item .info .price strong {
    font-size: 16px;
    color: #fd475a;
  }
  .text-red {
    color: #fd475a;
  }
  .lts-product .item .note {
    margin: 0;
    padding: 5px 10px;
    position: absolute;
    bottom: 10px;
    text-align: left;
  }

  .lts-product .item .bag {
    display: inline-block;
    background: #f7941e 0% 0% no-repeat padding-box;
    box-shadow: 0 4px 6px #00000029;
    border-radius: 3px;
    padding: 3px 5px;
    color: #fff;
    font-size: 11px;
    text-align: left;
  }
  .text-orange,
  .text-orange * {
    color: #f7941e;
  }
`;
