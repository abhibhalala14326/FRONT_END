const { createStore } = require("redux");

const redux = createStore

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
            NUMOFIPHONE : state.NUMOFIPHONE - 1
         }
    
        default:
           return state
    }
}

