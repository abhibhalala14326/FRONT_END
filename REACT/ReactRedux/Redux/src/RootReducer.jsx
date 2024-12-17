import { reducertoy } from "./Reducer";
import { combineReducers } from "redux";

export const RootReducer = combineReducers({
  toys: reducertoy
});
