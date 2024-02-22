import { createSlice } from "@reduxjs/toolkit";
import { initialCountState } from "./initializes";

const countSlice = createSlice({
  name: "count",
  initialState: initialCountState,
  reducers: {},
});

export default countSlice.reducer;
