/*
 * The following file serves the purpose of providing a clean slate
 * to listen for certain query dispatches.
 */

import Config from 'react-native-config';
import { authApi } from '@src/store/api';
import { actions } from '@src/store/nodes/auth';
import { Storage, JWT_KEY, REFRESH_JWT_KEY } from '@src/utils';

const {
  endpoints: { signin },
} = authApi;

const authSigninListener = {
  matcher: signin.matchFulfilled,
  async effect({ payload }, { dispatch }) {
    console.log('payload', payload);
    const { JWT_COOKIE_EXPIRES, REFRESH_JWT_COOKIE_EXPIRES } = Config;

    const jwtExpiry = new Date();
    jwtExpiry.setTime(
      jwtExpiry.getTime() + parseInt(JWT_COOKIE_EXPIRES, 10) * 1000,
    );
    const refreshTokenExpiry = new Date();
    refreshTokenExpiry.setTime(
      refreshTokenExpiry.getTime() +
        parseInt(REFRESH_JWT_COOKIE_EXPIRES, 10) * 1000,
    );

    await Promise.all([
      Storage.setItem(JWT_KEY, {
        value: payload.access_token,
        expires: jwtExpiry.toUTCString(),
      }),
      Storage.setItem(REFRESH_JWT_KEY, {
        value: payload.refresh_token,
        expires: refreshTokenExpiry.toUTCString(),
      }),
    ]);

    dispatch(actions.signin({ ...payload }));
  },
};

export const authListeners = [authSigninListener];
