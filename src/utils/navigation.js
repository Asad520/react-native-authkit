import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 * Navigate to a screen if the navigationRef is ready
 * @param {String} name
 * @param {*} params
 */
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

/**
 * Navigate to a screen with retries in case the navigationRef is not ready
 * @param {String} name
 * @param {*} params
 * @param {Number} retries
 */
export function navigateWithRetry(name, params, retries = 3) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  } else {
    console.log('navigationRef is not ready');
    let tries = 1;
    const interval = setInterval(() => {
      if (navigationRef.isReady()) {
        clearInterval(interval);
        navigationRef.navigate(name, params);
      } else {
        tries++;
        if (tries > retries) {
          clearInterval(interval);
          console.log('navigationRef is not ready after 3 tries');
        }
      }
    }, 100);
  }
}
