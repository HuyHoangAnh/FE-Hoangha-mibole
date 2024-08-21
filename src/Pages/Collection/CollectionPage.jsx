import React, { useState } from "react";
import { listBanner } from "../../constant";
import classNames from "classnames/bind";
import styles from "./CollectionPage.module.scss";
import Banner from "../../Component/Banner/Banner";
import ProductCollection from "../../Component/ProductCollection/ProductCollection";
import FilterCollection from "./FilterCollection/FilterCollection";
import Social from "../../common/Social";
import TextCollections from "../../Component/TextCollection/TextCollections";
import NewHeader from "../../Component/Header/Newheader";
import styled from "styled-components";
import logoApple from "../../assets/logo-apple.webp"
import logoSamsung from "../../assets/logo-samsung.webp"
import logoXiaomi from "../../assets/logo-xiaomi.webp"
import { useQuery } from "@tanstack/react-query";
import { getProductApi } from "../../services/Product";
const listBannerImage = [
  {
    id: 1,
    title: "Apple",
    urlImg: logoApple,
    url: "/collections?productCompany=Apple",
  },
  {
    id: 2,
    title: "SamSung",
    urlImg: logoSamsung,
    url: "/collections?productCompany=Samsung",
  },
  {
    id: 3,
    title: "OPPO",
    url: "/collections?productCompany=OPPO",
  },
  {
    id: 4,
    title: "Huawei",
    url: "/collections?productCompany=Huawei",
  },
  {
    id: 5,
    title: "Xiaomi",
    urlImg: logoXiaomi,
    url: "/collections?productCompany=Apple",
  },
];

const cx = classNames.bind(styles);

const CollectionPage = () => {
  // const { id: idProduct } = useParams();
  //! Props
  //! State
  // const [ productData, setProductData ] = useState("")
  // const { refetch, data } = useQuery({
  //   queryKey: ["product-data"],
  //   queryFn: () => getProductDetailApi(idProduct),
  //   enabled: true,
  //   onSuccess: (response) => { 
  //     console.log("checked",response);

  //     setProductData(response?.data);
  //   },
  // });
  const [productData, setProductData] = useState("")
  //! Function
  const { refetch, data } = useQuery({
    queryKey: ["product-data"],
    queryFn: getProductApi,
    enabled: true,
    onSuccess: (response) => {
      setProductData(response?.data);
    },
  });
  //! Effect
  //! Render
  return (
    <div>
      <SWrapCollectionPage>
        <div className={cx("container")}>
          <div className={cx("collection-container")}>
            {/* <NewHeader /> */}
            <Banner listBanner={listBanner} />
            <div className={cx("list-company")}>
              {/* {listBannerImage.map((el) => {
                return (
                  <div key={el.id} className={cx("items")}>
                    {el?.urlImg
                      ? <img src={el?.urlImg} />
                      : <p className={cx("no-logo")}>{el?.title}</p>}
                  </div>
                );
              })} */}
              <div class="py-12 sm:py-12">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  {/* <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2> */}
                  <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {/* <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
                    <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
                    <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" /> */}
                    {listBannerImage.map((el) => {
                      return (
                        <a href={el?.url} key={el.id} className={cx("items")}>
                          {el?.urlImg
                            ? <img src={el?.urlImg} />
                            : <p className={cx("no-logo")}>{el?.title}</p>}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("list-container")}>
              {/* <FilterCollection /> */}
              <ProductCollection productData={productData} />
            </div>
            <div className={cx("list-container")}>
              <TextCollections />
            </div>
          </div>
        </div>
      </SWrapCollectionPage>
      <Social />
    </div>
  );
};

export default CollectionPage;

export const SWrapCollectionPage = styled.div`
  .container {
    flex-direction: column-reverse;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #000;
  }
  .collection-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .list-company {
    width: 100%;
    /* display: flex;
    gap: 10px; */
    .items {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      height: 50px;
      margin: 0;
    }
    .no-logo{
    /* color: var(--blackText); */
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
    font-size: 20px;
    font-weight: bold;
    }
  }
`;
