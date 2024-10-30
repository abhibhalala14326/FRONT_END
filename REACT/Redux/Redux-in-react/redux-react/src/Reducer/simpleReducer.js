
const value = {
  COUNTERNUMOF: 0
}

const upnumber = (state = value, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        COUNTERNUMOF: state.COUNTERNUMOF + 1
      }
    case 'DECREMENT':

      return {
        ...state,
        COUNTERNUMOF: state.COUNTERNUMOF > 0 ? state.COUNTERNUMOF - 1 : 0
      }
    case 'RESET':
      return {
        ...state,
        COUNTERNUMOF: state.COUNTERNUMOF = 0
      }

    default: return state
  }
}


export default upnumber;