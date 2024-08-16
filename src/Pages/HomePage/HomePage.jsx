import React, { useEffect, useState } from "react";
import Banner from "../../Component/Banner/Banner";
import Header from "../../Component/Header/Header";
import BannerImage from "../../Component/Banner/BannerImage";
import FlashSale from "./FlashSale/FlashSale";
import ProductHome from "../../Component/ProductHome/ProductHome";
import { listBanner } from "../../constant";
import { listHeader } from "../../constant";
import { listAppleReseller } from "../../constant";
import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import BannerAds from "../../Component/Banner/BannerAds";
import Social from "../../common/Social";
import NewHeader from "../../Component/Header/Newheader";
import styled from "styled-components";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductApi } from "../../services/Product";

const cx = classNames.bind(styles);

const HomePage = () => {
  //! Props
  //! State
  const [ productData, setProductData ] = useState("")
  //! Function
  const { refetch, data } = useQuery({
    queryKey: ["product-data"],
    queryFn: getProductApi,
    enabled: true,
    onSuccess: (response) => { 
      setProductData(response?.data);
    },
  });
  //! Effect
  //! Render

  return (
    <div className={cx("home-container")}>
      <div>
        <Header listHeader={listHeader} />
        {/* <NewHeader /> */}
        <div style={{ height: "52px" }}></div>
        <Banner listBanner={listBanner} />
        <BannerImage />
        {/* <FlashSale /> */}
        <ProductHome listAppleReseller={listAppleReseller} productData={productData} />
        <Social />
        <BannerAds />
      </div>
    </div>
  );
};

export default HomePage;