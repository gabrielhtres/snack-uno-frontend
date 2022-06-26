import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes.js';
const initialState = {
  userConnect: true
};
export const userConnect = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        userConnect: action.userConnect
      };
    default:
      return state;
  }
};