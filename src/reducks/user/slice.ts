import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "./initializes";
import { UserStateType } from "./types";
import { getUser } from "./operations";

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserStateType>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {});
    builder.addCase(getUser.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
    builder.addCase(getUser.rejected, (state) => {});
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
