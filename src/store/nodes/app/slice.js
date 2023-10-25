import { createSlice } from '@reduxjs/toolkit';

import { initialAppState } from './constants';

export const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    setIsAuthenticated(state, { payload: { isAuthenticated } }) {
      state.isAuthenticated = isAuthenticated;
    },
  },
});

export const {
  reducer: appReducer,
  actions: { setIsAuthenticated },
} = appSlice;
