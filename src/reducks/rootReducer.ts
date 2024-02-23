import { combineReducers } from "redux";
import countSlice from "./count/slice";
import userReducer from "./user/slice";

const rootReducer = combineReducers({
  count: countSlice.reducer,
  user: userReducer,
});

export default rootReducer;
