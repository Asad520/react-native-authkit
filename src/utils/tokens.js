import Config from 'react-native-config';
import { JWT_KEY, REFRESH_JWT_KEY } from './constants';
import { Storage } from './storage';

export const tokenExpireEvent = () => {
  Storage.removeItem(JWT_KEY);
  Storage.removeItem(REFRESH_JWT_KEY);
  // Logout user
};

export const refreshToken = async () => {
  try {
    const jwt = await Storage.getItem(REFRESH_JWT_KEY);
    const { JWT_COOKIE_EXPIRES } = Config;
    if (!jwt) {
      return false;
    }

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt.value}`,
        'Content-Type': 'application/json',
      },
    };

    const { API_URL } = Config;
    const url = `${API_URL}/users/jwt/refresh`;
    const res = await fetch(url, options);
    const json = await res.json();
    await Storage.removeItem(JWT_KEY);

    const jwtExpiry = new Date();
    jwtExpiry.setTime(
      jwtExpiry.getTime() + parseInt(JWT_COOKIE_EXPIRES, 10) * 1000,
    );

    await Storage.setItem(JWT_KEY, {
      value: json.access_token,
      expires: jwtExpiry.toUTCString(),
    });
    return true;
  } catch (error) {
    console.log('Error refreshing token', error);
    // tokenExpireEvent();
    return false;
  }
};
