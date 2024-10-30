import { createStore } from "redux";
import { rootReduser } from "./Reducer";

export const store = createStore(rootReduser)