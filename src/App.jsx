import { StatusBar } from 'react-native';
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './navigation';

export const App = () => (
  <SafeAreaProvider>
    <StatusBar barStyle="dark-content" />
    <Navigation />
  </SafeAreaProvider>
);
