import React, { useState } from "react";
import { listBanner } from "../../constant";
import classNames from "classnames/bind";
import styles from "./CollectionPage.module.scss";
import Banner from "../../Component/Banner/Banner";
import ProductCollection from "../../Component/ProductCollection/ProductCollection";
import FilterCollection from "./FilterCollection/FilterCollection";
import Social from "../../common/Social";
import TextCollections from "../../Component/TextCollection/TextCollections";
import NewHeader from "../../Component/Header/Newheader";
import styled from "styled-components";
import logoApple from "../../assets/logo-apple.webp"
import logoSamsung from "../../assets/logo-samsung.webp"
import logoXiaomi from "../../assets/logo-xiaomi.webp"
import { useQuery } from "@tanstack/react-query";
import { getProductApi } from "../../services/Product";
const listBannerImage = [
  {
    id: 1,
    title: "Apple",
    urlImg: logoApple,
    url: "/",
  },
  {
    id: 2,
    title: "SamSung",
    urlImg: logoSamsung,
    url: "/",
  },
  {
    id: 3,
    title: "OPPO",
    url: "/",
  },
  {
    id: 4,
    title: "Huawei",
    url: "/",
  },
  {
    id: 5,
    title: "Vinfast",
    url: "/",
  },
  {
    id: 6,
    title: "Xiaomi",
    urlImg: logoXiaomi,
    url: "/",
  },
];

const cx = classNames.bind(styles);

const CollectionPage = () => {
  // const { id: idProduct } = useParams();
  //! Props
  //! State
  // const [ productData, setProductData ] = useState("")
  // const { refetch, data } = useQuery({
  //   queryKey: ["product-data"],
  //   queryFn: () => getProductDetailApi(idProduct),
  //   enabled: true,
  //   onSuccess: (response) => { 
  //     console.log("checked",response);
      
  //     setProductData(response?.data);
  //   },
  // });
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
    <div>
      <SWrapCollectionPage>
        <div className={cx("container")}>
          <div className={cx("collection-container")}>
            {/* <NewHeader /> */}
            <Banner listBanner={listBanner} />
            <div className={cx("list-company")}>
              {listBannerImage.map((el) => {
                return (
                  <div key={el.id} className={cx("items")}>
                    {el?.urlImg
                      ? <img src={el?.urlImg} />
                      : <p className={cx("no-logo")}>{el?.title}</p>}
                  </div>
                );
              })}
            </div>
            <div className={cx("list-container")}>
              {/* <FilterCollection /> */}
              <ProductCollection productData={productData}/>
            </div>
            <div className={cx("list-container")}>
              <TextCollections />
            </div>
          </div>
        </div>
      </SWrapCollectionPage>
      <Social />
    </div>
  );
};

export default CollectionPage;

export const SWrapCollectionPage = styled.div`
  .container {
    flex-direction: column-reverse;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #000;
  }
  .collection-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .list-company {
    width: 100%;
    display: flex;
    gap: 10px;
    .items {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      height: 50px;
      margin: 0;
    }
    .no-logo{
    /* color: var(--blackText); */
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
    font-size: 20px;
    font-weight: bold;
    }
  }
`;
