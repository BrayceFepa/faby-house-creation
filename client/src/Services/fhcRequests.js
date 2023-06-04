import axios from "axios";
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

const responseBody = (response) => response.data;

const requests = {
  get: (url, body) => instance.get(url, body).then(responseBody),
  post: (url, body, headers) =>
    instance.post(url, body, headers).then(responseBody),
  put: (url, body) => instance.put(url, body).then(responseBody),
};

export default requests;
