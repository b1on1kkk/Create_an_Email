import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
  friends: { name: string; surname: string; img: string; email: string }[];
}

const initialState: InitialState = {
  friends: []
};

export const getFriends = createAsyncThunk(
  "getFriendsData/getFriends",
  async () => {
    const res = await axios.get("http://localhost:2005/friends");

    return res;
  }
);

const getFriendsData = createSlice({
  name: "getFriendsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFriends.fulfilled, (state, action) => {
      state.friends = action.payload.data;
    });
  }
});

export default getFriendsData;
