import { userConnect } from './userConnect.js';
import { clickReducer } from './clickReducer';

import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  clickState: clickReducer,
  otherState: userConnect
});
