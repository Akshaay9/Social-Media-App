import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  User: {
    _id: "60b476056926ec2b00f3abf1",
    name: "kai",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Kai_at_a_Launching_Press_Conference_on_October_2%2C_2019_3.jpg",
    backgroundImage: "https://wallpapercave.com/wp/wp3056207.png",
  },
  status: "idle",
};

export const loginSignup = createAsyncThunk("user/getUSer", async () => {});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer