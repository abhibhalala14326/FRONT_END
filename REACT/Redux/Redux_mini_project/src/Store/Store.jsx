import { RootReducer } from "./RootReducer";
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({ reducer: RootReducer });
