import { createSlice } from "@reduxjs/toolkit";

//initial state for user
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
