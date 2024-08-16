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
  const [ productData, setProductData ] = useState("")
  const { refetch, data } = useQuery({
    queryKey: ["product-data"],
    queryFn: () => getProductDetailApi(idProduct),
    enabled: true,
    onSuccess: (response) => { 
      console.log("checked",response);
      
      setProductData(response?.data);
    },
  });
  //! Function
  //! Effect
  useEffect(() => {
    refetch && refetch();
  }, [])
  //! Render
  return (
    <SWrapProduct>
      <Header listHeader={listHeader} />
      {/* <NewHeader /> */}
      <div style={{ height: "52px" }}></div>
      <div className="container">
        <div className="product-detail">
          <div className="product-name">
            <h1>Điện thoại iPhone 11 (64GB) - Chính hãng VN/A</h1>
          </div>
        </div>
        <div className="product-detail-info">
          <div className="detail-info-left"></div>
          <div className="detail-info-right"></div>
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
      color: #000;
    }
  }
  .box-detail-info {
    display: flex;
    gap: 12px;
  }
`;
