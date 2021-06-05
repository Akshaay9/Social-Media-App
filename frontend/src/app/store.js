import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import PostReducer from "../features/Posts/PostSlice";
import AuthReducer from "../features/Auth/AuthSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Posts: PostReducer,
    currentUser:AuthReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
