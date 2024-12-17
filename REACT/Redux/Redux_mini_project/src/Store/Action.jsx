import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  EMPTY_CART,
  CART_TO_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_TO_WISHLIST,
  EMPTY_WISHLIST,
  WISHLIST_TO_CART,
} from "./Cconsten";

export const add_to_cart = (cart) => {
  return {
    type: ADD_TO_CART,
    payload:cart
  };
};

export const remove_to_cart = (id) => {
  return {
    type: REMOVE_TO_CART,
    info: "remove_to_cart action called",
    payload:id
  };
};

export const empty_cart = () => {
  return {
    type: EMPTY_CART,
    info: "empty_cart action called",
  };
};

export const cart_to_wishlist = (wishlist) => {
  return {
    type: CART_TO_WISHLIST,
    payload:wishlist
  };
};

export const wishlist_to_cart = () => {
  return {
    type: WISHLIST_TO_CART,
    info: "wishlist_to_cart action called",
  };
};

export const add_to_wishlist = (wish) => {
  return {
    type: ADD_TO_WISHLIST,
    info: "add_to_wishlist action called",
    payload:wish
  };
};

export const remove_to_wishlist = (id) => {
  return {
    type: REMOVE_TO_WISHLIST,
    payload:id
  };
};

export const empty_wishlist = () => {
  return {
    type: EMPTY_WISHLIST,
    info: "empty_wishlist action called",
  };
};
