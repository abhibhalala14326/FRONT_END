import { WHITE_COLOR, BLACK_COLOR } from "../consonant/themsConsonat";

const initialstate = {
  bColore: "black",
  wColore: "white",
};

export const ThemsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BLACK_COLOR:
      return { ...state, bColore: state.bColore };
    case WHITE_COLOR:
      return { ...state, wColore: state.wColore };

    default:
      return state
  }
};
