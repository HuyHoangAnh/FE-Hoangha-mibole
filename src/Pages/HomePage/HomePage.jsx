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
  const [productData, setProductData] = useState("");
  //! Function
  const { refetch, data } = useQuery({
    queryKey: ["get-product-data"],
    queryFn: getProductApi,
    enabled: false,
    onSuccess: (response) => {
      setProductData(response?.data);
    },
  });
  //! Effect
  useEffect(() => {
    refetch && refetch();
  }, []);
  //! Render

  return (
    <div className={cx("home-container")}>
      <div>
        {/* <NewHeader /> */}
        <Banner listBanner={listBanner} />
        <BannerImage />
        {/* <FlashSale /> */}
        <ProductHome
          productData={productData}
          companyProduct="Apple"
        />
        <ProductHome
          productData={productData}
          companyProduct="Samsung"
        />
        <ProductHome
          productData={productData}
          companyProduct="OPPO"
        />
        <ProductHome
          productData={productData}
          companyProduct="Redmi"
        />
        {/* <Social /> */}
        <BannerAds />
      </div>
    </div>
  );
};

export default HomePage;
