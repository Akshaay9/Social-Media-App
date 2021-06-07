import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Allusers: [],
  status: "pending",
};

export const getAllUsers = createAsyncThunk("users/all", async () => {
    const data = await axios.get(`http://localhost:5000/api/user`);
    // console.log(data);
    return data.data;
  });

// user slice

export const userSlice = createSlice({
  name: "allusers",
  initialState,
  reducers: {
    get: (state, { payload }) => {
      console.log("hey");
    },
  },
  extraReducers: {
    [getAllUsers.pending]: (state, action) => {
      state.status = "pending";
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.Allusers = payload;
    },
  },
});



export default userSlice.reducer;
