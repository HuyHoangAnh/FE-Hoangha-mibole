import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import { listBanner, listHeader } from "../../constant";
import styled from "styled-components";
import Banner from "../../Component/Banner/Banner";
import NewHeader from "../../Component/Header/Newheader";
import { useQuery } from "@tanstack/react-query";
import {
  getProductCollectionCompanyApi,
  getProductDetailApi,
} from "../../services/Product";
import { useLocation, useParams } from "react-router";
import ProductAlsoLike from "./ProductAlsoLike/ProductAlsoLike";

const Product = () => {
  const { id: idProduct } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const company = params.get("productCompany");
  const userId = localStorage.getItem("userId");

  //! State
  const [quantity, setQuantity] = useState(1);
  const [productData, setProductData] = useState({});

  const { refetch } = useQuery({
    queryKey: ["product-data"],
    queryFn: () => getProductDetailApi(idProduct),
    enabled: false,
    onSuccess: (response) => {
      setProductData(response?.data?.product);
    },
  });

  const [listProductAlsoLike, setListProductAlsoLike] = useState([]);

  const { refetch: refetchListProduct, data } = useQuery({
    queryKey: ["list-product-data"],
    queryFn: () =>
      params.get("productCompany")
        ? getProductCollectionCompanyApi(company, "12")
        : getProductCollectionTypeApi(company, "12"),
    enabled: true,
    onSuccess: (response) => {
      setListProductAlsoLike(response?.data?.data);
    },
  });

  //! Function
  const filteredProducts = listProductAlsoLike.filter(
    (product) => product._id !== productData._id
  );

  const updateCart = (product, quantity) => {
    let cartKey = userId ? `cart-${userId}` : "cart";
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    const index = cart.findIndex((item) => item._id === product._id);
    if (index >= 0) {
      cart[index].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem(cartKey, JSON.stringify(cart));
  };
  const handleAddToCart = () => {
    updateCart(productData, parseInt(quantity));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  };
  const updateCheckout = (product, quantity) => {
    let checkoutKey = userId ? `checkout-${userId}` : "checkout";
    let checkout = [{ ...product, quantity }];
    localStorage.setItem(checkoutKey, JSON.stringify(checkout));
  };
  const handleAddToCheckout = () => {
    updateCheckout(productData, parseInt(quantity));
  };
  //! Effect
  useEffect(() => {
    refetch && refetch();
    refetchListProduct && refetchListProduct();
  }, []);

  //! Render
  return (
    <SWrapProduct>
      <div className="container">
        <div className="product-detail">
          <div className="product-name">
            <h1>Trang chi tiết sản phẩm</h1>
          </div>
        </div>
        <div className="product-detail-info">
          <div className="detail-info-left">
            <div className="_image">
              {productData?.images?.map((el) => (
                <img
                  src={el?.url}
                  alt={productData?.productName}
                  className="drop-shadow-xl"
                />
              ))}
              <div class="fordeer-config-label">
                <div class="" style={{ width: "90px", minHeight: "40px" }}>
                  <div
                    class=""
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "0px",
                      opacity: "1",
                      width: "90px",
                      minHeight: "40px",
                      background: "rgb(14, 61, 45)",
                    }}
                  >
                    <span
                      style={{
                        color: "rgb(255, 255, 255)",
                        fontSize: "12px",
                        padding: "0.5rem",
                        textAlign: "center",
                      }}
                    >
                      <b>{productData?.productCompany}</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-info-right">
            <div className="store">
              <p>Sản phẩm giảm giá</p>
            </div>
            <div className="_title">{productData?.productName}</div>
            <div className="_price">
              <strike className="original-price">
                {productData?.originalPrice?.toLocaleString("vi-VN")} đ
              </strike>
              <strong className="promotional-price">
                {productData?.promotionalPrice?.toLocaleString("vi-VN")} đ
              </strong>
              <div className="_label">{productData?.discountEvent}%</div>
            </div>
            <div className="_quantity">
              <p>Số lượng</p>
              <input
                className="bg-white"
                type="number"
                min="1"
                value={quantity}
                onInput={(e) => {
                  let value = e.target.value > 0 && e.target.value;
                  if (value.length > 1 && value.startsWith("0")) {
                    value = value.slice(1);
                  }
                  e.target.value = value;
                  setQuantity(value);
                }}
                inputMode="numeric"
              />
            </div>
            <div className="box-order product-action">
              <div className="box-order-btn">
                <a
                  title="Mua ngay"
                  data-sku="MTV03VN"
                  href="/checkout"
                  className="add-buy order-btn btnQuickOrder"
                  onClick={(e) => {
                    e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
                    handleAddToCheckout(); // Thêm sản phẩm vào localStorage (xóa các sản phẩm cũ)
                    window.location.href = "/checkout"; // Chuyển hướng đến trang thanh toán
                  }}
                >
                  <strong>MUA NGAY</strong>
                  <span> (Giao tận nhà hoặc nhận tại cửa hàng)</span>
                </a>
                <a
                  title="Thêm vào giỏ hàng"
                  data-sku="MTV03VN"
                  href="#"
                  className="add-buy add-cart"
                  onClick={handleAddToCart} // Add onClick handler here
                >
                  <i className="icon-Cart1SolidOn"></i>
                  <label>Thêm giỏ hàng</label>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ProductAlsoLike filteredProducts={filteredProducts} />
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
    gap: 30px;
    .product-detail .product-name h1 {
      margin-top: 30px;
      font-size: 3rem;
      font-weight: 700;
      line-height: 24.2px;
      text-align: left;
    }
  }
  .fordeer-config-label {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.5;
  }
  .store p {
    font-size: 1.5rem;
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
    border-right: solid 1px #000;
    ._image {
      /* border: solid 1px #000; */
      display: flex;
      flex-direction: row;
      justify-content: center;
      max-width: 400px;
      max-height: 430px;
      height: 100%;
      position: relative;
    }
  }
  .detail-info-right {
    display: flex;
    flex-direction: column;
    gap: 10px;
    ._title {
      font-size: 2rem;
      font-weight: bold;
    }
    ._price {
      display: flex;
      gap: 15px;
      align-items: center;
      strike,
      strong {
        font-size: 1.3rem;
      }
    }
    ._label {
      border: 1px solid transparent;
      border-radius: 4rem;
      display: inline-block;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      line-height: 1;
      padding: 0.5rem 1.3rem 0.6rem;
      text-align: center;
      background-color: #020912;
      border-color: #fcfcfc1a;
      color: #fcfcfc;
      word-break: break-word;
    }
    ._quantity {
      p {
        font-size: 1.5rem;
      }
      input {
        width: 70px;
        height: 30px;
        text-align: center;
      }
    }
    .box-order {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      .box-order-btn {
        display: flex;
        gap: 10px;
        width: 100%;
      }
      .order-btn {
        text-decoration: none;
        border: none;
        border-radius: 10px;
        color: #fff;
        flex-direction: column;
        gap: 4px;
        outline: none;
        width: fit-content;
        justify-content: center;
        display: flex;
        text-align: center;
        background: #fd475a;
        padding: 10px 50px;
      }
      .add-cart {
        text-decoration: none;
        display: flex;
        align-items: center;
        background-color: initial;
        border: 2px solid #e04040;
        border-radius: 10px;
        flex-direction: column;
        justify-content: center;
        width: 127px;
        background: ư;
        border: 1.5px solid #fd475a;
        color: #fd475a;
      }
    }
  }
`;
