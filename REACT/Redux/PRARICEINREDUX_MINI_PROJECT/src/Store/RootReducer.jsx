import { configureStore } from "@reduxjs/toolkit";
import Product_Reducer from "./Product_Reducer";
import { combineReducers } from "@reduxjs/toolkit";
import Wishlist_Reducer from "./Wishlist_reducer"
import CartReducer from "./CartReducer";

export const RootReducer = combineReducers({
  product: Product_Reducer,
  cart: CartReducer,
  wish: Wishlist_Reducer
});