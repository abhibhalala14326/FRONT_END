import { WISHLIST_TO_CART ,EMTY_WISHLIST , REMOVE_TO_WISHLIST  , ADD_TO_WISHLIST } from "./Constarn";



const Wishlist_Reducer = (state = [] , action ) => {

    switch (action.type) {
      case WISHLIST_TO_CART:;

      case ADD_TO_WISHLIST:
        return [...state , action.payload]

      case REMOVE_TO_WISHLIST:;

      case EMTY_WISHLIST:;

      default: return state;
    }
  
}

export default Wishlist_Reducer;

