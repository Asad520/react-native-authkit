import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { Login } from '@screens/auth';

export const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Login />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
