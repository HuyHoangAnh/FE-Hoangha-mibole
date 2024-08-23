import React, { Fragment, useState } from "react";
import UploadWidget from "../../common/UploadWidget"
import { createProductApi } from "../../services/Product";
import { toast } from "react-toastify";

const ModalCreateProduct = (props) => {
  //! Props
  const { isOpenCreateProduct, setIsOpenCreateProduct } = props
  //! State
  const [amount, setAmount] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [promotionalPrice, setPromotionalPrice] = useState("");
  const [productCompany, setProductCompany] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [priceGoesUp, setPriceGoesUp] = useState("");
  const [images, setImages] = useState({
    uid: "",
    name: "",
    url: "",
    status: "",
  },);
  const [discountEvent, setDiscountEvent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //! Function
  const handleCreateProduct = async () => {
    setIsLoading(true);
    let res = await createProductApi(amount, productName, productType, promotionalPrice, productCompany, originalPrice, priceGoesUp, images, discountEvent);
    if (res?.data?.msg === "Success") {
      toast.success("Thêm sản phẩm thành công")
      setIsOpenCreateProduct(false)
      window.location.reload()
    } else {
      if (res && res?.data?.statusCode === 401) {
        toast.error(res?.data?.msg);
      }
    }
    setIsLoading(false);
  };
  //! Effect
  //! Render
  return (
    <Fragment>
      {isOpenCreateProduct &&
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
                      setIsOpenCreateProduct(false)
                      setImages({
                        uid: "",
                        name: "ImageProduct",
                        url: "",
                        status: "Active",
                      })
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
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg sm:col-span-4 grid gap-y-3">
                      <img
                        className="object-cover object-center"
                        src={images?.url ? images?.url : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAKlBMVEXT09P+/v7Q0NDW1tbf39/4+Pj7+/vs7Ozv7+/a2trz8/Po6Ojj4+PMzMymzRIKAAAEaElEQVR4nO2dyZbjIAxFbcADQ///7zbESWWwk3iQeHKO7qpO1cavEUISQt00iqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoazBNYxvrL+Qf0J9zhKwixWEM3YUwDik5f0pF3sUh9O0LfRii8+hv24RpXAzdq5AbXYiuGOApMDaNb5Vc9YzpJOaW5tY1pw8J/Z3fMW6NlEmOk25r4zolE6PkrWPcFikFuYtjh61a2naQ6QiMD9u1tG3wEhfHfXHH7+gc+svnpJ1ashppTtqklQ55iV6WGuMOaMlqJDk14w9pyWoEeQF7UEtWI8ZD/9u99+90/9AqJsyOs3LOIMPQEoWWthXh0iyBkRU6AduGxsgKeEM7eMI8IuC02ZTAfGYESzkUxrzSJ/DSEC4MemkId0wBvGvIXNnEgNTiic6YGx2y2El0+N8BhgGWdPsXRlwYQG1lUDvbXCb7Dq66EenFRJiYXYWyzwSYGNIT8wpKi2fQ0qI8AMP+x3kA4lhmAhTR0OWYj4yYWNMwOLPszkBiyM//QqdiVMyTGI4zs+11ZVTMkxjy1KyAOmcYMoCcA4DEkFcACqhC4E9FzZZDDKyiwXDQ9CgttIXmCVy5mcED4KqADB4AVzez5BlNAF5skh+buLJZ09Bez5QLGqCYff1y7wnQ/m1if4a0Mup7AOhdU0NcO4PeAja0S4NeGNKkBpTKPEDVBySiE4isRwPen3FRQxQ7g5L/F2gMrbMixGx/zrAEvj9rgsKj4T3ZH4ePTvRx+YA5mkADGzMWOBY+Y4PlOUeSTmR6ucz+piBZNnZlpxcQtPcf2fMeqMPmY+8xbvPGEfxW09hhU9TZDzJimGVM4zb4gVH6e21j00pbC0nystxYJSec5dl5DgjGj3unH4Ud+d94vzwhCd8qc4xpfAz90wr1fYi+/OWEmIz1KcYhE2PytvwG/VXHMFfQ36EoiqL8GOVksfY6Ecz7/OP1l2cja3BxfJ0+1YUxOmdPEzCXf3vvPo6e6sbk/BmWKCtJw4rCRjck6XpynjmsLmqEQXKuaUrMv1ZKoWQEMuUYu8a85uYmcXVs3DveKEpzbmbvpKaLHAlXs3eONp5JugcgaAcSMdukoXrhLOJi49BueaQTUEOnG6IBnwy2sez/RQ12QOCekYafQKr5qVZgjlfnKC/A8+gUIoXnAS1mbXhenBXqN57xPDjL9IAOJ+rG+Sc9dZvoDf2Qlke6qvkn/fScZ6pGnVwb5o+KTSi8RlaoaGjMRlaoZmgsL2dfqZQP0DXMf6JSMz377p+o4gOOjwBeR41BwWxxzIwaS1NLS4U32/UWpkLAyTPSZBnuQSc0LzLWwlxJ40ovl+FOOitaGfekA9IhwCtgveuoa2XMdlYnLLvDGaDVtjLW5448g/M+wTnEvfKW4axvMtdkluBLn8kuyTaIYQsCagaZN/iCzer7n/MRV4WqzCts447oL8q+w3aVVt+Z8b1HBTgzPnf2Y2IqR2YFrv+RonqYySpG/Mr8B2O5OnI1m+QvAAAAAElFTkSuQmCC"}
                        alt=""
                      />
                      <UploadWidget title="Thêm ảnh sản phẩm" setImages={setImages} />
                    </div>
                    <div className="grid sm:col-span-8 lg:col-span-7 gap-y-3">
                      <h2 className="text-4xl font-bold text-gray-900 sm:pr-12">
                        Tên sản phẩm:
                        <input value={productName} onChange={(event) => { setProductName(event.target.value) }} type="text" class=" bg-white block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </h2>
                      <p className="text-xl text-gray-900 sm:pr-12">
                        Số lượng sản phẩm :
                        <input value={amount} onChange={(event) => { setAmount(event.target.value) }} type="text" class=" bg-white block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </p>
                      <p className="text-xl text-gray-900 sm:pr-12">
                        Giá sản phẩm (mặc định) :
                        <input value={originalPrice} onChange={(event) => { setOriginalPrice(event.target.value) }} type="text" class=" bg-white block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </p>
                      <p className="text-xl text-gray-900 sm:pr-12">
                        Giá giảm giá:
                        <input value={promotionalPrice} onChange={(event) => { setPromotionalPrice(event.target.value) }} type="text" class=" bg-white block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </p>
                      <p className="text-xl text-gray-900 sm:pr-12">
                        Giá lên đời:
                        <input value={priceGoesUp} onChange={(event) => { setPriceGoesUp(event.target.value) }} type="text" class=" bg-white block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </p>
                      <p className="text-xl text-gray-900 sm:pr-12">
                        Hãng:
                        <input value={productCompany} onChange={(event) => { setProductCompany(event.target.value) }} type="text" class=" bg-white block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </p>
                      <p className="text-xl text-gray-900 sm:pr-12">
                        Kiểu máy:
                        <input value={productType} onChange={(event) => { setProductType(event.target.value) }} type="text" class=" bg-white block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </p>
                      <p className="text-xl text-gray-900 sm:pr-12">
                        Khuyến mãi:
                        <input value={discountEvent} onChange={(event) => { setDiscountEvent(event.target.value) }} type="text" class=" bg-white block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </p>
                      <button
                        onClick={handleCreateProduct}
                        type="submit"
                        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 px-8 py-3 text-base font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Thêm sản phẩm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </Fragment>
  );
};

export default ModalCreateProduct;
