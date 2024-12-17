// // const { createStore } = require("redux");

// // const BUY_TOYS = "BUY_TOYS";

// // const value = {
// //   NUMBEROFTOY: 20,
// // };

// // const buy_toys = () => {
// //   return {
// //     type: "BUY_TOYS",z

// //   };
// // };

// // const toybuy = (state = value, action) => {
// //   switch (action.type) {
// //     case BUY_TOYS:
// //       return {
// //         NUMBEROFTOY: state.NUMBEROFTOY - 1,
// //       };

// //     default:
// //       return state;
// //   }
// // };

// // const store = createStore(toybuy);
// // console.log(store.getState());

// // const unsubcribe = store.subscribe(() => {
// //   console.log(store.getState());
// // });

// // store.dispatch(buy_toys());
// // store.dispatch(buy_toys());
// // store.dispatch(buy_toys());
// // store.dispatch(buy_toys());
// // store.dispatch(buy_toys());
// // unsubcribe();

















const {createStore} = require('redux')

const  BUY_EMOJI = "BUY_EMOJI"

const value = {
    NUMBEROFEMOJI:400
}

const buy_emoji = ()=>
{
    return{
        type:'BUY_EMOJI'
    }
}

const reducer = (state = value , action) =>
{
    switch (action.type) {
        case BUY_EMOJI:
            return{
                NUMBEROFEMOJI : state.NUMBEROFEMOJI - 1
            }
            
            
    
        default:
           return state
    }
}

const store = createStore(reducer)

console.log(store.getState());
const unsubcribe = store.subscribe(() => console.log(store.getState())
)
store.dispatch(buy_emoji())
unsubcribe()
