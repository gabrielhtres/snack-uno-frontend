import { minhaCesta } from './minhaCesta.js';
import { userLogado } from './userLogado';

import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  clickState: userLogado,
  minhaCestState: minhaCesta
});
