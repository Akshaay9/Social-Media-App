import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
  individualPost: [],
};
export const getAllPosts = createAsyncThunk("posts/all", async () => {
  const data = await axios.get(`http://localhost:5000/api/user/post`);
  return data.data;
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getIndividualPost: (state, { payload }) => {
      const indiviualPost = state.posts.filter((ele) => ele._id == payload);
      console.log(indiviualPost);
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
  },
});

export const { getIndividualPost, clearIndividualPost } = postSlice.actions;

export default postSlice.reducer;
