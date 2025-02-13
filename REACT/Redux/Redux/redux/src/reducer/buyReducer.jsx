

const initialState = 20;


export const BuyReducer = (state = initialState , action)=>
{
    switch (action.type) {
      case BUY:  return state + 1

      default:
       return state
    }
}