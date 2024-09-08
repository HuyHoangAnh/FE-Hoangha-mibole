import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { postOrderApi } from "../../services/Order";

const Cart = () => {
  //! Props
  //! State
  const [productAddToCart, setProductAddToCart] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  //! Function
  const removeFromCart = (productId) => {
    const updatedCart = productAddToCart.filter(
      (product) => product?._id !== productId
    );
    setProductAddToCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = productAddToCart.map((product) => {
      if (product._id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setProductAddToCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const handleSelectProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };
  // const handleCheckout = async () => {
  //   const token = localStorage.getItem("token");
  //   const selectedProductDetails = productAddToCart.filter((product) =>
  //     selectedProducts.includes(product._id)
  //   );
  //   const orderData = {
  //     userID: localStorage.getItem("userId"),
  //     products: selectedProductDetails.map((product) => ({
  //       idProduct: product._id,
  //       amount: product.quantity,
  //     })),
  //   };

  //   try {
  //     postOrderApi(token, orderData )
  //     alert("Order created successfully!");
  //   } catch (error) {
  //     console.error("Error creating order:", error);
  //     alert("Error creating order");
  //   }
  // };
  const handleCheckout = async () => {
        const token = localStorage.getItem("token");
    const selectedProductDetails = productAddToCart.filter((product) =>
      selectedProducts.includes(product._id)
    );
    const orderData = {
      userID: localStorage.getItem("userId"),
      products: selectedProductDetails.map((product) => ({
        idProduct: product._id,
        amount: product.quantity,
      })),
    };
    let res = await postOrderApi(token, orderData );
    console.log("res",res);
    
    // if (res?.data?.msg === "Success") {
    //   toast.success("Thêm sản phẩm thành công")
    //   setIsOpenCreateProduct(false)
    //   window.location.reload()
    // } else {
    //   if (res && res?.data?.statusCode === 401) {
    //     toast.error(res?.data?.msg);
    //   }
    // }
  };
  //! Effect
  useEffect(() => {
    setProductAddToCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  //! Render
  return (
    <SWrapCart>
      <div className="container">
        <div className="form">
          <h1 className="text-4xl">Giỏ hàng</h1>
          <p>Anh(chị): {localStorage.getItem("name")}</p>
          <p>Giao đến địa chỉ: {localStorage.getItem("address")}</p>
          <p>Số điện thoại: {localStorage.getItem("phone")}</p>
          <ul role="list" className="divide-y divide-gray-100">
            {productAddToCart?.map((el) => {
              return (
                <li
                  id={el?.id}
                  href={`/product/${el?._id}?productCompany=${el?.productCompany}`}
                  className="flex justify-between gap-x-6 py-5 w-full"
                >
                  <input
                      type="checkbox"
                      className="bg-white"
                      onChange={() => handleSelectProduct(el._id)}
                      checked={selectedProducts.includes(el._id)}
                    />
                  <a
                    href={`/product/${el?._id}?productCompany=${el?.productCompany}`}
                    className="flex gap-x-4 w-4/12"
                  >
                    {el?.images?.map((img) => {
                      return (
                        <img
                          className="h-20 w-20 flex-none bg-gray-50"
                          src={
                            img?.url
                              ? img?.url
                              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAKlBMVEXT09P+/v7Q0NDW1tbf39/4+Pj7+/vs7Ozv7+/a2trz8/Po6Ojj4+PMzMymzRIKAAAEaElEQVR4nO2dyZbjIAxFbcADQ///7zbESWWwk3iQeHKO7qpO1cavEUISQt00iqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoazBNYxvrL+Qf0J9zhKwixWEM3YUwDik5f0pF3sUh9O0LfRii8+hv24RpXAzdq5AbXYiuGOApMDaNb5Vc9YzpJOaW5tY1pw8J/Z3fMW6NlEmOk25r4zolE6PkrWPcFikFuYtjh61a2naQ6QiMD9u1tG3wEhfHfXHH7+gc+svnpJ1ashppTtqklQ55iV6WGuMOaMlqJDk14w9pyWoEeQF7UEtWI8ZD/9u99+90/9AqJsyOs3LOIMPQEoWWthXh0iyBkRU6AduGxsgKeEM7eMI8IuC02ZTAfGYESzkUxrzSJ/DSEC4MemkId0wBvGvIXNnEgNTiic6YGx2y2El0+N8BhgGWdPsXRlwYQG1lUDvbXCb7Dq66EenFRJiYXYWyzwSYGNIT8wpKi2fQ0qI8AMP+x3kA4lhmAhTR0OWYj4yYWNMwOLPszkBiyM//QqdiVMyTGI4zs+11ZVTMkxjy1KyAOmcYMoCcA4DEkFcACqhC4E9FzZZDDKyiwXDQ9CgttIXmCVy5mcED4KqADB4AVzez5BlNAF5skh+buLJZ09Bez5QLGqCYff1y7wnQ/m1if4a0Mup7AOhdU0NcO4PeAja0S4NeGNKkBpTKPEDVBySiE4isRwPen3FRQxQ7g5L/F2gMrbMixGx/zrAEvj9rgsKj4T3ZH4ePTvRx+YA5mkADGzMWOBY+Y4PlOUeSTmR6ucz+piBZNnZlpxcQtPcf2fMeqMPmY+8xbvPGEfxW09hhU9TZDzJimGVM4zb4gVH6e21j00pbC0nystxYJSec5dl5DgjGj3unH4Ud+d94vzwhCd8qc4xpfAz90wr1fYi+/OWEmIz1KcYhE2PytvwG/VXHMFfQ36EoiqL8GOVksfY6Ecz7/OP1l2cja3BxfJ0+1YUxOmdPEzCXf3vvPo6e6sbk/BmWKCtJw4rCRjck6XpynjmsLmqEQXKuaUrMv1ZKoWQEMuUYu8a85uYmcXVs3DveKEpzbmbvpKaLHAlXs3eONp5JugcgaAcSMdukoXrhLOJi49BueaQTUEOnG6IBnwy2sez/RQ12QOCekYafQKr5qVZgjlfnKC/A8+gUIoXnAS1mbXhenBXqN57xPDjL9IAOJ+rG+Sc9dZvoDf2Qlke6qvkn/fScZ6pGnVwb5o+KTSi8RlaoaGjMRlaoZmgsL2dfqZQP0DXMf6JSMz377p+o4gOOjwBeR41BwWxxzIwaS1NLS4U32/UWpkLAyTPSZBnuQSc0LzLWwlxJ40ovl+FOOitaGfekA9IhwCtgveuoa2XMdlYnLLvDGaDVtjLW5448g/M+wTnEvfKW4axvMtdkluBLn8kuyTaIYQsCagaZN/iCzer7n/MRV4WqzCts447oL8q+w3aVVt+Z8b1HBTgzPnf2Y2IqR2YFrv+RonqYySpG/Mr8B2O5OnI1m+QvAAAAAElFTkSuQmCC"
                          }
                          alt=""
                        />
                      );
                    })}
                    <div className="min-w-0 flex-auto">
                      <p className="text-2xl font-semibold leading-6 text-gray-900">
                        {el?.productName ? el?.productName : "Chưa xác định"}
                      </p>
                      <p className="mt-1 truncate text-xm leading-5 text-gray-500">
                        Hãng:{" "}
                        {el?.productCompany
                          ? el?.productCompany
                          : "Chưa xác định"}
                      </p>
                    </div>
                  </a>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end w-2/12">
                    <p className="mt-1 truncate text-xm leading-5 text-gray-500">
                      Số lượng:{" "}
                      <input
                        className="bg-white border-0 w-fit"
                        type="number"
                        min="1"
                        value={el.quantity} // Hiển thị số lượng từ `productAddToCart`
                        onInput={(e) => {
                          let value = e.target.value > 0 ? e.target.value : 1;

                          // Nếu giá trị lớn hơn el.amount, giới hạn lại bằng el.amount
                          if (value > el.amount) {
                            value = el.amount;
                          }

                          // Loại bỏ số 0 ở đầu nếu có
                          if (value.length > 1 && value.startsWith("0")) {
                            value = value.slice(1);
                          }

                          e.target.value = value;
                          updateQuantity(el._id, value); // Cập nhật số lượng và lưu vào localStorage
                        }}
                        inputMode="numeric"
                      />
                    </p>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end w-3/12">
                    <p>
                      Đơn giá:{" "}
                      {el?.promotionalPrice
                        ? el?.promotionalPrice
                        : "Chưa xác định"}
                    </p>
                    <p>
                      Thành tiền:{" "}
                      {el?.promotionalPrice && el?.quantity
                        ? el?.promotionalPrice * el?.quantity
                        : "Chưa xác định"}
                    </p>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end w-3/12">
                    <button
                      onClick={() => {
                        removeFromCart(el?._id);
                      }}
                    >
                      Xóa khỏi giỏ hàng
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="text-end">
          <button
              className="bg-red-400 py-3 px-20 text-white"
              onClick={handleCheckout}
              disabled={selectedProducts.length === 0} // Vô hiệu hóa nút nếu không có sản phẩm được chọn
            >
              Thanh toán
            </button>
          </div>
          {/* <CardFooter productData={productData} setQuery={setQuery} query={query} /> */}
        </div>
      </div>
    </SWrapCart>
  );
};

export default Cart;

export const SWrapCart = styled.div``;
