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
  getAllProducts(page, pageSize) {
    return requests.get(`/products/all?page=${page}&limit=${pageSize}`);
  },
  deleteProduct(id) {
    return requests.delete(`/products/${id}`);
  },
  updateProduct(id, data) {
    return requests.put(`/products/${id}`, data);
  },
};

export default ProductServices;
