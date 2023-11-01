import { createSlice } from '@reduxjs/toolkit';

import { initialAuthState } from './constants';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setIsAuthenticated(state, { payload: { isAuthenticated } }) {
      state.isAuthenticated = isAuthenticated;
    },
    signin(state, { payload: { user, blocked_users, muted_users } }) {
      state.user = user;
      state.blockedUsers = blocked_users;
      state.mutedUsers = muted_users;
      state.isAuthenticated = true;
    },
    signout(state) {
      state.user = null;
      state.blockedUsers = [];
      state.mutedUsers = [];
      state.isAuthenticated = false;
    },
  },
});

export const {
  reducer: authReducer,
  actions,
  actions: { setIsAuthenticated, signin, signout },
} = authSlice;
