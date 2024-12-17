import { PRODUCT_SET } from "./Cconsten";

export const producr_reducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_SET:
      return [...state, action.payload];

    default:
      return state;
  }
};
