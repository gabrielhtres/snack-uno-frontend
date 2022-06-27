import { CLICK_UPDATE_STATUS_USER } from '../actions/actionsTypes.js';
const initialState = {
  newValue: ''
};

export const userLogado = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case CLICK_UPDATE_STATUS_USER:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
}