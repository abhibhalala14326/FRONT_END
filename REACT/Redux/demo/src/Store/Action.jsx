import {
  CART_TO_WISHLIST,
  ADD_TO_CART,
  EMTY_WISHLIST,
  EMTY_CART,
  REMOVE_TO_CART,
  PRODUCT_SET,
  ADD_TO_WISHLIST,
  REMOVE_TO_WISHLIST,
  WISHLIST_TO_CART,
} from "./Constarn";

export const cart_to_wishlist = () => {
  return {
    type: CART_TO_WISHLIST,
  };
};

export const add_to_cart = (add) => {
  return {
    type: ADD_TO_CART,
    payload: add 
  };
};

export const remove_to_cart = () => {
  return {
    type: REMOVE_TO_CART,
  };
};

export const emty_cart = () => {
  return {
    type: EMTY_CART,
  };
};

// ? wishlist

export const add_to_wishlist = (wishlistData) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: wishlistData
  };
};

export const wishlit_to_cart = (wishcartData) => {
  return {
    type: WISHLIST_TO_CART,
    payload:wishcartData
  };
};

export const remove_to_wishlist = () => {
  return {
    type: REMOVE_TO_WISHLIST,
  };
};

export const emty_wishlist = () => {
  return {
    type: EMTY_WISHLIST,
  };
};

// ? product

export const product_set = (pd) => {
  return {
    type: PRODUCT_SET,
    payload: pd,
  };
};
