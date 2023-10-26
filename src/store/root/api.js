import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: Config.AUTH_SERVER_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
