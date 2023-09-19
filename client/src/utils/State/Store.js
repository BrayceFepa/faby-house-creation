import { configureStore } from "@reduxjs/toolkit";
import CheckoutReducer from "./Slice/CheckoutSlice";

export const store = configureStore({
  reducer: {
    checkout: CheckoutReducer,
  },
});
