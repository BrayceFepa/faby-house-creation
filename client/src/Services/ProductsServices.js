import requests from "./fhcRequests";

const ProductServices = {
  getShowingProducts() {
    return requests.get(`/products`);
  },

  getProductById(id) {
    return requests.post(`/products/${id}`);
  },
  searchProductByTitle(querySearch) {
    return requests.get(`/products?${querySearch}`);
  },
  getAllProducts() {
    return requests.get(`/products/all`);
  },
};

export default ProductServices;
