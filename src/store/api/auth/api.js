import { rootApi } from '@src/store/root';
import { getBuilders } from '@src/store/utils';
import { authRoutes } from './routes';

export const authApi = rootApi.injectEndpoints({
  endpoints(builder) {
    const { mutation } = getBuilders(builder);
    return {
      signin: mutation(authRoutes.signin),
    };
  },
});

export const { useSigninMutation } = authApi;
