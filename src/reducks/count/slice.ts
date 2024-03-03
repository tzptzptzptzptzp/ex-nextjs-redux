import { createSlice } from "@reduxjs/toolkit";
import { initialCountState } from "./initializes";
import { countReducers } from "./reducers";

const countSlice = createSlice({
  name: "count",
  initialState: initialCountState,
  reducers: countReducers.reducers,
});

export default countSlice;
