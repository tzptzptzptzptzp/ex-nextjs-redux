import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: rootReducer,
});
