import axios from "axios";
import * as APIEndPoint from "./apiEndPoint.jsx";


export const loginApi = (account,password) => {
    // return axios.post(`${import.meta.env.VITE_BACK_END_HOST}${APIEndPoint.API_ACCOUNT}/login`, {email, password});
    return axios.post(`http://localhost:8000${APIEndPoint.API_ACCOUNT}/login`, {account, password});
}

