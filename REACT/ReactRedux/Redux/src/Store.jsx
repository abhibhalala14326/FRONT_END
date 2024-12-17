import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./RootReducer";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
  reducer: RootReducer,
  middleware: (get) => get().concat(logger),
});
