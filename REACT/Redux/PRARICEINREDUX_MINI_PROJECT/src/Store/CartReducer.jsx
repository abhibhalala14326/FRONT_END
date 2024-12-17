import { ADD_TO_CART ,CART_TO_WISHLIST ,EMTY_CART ,REMOVE_TO_CART, WISHLIST_TO_CART } from "./Constarn";


const CartReducer = (state  = [] , action) => {
 switch (action.type) {
   case ADD_TO_CART:
     return [...state, action.payload];

   
   case WISHLIST_TO_CART:
     return [...state, action.payload];


   case EMTY_CART:
     return (state = []);

   case REMOVE_TO_CART:
     return state.filter((state) => state.id !== action.payload.id);

   default:
     return state;
 }
}

export default CartReducer
