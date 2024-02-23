import { createSlice } from "@reduxjs/toolkit";
import { initialCountState } from "./initializes";

const countSlice = createSlice({
  name: "count",
  initialState: initialCountState,
  reducers: {
    incrementCount: (state) => {
      if (state.count < 10) {
        state.count += 1;
      }
    },
    decrementCount: (state) => {
      if (state.count > 1) {
        state.count -= 1;
      }
    },
  },
});

export default countSlice;
