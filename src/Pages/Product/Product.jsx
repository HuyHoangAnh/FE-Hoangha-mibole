import React from "react";
import Header from "../../Component/Header/Header";
import { listBanner, listHeader } from "../../constant";
import styled from "styled-components";
import Banner from "../../Component/Banner/Banner";
import NewHeader from "../../Component/Header/Newheader";

const Product = () => {
  //! Props
  //! State
  //! Function
  //! Effect
  //! Render
  return (
    <SWrapProduct>
      <Header listHeader={listHeader} />
      {/* <NewHeader /> */}
      <div style={{ height: "52px" }}></div>
      <div class="container">
        <div class="product-detail">
          <div class="product-name">
            <h1>Điện thoại iPhone 11 (64GB) - Chính hãng VN/A</h1>
          </div>
        </div>
        <div class="product-detail-info">
          <div class="detail-info-left"></div>
          <div class="detail-info-right"></div>
        </div>
      </div>
    </SWrapProduct>
  );
};

export default Product;

export const SWrapProduct = styled.div`
  .container {
    justify-content: start;
    flex-direction: column;
    .product-detail .product-name h1 {
      font-size: 20px;
      font-weight: 700;
      line-height: 24.2px;
      text-align: left;
    }
  }
  .box-detail-info {
    display: flex;
    gap: 12px;
  }
`;
