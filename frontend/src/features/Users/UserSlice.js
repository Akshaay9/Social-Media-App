import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Allusers: [],
  status: "pending",
  individualUserPost: [],
};

export const getAllUsers = createAsyncThunk("users/all", async () => {
  const data = await axios.get(`http://localhost:5000/api/user`);
  return data.data;
});

// follow unfollow
export const followUnfollowUser = createAsyncThunk(
  "users/followUnfollow",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        `http://localhost:5000/api/user/followUnfollow/${dataToBeSent.id}`,
        null,
        config
      );
      return data.data;
    } catch (error) {
      console.log(error);
      console.log(error?.response);
      return rejectWithValue(error.response.data);
    }
  }
);

// individual users posts
export const individualUsersPosts = createAsyncThunk(
  "users/indiposts",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.get(
        `http://localhost:5000/api/user/post/${dataToBeSent.id}`,
        config
      );
  
      return data.data;
    } catch (error) {
      console.log(error);
      console.log(error?.response);
      return rejectWithValue(error.response.data);
    }
  }
);

// user slice

export const userSlice = createSlice({
  name: "allusers",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state, action) => {
      state.status = "pending";
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.Allusers = payload;
    },
    [followUnfollowUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [followUnfollowUser.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.Allusers = payload;
    },
    [individualUsersPosts.pending]: (state, action) => {
      state.status = "pending";
    },
    [individualUsersPosts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.individualUserPost = payload;
    },
  },
});

export default userSlice.reducer;
