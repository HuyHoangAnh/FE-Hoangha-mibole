import React, { useEffect, useState } from "react";
import Banner from "../../Component/Banner/Banner";
import BannerImage from "../../Component/Banner/BannerImage";
import ProductHome from "../../Component/ProductHome/ProductHome";
import { listBanner } from "../../constant";
import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import BannerAds from "../../Component/Banner/BannerAds";
import { useQuery } from "@tanstack/react-query";
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
    // <div className={cx("home-container")}>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
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
