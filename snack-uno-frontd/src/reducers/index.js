import { userConnect } from './userConnect.js';
import { userLogado } from './userLogado';

import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  clickState: userLogado,
  otherState: userConnect
});
