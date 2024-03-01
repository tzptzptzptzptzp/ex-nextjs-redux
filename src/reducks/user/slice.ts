import { createSlice } from "@reduxjs/toolkit";

import { initialUserState } from "./initializes";
import { userReducers } from "./reducers";

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: userReducers.reducers,
  extraReducers: userReducers.extraReducers,
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
