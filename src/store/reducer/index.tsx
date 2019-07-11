import { combineReducers } from "redux";
import counterReducer1 from "./counterReducer1";

const reducers = {
  counterReducer1
};

export type RootState = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
};

export default combineReducers(reducers);
