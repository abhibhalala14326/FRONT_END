import { PRODUCT_SET } from "./Cconsten";



export const product_set = (product) => {
  return {
    type: PRODUCT_SET,
    payload: product,
  };
};
