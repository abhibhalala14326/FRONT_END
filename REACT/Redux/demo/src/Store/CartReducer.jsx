import { ADD_TO_CART ,CART_TO_WISHLIST ,EMTY_CART ,REMOVE_TO_CART } from "./Constarn";


const CartReducer = (state  = [] , action) => {
 switch (action.type) {
   case ADD_TO_CART:
     return [...state, action.payload];

   case CART_TO_WISHLIST:;

   case EMTY_CART: ;

   case REMOVE_TO_CART:;

   default: return state
 }
}

export default CartReducer
