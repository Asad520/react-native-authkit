import { rootApi } from '@src/store/root';
import { getBuilders } from '@src/store/utils';
import { appRoutes } from './routes';

export const appApi = rootApi.injectEndpoints({
  endpoints(builder) {
    const { query } = getBuilders(builder);
    return {
      getCountries: query(appRoutes.countries),
    };
  },
});

export const { useGetCountriesQuery } = appApi;
