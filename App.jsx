/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import { Select } from './src/components';

const App = () => (
  <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
    <StatusBar barStyle="light-content" />
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ flex: 1 }}>
      <Select />
    </ScrollView>
  </SafeAreaView>
);

export default App;
