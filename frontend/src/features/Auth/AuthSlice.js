import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const initialState = {
  loginStatus: "idle",
  signupStatus: "idle",
  error: "",
  User: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (dataToBeSent, { rejectWithValue }) => {
    toast.info("logging in... !");
    if (dataToBeSent?.loader) {
      dataToBeSent.loader(true);
    }

    try {
      const data = await axios.post(
        `https://fitsharksm.herokuapp.com/api/user/login`,
        dataToBeSent
      );
      localStorage.setItem("user", JSON.stringify(data.data));
      toast.success("User has been logged in !", {});
      if (dataToBeSent?.loader) {
        dataToBeSent.loader(false);
      }
      return data.data;
    } catch (error) {
      if (dataToBeSent?.loader) {
        dataToBeSent.loader(false);
      }
      console.log(error?.response?.data?.error);
      toast.error(`${error?.response?.data?.error}`);
      return rejectWithValue(error?.response?.data?.error);
    }
  }
);
export const signUp = createAsyncThunk(
  "user/signup",
  async (dataToBeSent, { rejectWithValue }) => {
    toast.info("Signing in... !");
    try {
      const data = await axios.post(
        `https://fitsharksm.herokuapp.com/api/user/signup`,
        dataToBeSent
      );
      localStorage.setItem("user", JSON.stringify(data.data));
      toast.success("User has been signed in !", {});
      return data.data;
    } catch (error) {
      console.log(error);
      console.log(error?.response);

      toast.error(`${error?.response?.data?.error}`);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state, { payload }) => {
      localStorage.removeItem("user");
      state.User = {};
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loginStatus = "pending";
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loginStatus = "success";
      state.User = payload;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loginStatus = "success";
      state.error = payload;
    },
    [signUp.pending]: (state, action) => {
      state.signupStatus = "pending";
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.signupStatus = "success";
      state.User = payload;
    },
    [signUp.rejected]: (state, { payload }) => {
      state.signupStatus = "success";
      state.error = payload;
    },
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
