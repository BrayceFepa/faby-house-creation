import { combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import categoriesReducer from "./reducers/categoriesReducer";

const rootReducer = combineReducers({
  products: productsReducer.products,
  singleProduct: productsReducer.singleProduct,
  categories: categoriesReducer.categories,
  singleCategory: categoriesReducer.singleCategory,
});

export default rootReducer;
