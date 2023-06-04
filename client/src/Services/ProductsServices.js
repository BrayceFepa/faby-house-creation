import requests from "./fhcRequests";

const ProductServices = {
  getShowingProducts() {
    return requests.get(`/products`);
  },

  getProductById(id) {
    return requests.get(`/products/${id}`);
  },
};

export default ProductServices;
