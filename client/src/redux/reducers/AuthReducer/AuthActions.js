import { createAsyncThunk } from "@reduxjs/toolkit";
import { SIGNUP, LOGIN } from "../../Constants";
import AuthServices from "../../../Services/AuthServices";
import { setLoading, setUser, setError } from "./AuthSlice";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

export const signupAction = createAsyncThunk(
  SIGNUP,
  async (data, { dispatch }) => {
    try {
      dispatch(setLoading(true)); // Set loading to true
      const response = await AuthServices.signup(data);
      const { jwt, savedUser } = response;
      Cookies.set("userInfo", JSON.stringify({ jwt, savedUser }), {
        expires: 7,
      });
      dispatch(setUser({ savedUser, jwt }));
      dispatch(setLoading(false)); // Set loading to false
      window.location = "/";
      return response;
    } catch (error) {
      dispatch(setLoading(false)); // Set loading to false on error
      console.error(error);
    }
  }
);

export const loginAction = createAsyncThunk(
  LOGIN,
  async (data, { dispatch }) => {
    try {
      dispatch(setLoading(true)); // Set loading to true
      const response = await AuthServices.login(data);
      const { jwt, user: savedUser } = response;
      Cookies.set("userInfo", JSON.stringify({ jwt, savedUser }), {
        expires: 7,
      });
      dispatch(setUser({ savedUser, jwt }));
      dispatch(setLoading(false)); // Set loading to false
      window.location = "/";
      return response;
    } catch (error) {
      dispatch(setLoading(false)); // Set loading to false
      console.log(error);
    }
  }
);
