import {
  ADD_TO_WISHLIST,
  EMPTY_WISHLIST,
  WISHLIST_TO_CART,
  REMOVE_TO_WISHLIST,
} from "./Cconsten";

export const wishlist_reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state , action.payload]
    case WISHLIST_TO_CART:
      return;

    case EMPTY_WISHLIST:
      return;

    case REMOVE_TO_WISHLIST:
      // const removeTowislist = state.filter( (state) => state.id !== action.payload.id);

      // console.log('remove data',removeTowislist);

      // return [...removeTowislist]

      const remove_data = state.slice(1);

      console.log("remove data", remove_data);

      return [...remove_data];

    default:
      return state;
  }
};
