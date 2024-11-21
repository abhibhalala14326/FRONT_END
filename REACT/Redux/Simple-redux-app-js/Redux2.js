const { createStore } = require("redux");



const BUY_IPHONE = 'BUY_IPHONE'

const value = {
    NUMOFIPHONE : 400
}

const buy_iphone = () =>
{
    return {
        type:'BUY_IPHONE'
    }
}

const reduxIpohne = (state = value , action) =>
{
    switch (action.type) {
        case BUY_IPHONE:
         return {
            ...state,
            NUMOFIPHONE : state.NUMOFIPHONE - 1
         }
    
        default:
           return state
    }
}
const store = createStore(reduxIpohne)

console.log(store.getState());

const unsubcribe = store.subscribe(()=>
{
    console.log(store.getState());
    
})

store.dispatch(buy_iphone())
unsubcribe()
