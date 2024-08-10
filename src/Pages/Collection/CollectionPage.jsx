import React from "react";
import Header from "../../Component/Header/Header";
import { listBanner, listHeader } from "../../constant";
import classNames from "classnames/bind";
import styles from "./CollectionPage.module.scss";
import Banner from "../../Component/Banner/Banner";
import ProductCollection from "../../Component/ProductCollection/ProductCollection";
import FilterCollection from "./FilterCollection/FilterCollection";
import Social from "../../common/Social";
import TextCollections from "../../Component/TextCollection/TextCollections";
import NewHeader from "../../Component/Header/Newheader";
import styled from "styled-components";
const listBannerImage = [
  {
    id: 1,
    title: "Apple",
    url: "/",
  },
  {
    id: 2,
    title: "SamSung",
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
    title: "Redmi",
    url: "/",
  },
];

const cx = classNames.bind(styles);

const CollectionPage = () => {
  return (
    <div>
      <SWrapCollectionPage>
        <div className={cx("container")}>
          <div>
            {/* <NewHeader /> */}
            <Header listHeader={listHeader} />
            <div style={{ height: "52px" }}></div>
            <Banner listBanner={listBanner} />
            <div className={cx("container")}>
              <div className={cx("list-company")}>
                {listBannerImage.map((el) => {
                  return (
                    <div key={el.id} className={cx("items")}>
                      <p>{el?.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={cx("list-container")}>
              <FilterCollection />
              <ProductCollection />
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
  }

  /* .list-company {
    width: 100%;
    display: flex;
    gap: 10px;
    .items {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      height: 50px;
      margin: 0;
    }
  } */
`;
