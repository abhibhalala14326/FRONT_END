import { WISHLIST_TO_CART ,EMTY_WISHLIST , REMOVE_TO_WISHLIST  , ADD_TO_WISHLIST, CART_TO_WISHLIST } from "./Constarn";



const Wishlist_Reducer = (state = [] , action ) => {

    switch (action.type) {
      case CART_TO_WISHLIST:
        console.log('dodododo');
        
     return [...state, action.payload];


      case ADD_TO_WISHLIST:
        return [...state, action.payload];

      case REMOVE_TO_WISHLIST:
        return state.filter((state) => state.id !== action.payload.id);

      case EMTY_WISHLIST:
        return (state = []);

      default:
        return state;
    }
  
}

export default Wishlist_Reducer;

