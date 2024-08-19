import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import { listBanner, listHeader } from "../../constant";
import styled from "styled-components";
import Banner from "../../Component/Banner/Banner";
import NewHeader from "../../Component/Header/Newheader";
import { useQuery } from "@tanstack/react-query";
import { getProductApi, getProductDetailApi } from "../../services/Product";
import { useParams } from "react-router";

const Product = () => {
  const { id: idProduct } = useParams();
  //! Props
  //! State
  const [productData, setProductData] = useState("");
  const { refetch, data } = useQuery({
    queryKey: ["product-data"],
    queryFn: () => getProductDetailApi(idProduct),
    enabled: true,
    onSuccess: (response) => {
      setProductData(response?.data?.product);
    },
  });
  //! Function
  //! Effect
  useEffect(() => {
    refetch && refetch();
  }, []);
  //! Render
  console.log("productData", productData);
  console.log("data", data);

  return (
    <SWrapProduct>
      {/* <NewHeader /> */}
      <div className="container">
        <div className="product-detail">
          <div className="product-name">
            <h1>Điện thoại {productData?.productName} - Chính hãng</h1>
          </div>
        </div>
        <div className="product-detail-info">
          <div className="detail-info-left">
            <div className="_image">
              {/* <img src={productData?.images} alt={productData?.productName} /> */}
              <img
                src="http://localhost:5173/src/assets/iphone-11.webp"
                alt={productData?.productName}
              />
            </div>
          </div>
          <div className="detail-info-right">
            <div className="store">
              <p>Hoàng Hà mobile</p>
            </div>
            <div className="_title">{productData?.productName}</div>
            <div className="_price">
              <div className="promotional-price">{productData?.promotionalPrice} đ</div>
              <div className="original-price">{productData?.originalPrice} đ</div>
              <div className="_label">{productData?.discountEvent}%</div>
            </div>
          </div>
        </div>
      </div>
    </SWrapProduct>
  );
};

export default Product;

export const SWrapProduct = styled.div`
  .container {
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #000;
    gap: 50px;
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
  .product-detail-info {
    display: flex;
    gap: 20px;
    justify-content: center;
    .detail-info-left,
    .detail-info-right {
      max-width: 600px;
      width: 100%;
    }
  }
  .detail-info-left {
    ._image {
      border: solid 1px #000;
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 430px;
    }
  }
  .detail-info-right{
    ._price{
      display: flex;
      gap: 15px;
    }
  }
`;
