const value = {
  NUMOFCOUNER: 0
}

export const mainFun = (state = value, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        NUMOFCOUNER: state.NUMOFCOUNER + 1
      }


    case 'DECREMENT':
      return {
        ...state,
        NUMOFCOUNER: state.NUMOFCOUNER > 0 ? state.NUMOFCOUNER - 1 : 0
      }

    case 'RESET':
      return {
        ...state,
        NUMOFCOUNER: 0
      }

    default:
      return state
  }
}