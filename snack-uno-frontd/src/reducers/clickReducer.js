import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes.js';
const initialState = {
  newValue: 'Atualizado via Redux!'
};

export const clickReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
}