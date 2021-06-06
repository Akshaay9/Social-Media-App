import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "pending",
  individualPost: [],
};
export const getAllPosts = createAsyncThunk("posts/all", async () => {
  const data = await axios.get(`http://localhost:5000/api/user/post`);
  return data.data;
});

export const uploadPoast = createAsyncThunk(
  "posts/upload",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        `http://localhost:5000/api/user/post`,
        dataToBeSent.data,
        config
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const upDatePoast = createAsyncThunk(
  "posts/update",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        `http://localhost:5000/api/user/post/${dataToBeSent.id}`,
        dataToBeSent.data,
        config
      );
      console.log(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
      console.log(error?.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getIndividualPost: (state, { payload }) => {
      const indiviualPost = state.posts.filter((ele) => ele._id == payload);
      state.individualPost = indiviualPost;
    },
    clearIndividualPost: (state, { payload }) => {
      state.individualPost = [];
    },
  },
  extraReducers: {
    [getAllPosts.pending]: (state, action) => {
      state.status = "pending";
    },
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.posts = payload;
    },
    [uploadPoast.pending]: (state, action) => {
      state.status = "pending";
    },
    [uploadPoast.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.posts.unshift(payload);
    },
    [uploadPoast.rejected]: (state, { payload }) => {
      state.status = "success";
    },
    [upDatePoast.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.posts = state.posts.map((ele) =>
        ele._id === payload._id ?  payload  : ele
      );
    },
    [upDatePoast.rejected]: (state, { payload }) => {
      state.status = "success";
    },
  },
});

export const { getIndividualPost, clearIndividualPost } = postSlice.actions;

export default postSlice.reducer;
