import React from "react";

const ProductAlsoLike = (props) => {
  //! Props
  const {filteredProducts} = props
  //! Render
  return (
    <div class="bg-white">
      <div class="max-w-2xl py-16 sm:py-24 lg:max-w-7xl ">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Các sản phẩm có thể bạn sẽ thích
        </h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {filteredProducts?.slice(0, 4)?.map((el) => {
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
                <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{el?.promotionalPrice}</p>
            </div>
          </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default ProductAlsoLike;
