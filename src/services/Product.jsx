import axios from "axios";
import * as APIEndPoint from "./apiEndPoint.jsx";

export const getProductApi = () => {
    // return axios.post(`${import.meta.env.VITE_BACK_END_HOST}${APIEndPoint.API_ACCOUNT}/login`, {email, password});
    return axios.get(`http://localhost:8000${APIEndPoint.API_PRODUCT}`);
}

export const getProductDetailApi = (id) => {
    return axios.get(`http://localhost:8000${APIEndPoint.API_PRODUCT}/${id}`)
}
export const getProductCollectionCompanyApi = (company) => {
    return axios.get(`http://localhost:8000${APIEndPoint.API_PRODUCT}?productCompany=${company}`)
}

export const getProductCollectionTypeApi = (company) => {
    return axios.get(`http://localhost:8000${APIEndPoint.API_PRODUCT}?productType=${company}`)
}