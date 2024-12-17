import { combineReducers } from "redux";
import { Cart_reducer, cart_to_wishlist_reducer   } from "./CartReducer";
import { wishlist_reducer } from "./Wishlist_reducer";
import { producr_reducer } from "./Product_Reducer";


export const RootReducer = combineReducers({
    cart:Cart_reducer,
    wishlist:wishlist_reducer,
    product:producr_reducer,
    carttowishlist:cart_to_wishlist_reducer

})