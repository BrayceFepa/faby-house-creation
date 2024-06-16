import requests from "./fhcRequests";

const CategorieServices = {
  getShowingCategories() {
    return requests.get(`/categories`);
  },
  getAllCategories(page, pageSize) {
    return requests.get(`/categories/all?page=${page}&limit=${pageSize}`);
  },
  getCategoryById(id) {
    return requests.post(`/categories/${id}`);
  },
  deleteCategory(id) {
    return requests.delete(`/categories/${id}`);
  },
  updateCategory(id, data) {
    return requests.put(`/categories/${id}`, data);
  },
};

export default CategorieServices;
