import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { open } = checkoutSlice.actions;

export default checkoutSlice.reducer;
