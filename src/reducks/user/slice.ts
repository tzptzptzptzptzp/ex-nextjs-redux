import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "./initializes";
import { UserStateType } from "./types";

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserStateType>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
