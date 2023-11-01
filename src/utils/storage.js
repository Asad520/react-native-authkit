import EncryptedStorage from 'react-native-encrypted-storage';

/**
 * @description
 * This is a service that handles the storage of the application.
 *
 * @example
 * import { storage } from 'src/utils/storage';
 * storage.setItem('key', 'value');
 * storage.getItem('key');
 * storage.removeItem('key');
 * storage.clear();
 */
export const Storage = {
  setItem: async (key, value) => {
    try {
      await EncryptedStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  },
  getItem: async (key) => {
    try {
      const value = await EncryptedStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.log(error);
    }
  },
  removeItem: async (key) => {
    try {
      await EncryptedStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  },
  removeAll: async () => {
    try {
      await EncryptedStorage.clear();
    } catch (error) {
      console.log(error);
    }
  },
};
