import { StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { Navigation } from './navigation';
import { store } from './store';

export const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </SafeAreaProvider>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
