import { createStore  } from "redux";
import { ThemsReducer } from "../reducer/ThemsReducer";

export const ThemsStore = createStore(ThemsReducer)

