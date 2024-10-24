const redux = require('redux')
const createStore = redux.createStore;

//? constant   

const BUY_CHOCOLAET = 'BUY_CHOCOLAET'
const BUY_CAKE = 'BUY_CAKE'
const BUY_PANTONE = 'BUY_PANTONE'

// ! redux action  

const buy_chocoleat = () => {
    return {
        type: BUY_CHOCOLAET,
        info: 'first redux action'
    }
}

const buy_cake = () => {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}


const buy_pantone = () => {
    return {
        type: BUY_PANTONE,
        info: 'first redux action'
    }
}


//? initialState for redux 

const initialState = {
    NUMOFCHOCOLETE: 20,
    NUMOFCAKE: 60,
    NUMOFPANTONE: 40
}


const ChocoReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CHOCOLAET:
            return {
                ...state,
                NUMOFCHOCOLETE: state.NUMOFCHOCOLETE - 1
            }
        case BUY_CAKE:
            return {
                ...state,

                NUMOFCAKE: state.NUMOFCAKE - 1
            }

        case BUY_PANTONE:
            return {
                ...state,

                NUMOFPANTONE: state.NUMOFPANTONE - 1
            }


        default: return state

    }
}


const store = createStore(ChocoReducer)

console.log(store.getState());

const unsubcribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(buy_cake())
store.dispatch(buy_chocoleat())
store.dispatch(buy_cake())
store.dispatch(buy_chocoleat())
store.dispatch(buy_cake())
store.dispatch(buy_pantone())
store.dispatch(buy_cake())

unsubcribe()
