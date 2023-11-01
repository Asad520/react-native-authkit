import { createListenerMiddleware } from '@reduxjs/toolkit';
import { appListeners, authListeners } from '../nodes';

export const rootListener = createListenerMiddleware();

appListeners.forEach((listener) => {
  rootListener.startListening(listener);
});

authListeners.forEach((listener) => {
  rootListener.startListening(listener);
});
