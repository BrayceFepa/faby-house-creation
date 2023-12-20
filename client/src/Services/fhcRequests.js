import axios from "axios";
import Cookies from "js-cookie";
// import dotenv from "dotenv";
// dotenv.config();

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_FHC_API_BASE_URL}`,
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// add a request interceptor
instance.interceptors.request.use(function (config) {
  //do something before request is send
  let userInfo;
  if (Cookies.get("userInfo")) {
    userInfo = JSON.parse(Cookies.get("userInfo"));
  }

  return {
    ...config,
    headers: {
      authorization: userInfo ? `Bearer ${userInfo?.jwt}` : null,
    },
  };
});

const responseBody = (response) => response.data;

const requests = {
  get: (url, body) => instance.get(url, body).then(responseBody),
  post: (url, body, headers) =>
    instance.post(url, body, headers).then(responseBody),
  put: (url, body) => instance.put(url, body).then(responseBody),
};

export default requests;
