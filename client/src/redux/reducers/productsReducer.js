import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductServices from "../../Services/ProductsServices";
import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID } from "../Constants";

export const fetchProducts = createAsyncThunk(FETCH_PRODUCTS, async () => {
  const response = await ProductServices.getShowingProducts();
  return response;
});

export const fetchProductById = createAsyncThunk(
  FETCH_PRODUCT_BY_ID,
  async (id) => {
    const response = await ProductServices.getProductById(id);
    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    singleProduct: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.error = true;
        state.error = action.error.message;
      });
  },
});

export const {} = productSlice.actions;
export const {} = singleProductSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectSingleproduct = (state) => state.singleProduct.singleProduct;

export default {
  products: productSlice.reducer,
  singleProduct: singleProductSlice.reducer,
};
