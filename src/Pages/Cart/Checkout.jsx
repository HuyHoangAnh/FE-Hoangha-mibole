import React, { useEffect, useState } from "react";
import { postOrderApi } from "../../services/Order";
import PaymentMethod from "../../common/PaymentMethod";

const Checkout = () => {
  const userId = localStorage.getItem("userId");
  //! Props
  //! State
  const [productCheckout, setProductCheckout] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  //! Function
  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    const orderData = {
      userID: localStorage.getItem("userId"),
      products: productCheckout.map((product) => ({
        idProduct: product._id,
        amount: product.quantity,
      })),
    };
    let res = await postOrderApi(token, orderData);
  };

  //! Effect
  useEffect(() => {
    const checkoutKey = userId ? `checkout-${userId}` : "checkout";
    const savedCheckout = JSON.parse(localStorage.getItem(checkoutKey)) || [];
    setProductCheckout(savedCheckout);
    const total = savedCheckout.reduce((sum, product) => {
      return sum + product.promotionalPrice * product.quantity;
    }, 0);

    setTotalPrice(total);
  }, []);
  //! Render
  return (
    <div class="container mx-auto p-6">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4">Sản phẩm đơn hàng</h2>
          <div class="mb-4">
            {productCheckout?.map((el) => {
              return (
                <div class="flex justify-between mb-2">
                  <div
                    className="flex"
                    style={{ gap: "10px", alignItems: "center" }}
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
                    <div className="flex flex-column">
                      <span class="text-gray-700">
                        {el?.productName ? el?.productName : "Chưa xác định"}
                      </span>
                      <span>
                        Số lượng:{" "}
                        {el?.quantity ? el?.quantity : "Chưa xác định"}
                      </span>
                    </div>
                  </div>
                  <span class="text-gray-700">
                    {" "}
                    {el?.promotionalPrice && el?.quantity
                      ? (el?.promotionalPrice * el?.quantity)?.toLocaleString(
                          "vi-VN"
                        )
                      : "Chưa xác định"}
                  </span>
                </div>
              );
            })}
            {/* <div class="flex justify-between mb-2">
              <span class="text-gray-700">Product 1</span>
              <span class="text-gray-700">$50.00</span>
            </div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-700">Product 2</span>
              <span class="text-gray-700">$30.00</span>
            </div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-700">Shipping</span>
              <span class="text-gray-700">$5.00</span>
            </div> */}
            <div class="border-t border-gray-300 mt-4">
              <div class="flex justify-between mt-2 font-bold text-lg">
                <span>Tổng giá tiền</span>
                <span>{totalPrice?.toLocaleString("vi-VN")}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 p-4 mt-6 md:mt-0 md:ml-6 bg-white rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4">Thông tin thanh toán</h2>
          <p>Anh(chị): {localStorage.getItem("name")}</p>
          <p>Giao đến địa chỉ: {localStorage.getItem("address")}</p>
          <p>Số điện thoại: {localStorage.getItem("phone")}</p>
          <p>
            Phương thức thanh toán: <PaymentMethod />{" "}
          </p>
          <p>
            Tin nhắn tới chủ shop: {"     "}
            <input
              className="bg-white p-1.5"
              style={{
                border: "solid 1px #000",
                borderRadius: "8px",
                width: "100%",
              }}
            />
          </p>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
            onClick={handleCheckout}
            //   disabled={selectedProducts.length === 0}
          >
            Thanh toán
          </button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
