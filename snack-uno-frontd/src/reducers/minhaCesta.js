import { MINHA_CESTA_VALUE } from '../actions/actionsTypes.js';
const initialState = {
  newValue: []
};

export const minhaCesta = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case MINHA_CESTA_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};