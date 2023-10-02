import { combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import searchbarReducer from "./reducers/searchbarReducer";

const rootReducer = combineReducers({
  products: productsReducer.products,
  singleProduct: productsReducer.singleProduct,
  categories: categoriesReducer.categories,
  singleCategory: categoriesReducer.singleCategory,
  searchBar: searchbarReducer,
});

export default rootReducer;
