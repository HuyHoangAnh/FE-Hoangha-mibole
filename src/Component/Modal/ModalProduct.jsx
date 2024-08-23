import React, { Fragment, useCallback, useEffect, useState } from "react";
import { deleteProductDetailApi, pathProductDetailApi } from "../../services/Product";
import { useMutation } from "@tanstack/react-query";
import UploadWidget from "../../common/UploadWidget";

const ModalProduct = (props) => {
  //! Props
  const { isOpenModal, setIsOpenModal, productData } = props;
  //! State
  const idProduct = localStorage.getItem("checkIdProduct")
  const [isCheckUpdate, setIsCheckProduct] = useState(false)
  const [amountUpdate, setAmountUpdate] = useState("");
  // const [productNameUpdate, setProductNameUpdate] = useState("");
  const [productTypeUpdate, setProductTypeUpdate] = useState("");
  const [promotionalPriceUpdate, setPromotionalPriceUpdate] = useState("");
  const [productCompanyUpdate, setProductCompanyUpdate] = useState("");
  const [originalPriceUpdate, setOriginalPriceUpdate] = useState("");
  const [priceGoesUpUpdate, setPriceGoesUpUpdate] = useState("");
  const [discountEventUpdate, setDiscountEventUpdate] = useState("");
  const [imagesUpdate, setImagesUpdate] = useState({
    uid: "",
    name: "",
    url: "",
    status: "",
  });
  //! Function
  const checkProduct = productData?.data?.filter(
    (item) => item._id === localStorage.getItem("checkIdProduct")
  );
  // Update Product
  const handleSave = async () => {
    const updateProductDetail = {
      ...checkProduct,
      amount: amountUpdate || checkProduct[0]?.amount,
      // productName: productNameUpdate,
      productType: productTypeUpdate || checkProduct[0]?.productType,
      promotionalPrice: promotionalPriceUpdate || checkProduct[0]?.promotionalPrice,
      productCompany: productCompanyUpdate || checkProduct[0]?.productCompany,
      originalPrice: originalPriceUpdate || checkProduct[0]?.originalPrice,
      priceGoesUp: priceGoesUpUpdate || checkProduct[0]?.priceGoesUp,
      images: {
      uid: imagesUpdate.uid || checkProduct[0]?.images[0]?.uid,
      name: imagesUpdate.name || checkProduct[0]?.images[0]?.name,
      url: imagesUpdate.url || checkProduct[0]?.images[0]?.url,
      status: imagesUpdate.status || checkProduct[0]?.images[0]?.status,
    },
      discountEvent: discountEventUpdate || checkProduct[0]?.discountEvent,
    };
    let res = await pathProductDetailApi(idProduct, updateProductDetail);
  };
  // Delete product
  const mutateDeleteProduct = useMutation({
    mutationFn: () => deleteProductDetailApi(localStorage.getItem("checkIdProduct"), localStorage.getItem("token")),
  });
  const handleDelete = useCallback(async () => {
    try {
      const response = await mutateDeleteProduct.mutateAsync();
      const success = response?.data?.msg;
      if (success === "Success") {
        setIsOpenModal(false)
        window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  }, [localStorage.getItem("checkIdProduct")]);
  //! Effect
  //! Render
  return (
    <Fragment>
      {isOpenModal && (
        <div className="relative z-10" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    onClick={() => {
                      localStorage.removeItem("checkIdUser");
                      setIsOpenModal(false);
                    }}
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg sm:col-span-4 ">
                      {checkProduct.map((el) => {
                        return (
                          <Fragment>
                            {el?.images?.map((img) => {
                              return (
                                <img
                                  className="object-cover object-center"
                                  src={img?.url ? img?.url : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAKlBMVEXT09P+/v7Q0NDW1tbf39/4+Pj7+/vs7Ozv7+/a2trz8/Po6Ojj4+PMzMymzRIKAAAEaElEQVR4nO2dyZbjIAxFbcADQ///7zbESWWwk3iQeHKO7qpO1cavEUISQt00iqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoazBNYxvrL+Qf0J9zhKwixWEM3YUwDik5f0pF3sUh9O0LfRii8+hv24RpXAzdq5AbXYiuGOApMDaNb5Vc9YzpJOaW5tY1pw8J/Z3fMW6NlEmOk25r4zolE6PkrWPcFikFuYtjh61a2naQ6QiMD9u1tG3wEhfHfXHH7+gc+svnpJ1ashppTtqklQ55iV6WGuMOaMlqJDk14w9pyWoEeQF7UEtWI8ZD/9u99+90/9AqJsyOs3LOIMPQEoWWthXh0iyBkRU6AduGxsgKeEM7eMI8IuC02ZTAfGYESzkUxrzSJ/DSEC4MemkId0wBvGvIXNnEgNTiic6YGx2y2El0+N8BhgGWdPsXRlwYQG1lUDvbXCb7Dq66EenFRJiYXYWyzwSYGNIT8wpKi2fQ0qI8AMP+x3kA4lhmAhTR0OWYj4yYWNMwOLPszkBiyM//QqdiVMyTGI4zs+11ZVTMkxjy1KyAOmcYMoCcA4DEkFcACqhC4E9FzZZDDKyiwXDQ9CgttIXmCVy5mcED4KqADB4AVzez5BlNAF5skh+buLJZ09Bez5QLGqCYff1y7wnQ/m1if4a0Mup7AOhdU0NcO4PeAja0S4NeGNKkBpTKPEDVBySiE4isRwPen3FRQxQ7g5L/F2gMrbMixGx/zrAEvj9rgsKj4T3ZH4ePTvRx+YA5mkADGzMWOBY+Y4PlOUeSTmR6ucz+piBZNnZlpxcQtPcf2fMeqMPmY+8xbvPGEfxW09hhU9TZDzJimGVM4zb4gVH6e21j00pbC0nystxYJSec5dl5DgjGj3unH4Ud+d94vzwhCd8qc4xpfAz90wr1fYi+/OWEmIz1KcYhE2PytvwG/VXHMFfQ36EoiqL8GOVksfY6Ecz7/OP1l2cja3BxfJ0+1YUxOmdPEzCXf3vvPo6e6sbk/BmWKCtJw4rCRjck6XpynjmsLmqEQXKuaUrMv1ZKoWQEMuUYu8a85uYmcXVs3DveKEpzbmbvpKaLHAlXs3eONp5JugcgaAcSMdukoXrhLOJi49BueaQTUEOnG6IBnwy2sez/RQ12QOCekYafQKr5qVZgjlfnKC/A8+gUIoXnAS1mbXhenBXqN57xPDjL9IAOJ+rG+Sc9dZvoDf2Qlke6qvkn/fScZ6pGnVwb5o+KTSi8RlaoaGjMRlaoZmgsL2dfqZQP0DXMf6JSMz377p+o4gOOjwBeR41BwWxxzIwaS1NLS4U32/UWpkLAyTPSZBnuQSc0LzLWwlxJ40ovl+FOOitaGfekA9IhwCtgveuoa2XMdlYnLLvDGaDVtjLW5448g/M+wTnEvfKW4axvMtdkluBLn8kuyTaIYQsCagaZN/iCzer7n/MRV4WqzCts447oL8q+w3aVVt+Z8b1HBTgzPnf2Y2IqR2YFrv+RonqYySpG/Mr8B2O5OnI1m+QvAAAAAElFTkSuQmCC"}
                                  alt=""
                                />
                              )
                            })}
                          </Fragment>
                        )
                      })}
                      <UploadWidget title="Thêm ảnh sản phẩm" setImagesUpdate={setImagesUpdate} imagesUpdate={imagesUpdate} />
                    </div>
                    {checkProduct.map((el) => {
                      return (
                        <div id={el?._id} className="grid sm:col-span-8 lg:col-span-7 gap-y-3">
                          <h2 className="text-4xl font-bold text-gray-900 sm:pr-12">
                            {el?.productName ? el?.productName : "Chưa xác định"}
                          </h2>
                          <p className="text-xl text-gray-900 sm:pr-12">
                            Giá sản phẩm:
                            {""} <input
                              type="text"
                              placeholder={el?.originalPrice ? el?.originalPrice : "Chưa xác định"}
                              value={originalPriceUpdate}
                              onChange={(e) => setOriginalPriceUpdate(e.target.value)}
                            />
                          </p>
                          <p className="text-xl text-gray-900 sm:pr-12">
                            Giá giảm giá:
                            {""} <input
                              type="text"
                              placeholder={el?.promotionalPrice ? el?.promotionalPrice : "Chưa xác định"}
                              value={promotionalPriceUpdate}
                              onChange={(e) => setPromotionalPriceUpdate(e.target.value)}
                            />
                          </p>
                          <p className="text-xl text-gray-900 sm:pr-12">
                            Giá lên đời:
                            {""} <input
                              type="text"
                              placeholder={el?.priceGoesUp ? el?.priceGoesUp : "Chưa xác định"}
                              value={priceGoesUpUpdate}
                              onChange={(e) => setPriceGoesUpUpdate(e.target.value)}
                            />
                          </p>
                          <p className="text-xl text-gray-900 sm:pr-12">
                            Hãng:
                            {""} <input
                              type="text"
                              placeholder={el?.productCompany ? el?.productCompany : "Chưa xác định"}
                              value={productCompanyUpdate}
                              onChange={(e) => setProductCompanyUpdate(e.target.value)}
                            />
                          </p>
                          <p className="text-xl text-gray-900 sm:pr-12">
                            Kiểu máy:
                            {""} <input
                              type="text"
                              placeholder={el?.productType ? el?.productType : "Chưa xác định"}
                              value={productTypeUpdate}
                              onChange={(e) => setProductTypeUpdate(e.target.value)}
                            />
                          </p>
                          <p className="text-xl text-gray-900 sm:pr-12">
                            Khuyến mãi:
                            {""} <input
                              type="text"
                              placeholder={el?.discountEvent ? el?.discountEvent : "Chưa xác định"}
                              value={discountEventUpdate}
                              onChange={(e) => setDiscountEventUpdate(e.target.value)}
                            />
                          </p>
                          <button
                            onClick={handleSave}
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-red-400 px-8 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Sửa thông tin sản phẩm
                          </button>
                          <button
                            onClick={handleDelete}
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-red-400 px-8 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Xóa sản phẩm
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ModalProduct;
