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
    builder.addCase(getUser.pending, (state) => {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
    });
    builder.addCase(getUser.rejected, (state) => {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: "Failed to fetch user data",
      };
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
        errorMessage: "",
      };
    });
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
