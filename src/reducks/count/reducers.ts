import { CountStateType } from "./types";

const reducers = {
  incrementCount: (state: CountStateType) => {
    if (state.count < 10) {
      state.count += 1;
    }
  },
  decrementCount: (state: CountStateType) => {
    if (state.count > 1) {
      state.count -= 1;
    }
  },
};

export const countReducers = {
  reducers,
};
