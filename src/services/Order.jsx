import axios from "axios";
import * as APIEndPoint from "./apiEndPoint.jsx";

export const getOrderApi = (token) => {
    // return axios.post(`${import.meta.env.VITE_BACK_END_HOST}${APIEndPoint.API_ACCOUNT}/login`, {email, password});
    return axios.get(`http://localhost:8000${APIEndPoint.API_ORDER}`,{
        headers: {Authorization: `Bearer ${token}`}
    });
}

export const postOrderApi = (token) => {
    // return axios.post(`${import.meta.env.VITE_BACK_END_HOST}${APIEndPoint.API_ACCOUNT}/login`, {email, password});
    return axios.post(`http://localhost:8000${APIEndPoint.API_ORDER}`,{
        headers: {Authorization: `Bearer ${token}`}
    });
}

export const getOrderDetailApi = (id, token) => {
    return axios.get(`http://localhost:8000${APIEndPoint.API_ORDER}/${id}`,{
        headers: {Authorization: `Bearer ${token}`}
    });
}

export const deleteOrderDetailApi = (id, token) => {
    return axios.delete(`http://localhost:8000${APIEndPoint.API_ORDER}/${id}`,{
        headers: {Authorization: `Bearer ${token}`}
    });
}