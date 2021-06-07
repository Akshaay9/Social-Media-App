import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import PostReducer from "../features/Posts/PostSlice";
import AuthReducer from "../features/Auth/AuthSlice.js";
import UserReducer from "../features/Users/UserSlice.js"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Posts: PostReducer,
    currentUser: AuthReducer,
    Users:UserReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
