import axios from "axios";
import * as APIEndPoint from "./apiEndPoint.jsx";

// export const getProductApi = () => {
//     // return axios.post(`${import.meta.env.VITE_BACK_END_HOST}${APIEndPoint.API_ACCOUNT}/login`, {email, password});
//     return axios.get(`http://localhost:8000${APIEndPoint.API_PRODUCT}`);
// }
export const getProductApi = (page = 1) => {
    return axios.get(`http://localhost:8000${APIEndPoint.API_PRODUCT}`, {
      params: {
        page: page,
      },
    });
  };
export const getProductDetailApi = (id, company) => {
    return axios.get(`http://localhost:8000${APIEndPoint.API_PRODUCT}/${id}?productCompany=${company}`)
}
export const getProductCollectionCompanyApi = (company) => {
    return axios.get(`http://localhost:8000${APIEndPoint.API_PRODUCT}?productCompany=${company}`)
}

export const getProductCollectionTypeApi = (company) => {
    return axios.get(`http://localhost:8000${APIEndPoint.API_PRODUCT}?productType=${company}`)
}

export const deleteProductDetailApi = (id, token) => {
    return axios.delete(`http://localhost:8000${APIEndPoint.API_PRODUCT}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    }
    )
}

export const createProductApi = (amount, productName, productType,promotionalPrice, productCompany, originalPrice, priceGoesUp, images, discountEvent) => {
    return axios.post(`http://localhost:8000${APIEndPoint.API_PRODUCT}`, {amount, productName, productType, promotionalPrice, productCompany, originalPrice, priceGoesUp, images, discountEvent});
}

export const pathProductDetailApi = (id, data) => {
    return axios.patch(`http://localhost:8000${APIEndPoint.API_PRODUCT}/${id}`,
        {
            amount: data?.amount,
            // productName: data?.productName,
            productType: data?.productType,
            promotionalPrice: data?.promotionalPrice,
            productCompany: data?.productCompany,
            originalPrice: data?.originalPrice,
            priceGoesUp: data?.priceGoesUp,
            images: data?.images,
            discountEvent: data?.discountEvent,
        }
    )
}

export const searchProductApi = (name) => {
    return axios.get(`http://localhost:8000${APIEndPoint.API_PRODUCT}?name=${name}`)
}