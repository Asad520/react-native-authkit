import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from '../nodes';
import { rootApi } from './api';

export const rootReducer = combineReducers({
  app: appReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});
