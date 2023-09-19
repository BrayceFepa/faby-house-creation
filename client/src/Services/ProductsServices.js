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
};

export default ProductServices;
