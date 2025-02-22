import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { BE_URL } from "../../const";

const initialState = {
  posts: [],
  status: "pending",
  individualPost: [],
};

// get all posts
export const getAllPosts = createAsyncThunk("posts/all", async () => {
  const data = await axios.get(`${BE_URL}/api/user/post`);

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
    toast.info("uploading new poast !");
    try {
      const data = await axios.post(
        `${BE_URL}/api/user/post`,
        dataToBeSent?.data || {},
        config
      );
      toast.success("new poast added !", {});
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
    toast.info("updating  poast !");
    try {
      const data = await axios.post(
        `${BE_URL}/api/user/post/${dataToBeSent.id}`,
        dataToBeSent?.data || {},
        config
      );
      toast.success("poast has been updated !", {});
      return data.data;
    } catch (error) {
      console.log(error);
      console.log(error?.response);
      return rejectWithValue(error.response.data);
    }
  }
);

// delete a post
export const deletePost = createAsyncThunk(
  "posts/delete",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };

    try {
      const data = await axios.delete(
        `${BE_URL}/api/user/post/${dataToBeSent.id}`,
        config
      );
      // toast.error("poast has been deleted !", {});
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
        `${BE_URL}/api/user/like/${dataToBeSent.id}`,
        {},
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

//add/update a comment
export const addUpdateComment = createAsyncThunk(
  "posts/comment",
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

// delete a comment
export const deleteComment = createAsyncThunk(
  "comment/delete",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };

    try {
      const data = await axios.delete(
        `${BE_URL}/api/user/comment/${dataToBeSent.PostID}/${dataToBeSent.commentID}`,
        config
      );
      toast.error("comment has been deleted !", {});
      // return data.data;
    } catch (error) {
      console.log(error);
      console.log(error?.response);
      return rejectWithValue(error.response.data);
    }
  }
);

// post slice
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
    likeUnlikePost: (state, { payload }) => {
      state.posts = state.posts.map((ele) =>
        ele._id == payload.postID
          ? {
              ...ele,
              likes: ele.likes.some((like) => like.likeID._id == payload.userID)
                ? ele.likes.filter((like) => like.likeID._id !== payload.userID)
                : [...ele.likes, { likeID: { _id: payload.userID } }],
            }
          : ele
      );
    },
    addNewComment: (state, { payload }) => {
      state.posts = state.posts.map((ele) =>
        ele._id == payload.postID
          ? {
              ...ele,
              comments: [
                {
                  commentID: {
                    _id: uuidv4(),
                    comment: payload.comment,
                  },
                  user: payload.user,
                },
                ...ele.comments,
              ],
            }
          : ele
      );
    },
    updateComments: (state, { payload }) => {
      state.posts = state.posts.map((ele) =>
        ele._id == payload.postID
          ? {
              ...ele,
              comments: ele.comments.map((cmt) =>
                cmt.commentID._id === payload.commentID
                  ? {
                      ...cmt,
                      commentID: {
                        ...cmt.commentID,
                        comment: payload.comment,
                      },
                    }
                  : cmt
              ),
            }
          : ele
      );
    },

    deleteCommentlocally: (state, { payload }) => {
      state.posts = state.posts.map((ele) =>
        ele._id == payload.postID
          ? {
              ...ele,
              comments: ele.comments.filter(
                (ele) => ele.commentID._id !== payload.commentID
              ),
            }
          : ele
      );
    },
    deletePostlocally: (state, { payload }) => {
      state.posts = state.posts.filter((ele) => ele._id !== payload);
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
    [deletePost.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.posts = state.posts.filter((ele) => ele._id !== payload);
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.status = "success";
    },
    [likeUnlike.fulfilled]: (state, { payload }) => {
      state.status = "success";
      // state.posts = state.posts.map((ele) =>
      //   ele._id === payload._id ? payload : ele
      // );
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
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.status = "success";
      // state.posts = state.posts.map((ele) =>
      //   ele._id === payload._id ? payload : ele
      // );
    },
    [deleteComment.rejected]: (state, { payload }) => {
      state.status = "success";
    },
  },
});

export const {
  getIndividualPost,
  clearIndividualPost,
  likeUnlikePost,
  addNewComment,
  updateComments,
  deletePostlocally,
  deleteCommentlocally,
} = postSlice.actions;

export default postSlice.reducer;
