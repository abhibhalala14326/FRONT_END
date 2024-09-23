import React from 'react'

const Reducer = (state,action) => {
  switch (action) {
    case "INCREMENTAGE":
      return {
        ...state,
        age: state.age + 1,
      };
    case "DECREMENTAGE":
      return {
        ...state,
        age: state.age - 1,
        
      };
    default:
  }
};

export default Reducer
