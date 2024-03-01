import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

import { getUser } from "./operations";
import { UserStateType } from "./types";

const reducers = {
  updateUser: (state: UserStateType, action: PayloadAction<UserStateType>) => {
    return { ...state, ...action.payload };
  },
};

const extraReducers = (builder: ActionReducerMapBuilder<UserStateType>) => {
  builder.addCase(getUser.pending, (state) => {
    state.loading = true;
    state.error = false;
    state.errorMessage = "";
  });
  builder.addCase(getUser.rejected, (state) => {
    state.loading = false;
    state.error = true;
    state.errorMessage = "Failed to fetch user data";
  });
  builder.addCase(getUser.fulfilled, (state, action) => {
    state.user = action.payload;
    state.loading = false;
    state.error = false;
    state.errorMessage = "";
  });
};

export const userReducers = {
  reducers,
  extraReducers,
};
