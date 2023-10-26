import { createListenerMiddleware } from '@reduxjs/toolkit';
import { appListeners } from '../nodes';

export const rootListener = createListenerMiddleware();

appListeners.forEach((listener) => {
  rootListener.startListening(listener);
});
