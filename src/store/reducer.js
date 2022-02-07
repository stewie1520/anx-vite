import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import layoutReducer, { name as layoutReducerName } from './slices/layoutSlice';

export const makeRootReducer = (history, asyncReducer = {}) => combineReducers({
  ...asyncReducer,
  router: connectRouter(history),
  [layoutReducerName]: layoutReducer,
});
