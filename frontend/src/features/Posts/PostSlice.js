import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "pending",
  individualPost: [],
};

// get all posts
export const getAllPosts = createAsyncThunk("posts/all", async () => {
  const data = await axios.get(`http://localhost:5000/api/user/post`);
  return data.data;
});

// upload new post
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

// update existing pos
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
// like/unlike a post
export const likeUnlike = createAsyncThunk(
  "posts/likeUnlike",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        `http://localhost:5000/api/user/like/${dataToBeSent.id}`,
        null,
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
//add/update a post
export const addUpdateComment = createAsyncThunk(
  "posts/likeUnlike",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        dataToBeSent.URL,
        { comment: dataToBeSent.comment },
        config
      );
      console.log(data.data);
      return data.data;
    } catch (error) {
      console.log(error.response);
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
        ele._id === payload._id ? payload : ele
      );
    },
    [upDatePoast.rejected]: (state, { payload }) => {
      state.status = "success";
    },
    [likeUnlike.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.posts = state.posts.map((ele) =>
        ele._id === payload._id ? payload : ele
      );
    },
    [likeUnlike.rejected]: (state, { payload }) => {
      state.status = "success";
    },
    [addUpdateComment.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.posts = state.posts.map((ele) =>
        ele._id === payload._id ? payload : ele
      );
    },
    [addUpdateComment.rejected]: (state, { payload }) => {
      state.status = "success";
    },
  },
});

export const { getIndividualPost, clearIndividualPost } = postSlice.actions;

export default postSlice.reducer;
