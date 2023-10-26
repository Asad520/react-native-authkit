import { createSlice } from '@reduxjs/toolkit';

import { initialAppState } from './constants';

export const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    setIsAuthenticated(state, { payload: { isAuthenticated } }) {
      state.isAuthenticated = isAuthenticated;
    },
    setCountries(state, { payload: { countries } }) {
      state.countries = countries;
    },
  },
});

export const {
  reducer: appReducer,
  actions: { setIsAuthenticated, setCountries },
} = appSlice;
