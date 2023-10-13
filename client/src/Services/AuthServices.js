import requests from "./fhcRequests";

const AuthServices = {
  login(data) {
    return requests.post("/auth/login", data);
  },
  signup(data) {
    return requests.post("/auth/register", data);
  },
};

export default AuthServices;
