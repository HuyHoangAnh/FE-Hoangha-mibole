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
  const [quantity, setQuantity] = useState(1)
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
  console.log("quantity", quantity);

  return (
    <SWrapProduct>
      {/* <NewHeader /> */}
      <div className="container">
        <div className="product-detail">
          <div className="product-name">
            <h1>Trang chi tiết sản phẩm</h1>
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
              <p>Sản phẩm giảm giá</p>
            </div>
            <div className="_title">{productData?.productName}</div>
            <div className="_price">
              <strike className="original-price">{productData?.originalPrice} đ</strike>
              <strong className="promotional-price">{productData?.promotionalPrice} đ</strong>
              <div className="_label">{productData?.discountEvent}%</div>
            </div>
            <div className="_quantity">
              <p>Số lượng</p>
              <input
                type="number"
                min="1"
                value={quantity}
                onInput={(e) => {
                  let value = e.target.value > 0 && e.target.value;
                  // Kiểm tra nếu giá trị bắt đầu bằng 0 và độ dài lớn hơn 1
                  if (value.length > 1 && value.startsWith("0")) {
                    value = value.slice(1); // Bỏ đi số 0 ở đầu
                  }
                  e.target.value = value; // Cập nhật giá trị
                  setQuantity(value)
                }}
                inputMode="numeric"
              />
            </div>
            <div class="box-order product-action">
              <div class="box-order-btn">
                <a title="Mua ngay" data-sku="MTV03VN" href="/" class="add-buy order-btn btnQuickOrder"><strong>MUA NGAY</strong><span> (Giao tận nhà hoặc nhận tại cửa hàng)</span></a>
                <a title="Thêm vào giỏ hàng" data-sku="MTV03VN" href="/" class="add-buy add-cart">
                  <i class="icon-Cart1SolidOn"></i>
                  <label>Thêm giỏ hàng</label>
                </a>
              </div>
              {/* <div class="box-order-btn">
                <a title="Mua trả góp" href="/tra-gop/dien-thoai-di-dong/apple-iphone-15-pro-128gb-chinh-hang-vn-a" class="add-buy btn-installment order-btn btnInstallment"><strong>TRẢ GÓP 0%</strong><span>Trả trước chỉ từ 0₫</span></a>
                <a title="Mua trả góp" href="/tra-gop/dien-thoai-di-dong/apple-iphone-15-pro-128gb-chinh-hang-vn-a?color=123&amp;prepay=5&amp;month=5&amp;card=True#estimation" class="add-buy btn-installment order-btn btnInstallment"><strong>TRẢ GÓP QUA THẺ</strong><span>(Visa, Mastercard, JCB)</span></a>
              </div> */}
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
    gap: 30px;
    .product-detail .product-name h1 {
      margin-top: 30px ;
      font-size: 3rem;
      font-weight: 700;
      line-height: 24.2px;
      text-align: left;
    }
  }
  .store p{
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
    ._image {
      border: solid 1px #000;
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 430px;
    }
  }
  .detail-info-right{
    display: flex;
    flex-direction: column;
    gap: 10px;
    ._title{
      font-size: 2rem;
      font-weight: bold;
    }
    ._price{
      display: flex;
      gap: 15px;
      align-items: center;
      strike,strong{
        font-size: 1.3rem;
      }
    }
    ._label{
      border: 1px solid transparent;
    border-radius: 4.0rem;
    display: inline-block;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    line-height: 1;
    padding: .5rem 1.3rem .6rem;
    text-align: center;
    background-color: #020912;
    border-color: #fcfcfc1a;
    color: #fcfcfc;
    word-break: break-word;
    }
    ._quantity {
      p{
      font-size: 1.5rem;
      }
      input{
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
    background: #FD475A;
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
    border: 1.5px solid #FD475A;
    color: #FD475A;
}
}
  }
`;
