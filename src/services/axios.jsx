import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.BACK_END_HOST
})

export const attachTokenToHeader = (token) => {
  instance.interceptors.request.use(function(config) {
      config.headers['Authentication'] = `Bearer ${token}`;
      return config;
  }, function(error) {
      return error;
  })
}


export default instance