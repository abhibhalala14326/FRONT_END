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

export const cart_to_wishlist = (CTW) => {
  return {
    type: CART_TO_WISHLIST,
    payload:CTW
  };
};

export const add_to_cart = (add) => {
  return {
    type: ADD_TO_CART,
    payload: add 
  };
};

export const remove_to_cart = (id) => {
  return {
    type: REMOVE_TO_CART,
    payload:id
  };
};

export const emty_cart = () => {
  return {
    type: EMTY_CART,
  };
};

// ? wishlist

export const add_to_wishlist = (add_wishlist) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: add_wishlist,
  };
};

export const wishlit_to_cart = (wtc) => {
  return {
    type: WISHLIST_TO_CART,
    payload:wtc
  };
};

export const remove_to_wishlist = (id) => {
  return {
    type: REMOVE_TO_WISHLIST,
    payload:id
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
