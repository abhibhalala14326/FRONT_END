const redux = require('redux') 
const createStore = redux.createStore

const BUY_LEPTOP = 'BUY_LEPTOP'

const buy_laptop = () =>
{
    return{
        type: 'BUY_LEPTOP',
        info:'laptop'

    }

}

const initialState = {
    NUMOHLAPTOP : 1000
}

const reduxLaptop = (state = initialState , action) =>
{
    switch (action.type) {
        case BUY_LEPTOP:
            return {
                ...state,
                NUMOHLAPTOP:state.NUMOHLAPTOP - 1
            }
            
         
    
        default:
           return state
    }
}

const store = createStore(reduxLaptop)

console.log(store.getState());

const unsubcribe = store.subscribe(() =>
{
    console.log(store.getState());
    
})

store.dispatch(buy_laptop())
store.dispatch(buy_laptop())
store.dispatch(buy_laptop())

unsubcribe()
