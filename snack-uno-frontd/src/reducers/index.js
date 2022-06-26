import { userConnect } from './userConnect.js';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  clickState: userConnect
});