import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowSearch: false,
};

const searchBarReducerSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    showSearch: (state) => {
      state.isShowSearch = !state.isShowSearch;
    },
  },
});

export const { showSearch } = searchBarReducerSlice.actions;
export default searchBarReducerSlice.reducer;
