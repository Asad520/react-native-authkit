import { configureStore } from '@reduxjs/toolkit';

import { rootApi } from './api';
import { initialRootState } from './constants';
import { rootListener } from './listeners';
import { rootReducer } from './reducer';

const middlewares = [];

const isDevelopment = process.env.NODE_ENV === 'development';

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(rootListener.middleware)
      .concat(rootApi.middleware)
      .concat(middlewares),
  devTools: isDevelopment,
  preloadedState: initialRootState,
});
