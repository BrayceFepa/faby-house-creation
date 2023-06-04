import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CategorieServices from "../../Services/CategorieServices";
import { FETCH_CATEGORIES, FETCH_CATEGORY_BY_ID } from "../Constants";

export const fetchCategories = createAsyncThunk(FETCH_CATEGORIES, async () => {
  const response = await CategorieServices.getShowingCategories();
  return response;
});

export const fetchCategoryById = createAsyncThunk(
  FETCH_CATEGORY_BY_ID,
  async (id) => {
    const response = await CategorieServices.getCategoryById(id);
    return response;
  }
);

const categorieSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const singleCategorySlice = createSlice({
  name: "singleCategory",
  initialState: {
    singleCategory: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleCategory = action.payload;
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = categorieSlice.actions;
export const {} = singleCategorySlice.actions;

export const selectCategories = (state) => state.categories.categories;
export const selectSingleCategory = (state) =>
  state.singleCategory.singleCategory;

export default {
  categories: categorieSlice.reducer,
  singleCategory: singleCategorySlice.reducer,
};
