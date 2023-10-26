/*
 * The following file serves the purpose of providing a clean slate
 * to listen for certain query dispatches.
 */

import { appApi } from '@src/store/api';
import { setCountries } from './slice';

const {
  endpoints: { getCountries },
} = appApi;

const appGetCountriesListener = {
  matcher: getCountries.matchFulfilled,
  effect({ payload }, { dispatch }) {
    dispatch(setCountries({ countries: payload }));
  },
};

export const appListeners = [appGetCountriesListener];
