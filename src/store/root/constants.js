import { initialAppState } from '../nodes';
import { rootApi } from './api';

export const initialRootState = {
  app: initialAppState,
  [rootApi.reducerPath]: {},
};
