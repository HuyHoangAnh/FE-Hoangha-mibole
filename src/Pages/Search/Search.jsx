import React, { useState, useEffect } from "react";
import axios from "axios";
import * as APIEndPoint from "../../services/apiEndPoint.jsx";
import { searchProductApi } from "../../services/Product.jsx";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

const Search = () => {
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { refetch, data } = useQuery({
    queryKey: ["search-product-data"],
    queryFn: () => searchProductApi(name),
    enabled: true,
    onSuccess: (response) => {
      setResults(response?.data?.data);
    },
  });
  useEffect(() => {
    refetch();
  }, [name]);

  //! Render
  return (
    <SWrapSearch>
      <div className="container">
        {/* <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search..."
        /> */}
        <div class="border border-success input-group">
          <div class="form-outline" data-mdb-input-init>
            <input type="search" id="form1" class="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
            <label class="form-label" for="form1">
              Search
            </label>
          </div>
          {/* <button type="button" class="btn btn-primary" data-mdb-ripple-init onClick={() => {refetch()}}>
            <i class="fas fa-search"></i>
          </button> */}
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className="v5-grid-items">
          {name &&
            results?.map((el) => (
              <div className="v5-item" key={el?.id}>
                <a
                  title={el?.productName}
                  href={`/product/${el?._id}?productCompany=${el?.productCompany}`}
                  className="_img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    maxHeight: "200px",
                  }}
                >
                  <img
                    alt={el?.productName}
                    src={el?.images[0]?.url}
                    height={"100%"}
                  />
                </a>
                <h3>
                  <a title={el?.productName} href={`/product/${el?._id}?productCompany=${el?.productCompany}`}>
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
            ))}
        </div>
      </div>
    </SWrapSearch>
  );
};

export default Search;

export const SWrapSearch = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
          margin-bottom: 0;
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
