import requests from "./fhcRequests";

const CategorieServices = {
  getShowingCategories() {
    return requests.get(`/categories`);
  },
  getCategoryById(id) {
    return requests.get(`/categories/${id}`);
  },
};

export default CategorieServices;
