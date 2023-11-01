import { initialAppState, initialAuthState } from '../nodes';
import { rootApi } from './api';

export const initialRootState = {
  app: initialAppState,
  auth: initialAuthState,
  [rootApi.reducerPath]: {},
};
