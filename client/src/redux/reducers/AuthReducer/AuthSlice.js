import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const getUserInfoFromCookies = () => {
  const userInfoCookie = Cookies.get("userInfo"); // Replace 'userInfo' with your actual cookie name
  if (userInfoCookie) {
    try {
      // Parse the JSON from the cookie
      const userInfo = JSON.parse(userInfoCookie);
      return userInfo;
    } catch (error) {
      // Handle any parsing errors
    }
  }
  return null;
};

const initialState = {
  user: getUserInfoFromCookies() || null,
  token: null,
  loading: false, // Add loading state
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.savedUser;
      state.token = action.payload.jwt;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, clearUser, setLoading } = userSlice.actions;
export const selectLoading = (state) => state.user.loading;
export default userSlice.reducer;
