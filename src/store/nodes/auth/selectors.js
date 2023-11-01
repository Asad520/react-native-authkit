export const getIsAuthenticated = (state) => state.auth.isAuthenticated;

export const getLoggedInUser = (state) => state.auth.user;

export const getBlockedUsers = (state) => state.auth.blockedUsers;

export const getMutedUsers = (state) => state.auth.mutedUsers;
