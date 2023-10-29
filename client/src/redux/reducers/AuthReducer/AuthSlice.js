import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

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
  error: null,
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
    setError: (state, action) => {
      state.error = action.payload;
      toast.error(`${action.payload.response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  },
});

export const { setUser, clearUser, setLoading, setError } = userSlice.actions;
export const selectLoading = (state) => state.user.loading;
export default userSlice.reducer;
