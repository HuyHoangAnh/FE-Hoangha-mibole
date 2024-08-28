import React, { useState } from "react";
import IPhone11 from "../../assets/iphone-11.webp";
import classNames from "classnames/bind";
import styles from "./ProductHome.module.scss";
import Label from "../Label/Label";

const cx = classNames.bind(styles);

const ListProductHome = (props) => {
  //! Props
  const { productData, companyProduct } = props;
  //! State
  //! Function
  //! Effect
  //! Render
  const listProduct = productData?.data
    ?.filter((item) => item.productCompany === companyProduct)
    ?.slice(0, 3);

  return (
    // <div className={cx("col-content lts-product")}>
    <div class="bg-white">
      <div class="max-w-2xl py-2.5 sm:py-3 lg:max-w-7xl">
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listProduct?.slice(0, 4)?.map((el) => {
            return (
              <div class="group relative">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={el?.productName}
                    src={el?.images[0]?.url}
                    class="h-full w-full object-contain object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a
                        title={el?.productName}
                        href={`/product/${el?._id}?productCompany=${el?.productCompany}`}
                      >
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        {el?.productName}
                      </a>
                    </h3>
                    <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Khuyến mãi {el?.discountEvent} %</span>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{el?.promotionalPrice}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProductHome;
