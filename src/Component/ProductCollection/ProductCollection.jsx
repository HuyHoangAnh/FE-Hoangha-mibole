import React, { useEffect, useState } from "react";
import styles from "./ProductCollection.module.scss";
import classNames from "classnames/bind";
import { ListProductCollections } from "../../constant/indexProduct";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getProductCollectionCompanyApi, getProductCollectionTypeApi } from "../../services/Product";
import { useLocation, useParams } from "react-router";

const cx = classNames.bind(styles);

const ProductCollection = (props) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const company = params.get("productCompany") ? params.get("productCompany") : params.get("productType");
  //! Props
  const {productData} = props
  //! State
  const [ productCollections, setProductCollections ] = useState("")
  const { refetch, data } = useQuery({
    queryKey: ["product-collection-data"],
    queryFn: () => params.get("productCompany") ? getProductCollectionCompanyApi(company) : getProductCollectionTypeApi(company),
    enabled: true,
    onSuccess: (response) => { 
      setProductCollections(response?.data);
    },
  });
  //! Function
  //! Effect
  useEffect(() => {
    refetch && refetch();
  }, [])
  //! Render
  return (
    <SWrapProductCollection>
      <div className={cx("v5-list-items")}>
        <h1>Điện thoại di động (smartphone)</h1>
        <div>
          <p>
            Đi cùng với sự phát triển của khoa học công nghệ thì chiếc{" "}
            <b>điện thoại</b> (hay smartphone) đang ngày càng được cải tiến để
            phục vụ tốt hơn cho cuộc sống của con người.
          </p>
        </div>
        <div className={cx("v5-grid-items")}>
          {(company ? productCollections?.data : productData?.data)?.map((el) => {
            return (
              <div className={cx("v5-item")} key={el?.id}>
                <a
                  title={el?.productName}
                  href={`/product/${el?._id}?productCompany=${el?.productCompany}`}
                  className={cx("_img")}
                  style={{display: "flex", justifyContent: "center", maxHeight: "200px"}}
                >
                  <img alt={el?.productName} src={el?.images[0]?.url} height={"100%"} style={{objectFit: "contain"}}/>
                </a>
                <h3>
                  <a
                    title={el?.productName}
                    href={`/product/${el?._id}?productCompany=${el?.productCompany}`}
                  >
                    {el?.productName}
                  </a>
                </h3>
                <div className="price">
                  <strong>{el?.promotionalPrice}</strong>
                </div>
                <div className="promotion-list">
                  <div>
                    <label>KM</label>
                    <span title="Tặng PMH 2.000.000đ hoặc Thu cũ điện thoại gập hỗ trợ thêm 4 triệu đồng/Thu cũ điện thoại khác hỗ trợ tới 3 triệu đồng (Xem chi tiết)">
                      Tặng PMH 2.000.000đ hoặc Thu cũ đ...
                    </span>
                  </div>
                  <div>
                    <label>KM</label>
                    <span title="Giảm thêm 1.000.000đ qua QR Code">
                      Giảm thêm 1.000.000đ qua QR Code
                    </span>
                  </div>
                  <div className="more">+ 11 Ưu đãi khác</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SWrapProductCollection>
  );
};

export default ProductCollection;

export const SWrapProductCollection = styled.div`
  .v5-list-items {
    flex-grow: 3;
    h1 {
      font-size: 1.5em;
    }
    div p,
    div b {
      font-size: 12pt;
      font-family: "Open Sans", sans-serif;
      color: #000000;
      background-color: transparent;
      font-style: normal;
      font-variant: normal;
      text-decoration: none;
      vertical-align: baseline;
      white-space: pre;
      white-space: pre-wrap;
    }
  }

  .v5-grid-items {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-bottom: 15px;
    .v5-item {
      background: #fff;
      border-radius: 6px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      justify-items: start;
      a._img {
        display: block;
        margin: 0 auto;
        width: 160px;
        height: 160px;
      }
      h3 {
        padding: 0;
        margin: 0 0 10px 0;
        font-size: 15px;
        text-align: center;
        a {
          color: var(--blackText);
          font-size: 12px;
          font-weight: 600;
        }
      }
      .price {
        margin-bottom: 12px;
        font-size: 15px;
        display: flex;
        justify-content: center;
        justify-items: stretch;
        strong {
          color: #fd475a;
          line-height: 18px;
          padding-right: 10px;
        }
      }
      .promotion-list {
        display: flex;
        flex-direction: column;
      }
      .promotion-list > div {
        display: flex;
        height: 24px;
        overflow: hidden;
        margin-bottom: 8px;
        label {
          background: #ffdfd4;
          padding: 2px 6px;
          color: #fc521d;
          border-radius: 3px;
          font-weight: 800;
          margin-right: 5px;
          font-size: 11px;
          line-height: 19px;
        }
        span {
          line-height: 24px;
        }
      }
      .promotion-list > div.more {
        text-align: center;
        justify-content: center;
        font-weight: 800;
        color: #fc521d;
        margin-bottom: 0;
      }
    }
  }
`;
