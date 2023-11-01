import { combineReducers } from '@reduxjs/toolkit';
import { appReducer, authReducer } from '../nodes';
import { rootApi } from './api';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});
