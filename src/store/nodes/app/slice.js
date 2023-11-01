import { createSlice } from '@reduxjs/toolkit';

import { initialAppState } from './constants';

export const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    setCountries(state, { payload: { countries } }) {
      state.countries = countries;
    },
  },
});

export const {
  reducer: appReducer,
  actions: { setCountries },
} = appSlice;
