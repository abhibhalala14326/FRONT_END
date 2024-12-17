import {
  CART_TO_WISHLIST,
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_TO_CART,
  REMOVE_TO_WISHLIST,
} from "./Cconsten";

export const Cart_reducer = (state = [] , action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_TO_CART: const removeTowislist = state.filter( (state) => state.id !== action.payload.id);
       console.log('remove data',removeTowislist);

       return [...removeTowislist]

     
    case EMPTY_CART:
      return state= [];  

    default:
      return state;
  }
};


export const cart_to_wishlist_reducer = (state = [] , action) => {
  switch (action.type) {
    case CART_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_TO_WISHLIST:
    const removeTowislist = state.filter( (state) => state.id !== action.payload.id);

    console.log('remove data',removeTowislist);

    return [...removeTowislist]

    default:
      return state;
  }
}