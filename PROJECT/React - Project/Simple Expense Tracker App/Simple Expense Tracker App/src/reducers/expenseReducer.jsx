export const appRducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];
    case "ADD_EXPENSE":
      return [...state, action.payload];
    // case "EDIT_EXPENSE":

    case "DELETE_EXPENSE":
      return state.filter(
        (item) => item.description !== action.payload
      );

    default:
      break;
  }
};

export const summaryReducer = (state, action) => {
  switch (action.type) {
    case "SET_SUMMARY":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
