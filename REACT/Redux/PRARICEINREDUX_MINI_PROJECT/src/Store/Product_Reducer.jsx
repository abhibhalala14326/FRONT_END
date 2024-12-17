import { PRODUCT_SET } from './Constarn';

const Product_Reducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_SET: return [...state, action.payload];
    
    default: return state;
  }
}

export default Product_Reducer
