import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.BACK_END_HOST
})

// export const attachTokenToHeader = (token) => {
//   instance.interceptors.request.use(function(config) {
//       config.headers['Authentication'] = `Bearer ${token}`;
//       return config;
//   }, function(error) {
//       return error;
//   })
// }

instance.interceptors.response.use(function(response) {
  return response?.data ? response?.data : {statusCode: response?.status}; 
}, function (error) {
  return Promise.reject(error)
});


export default instance