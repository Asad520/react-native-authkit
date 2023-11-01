import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { setIsAuthenticated, getIsAuthenticated } from '@src/store/nodes';
import { navigationRef, refreshToken } from '@src/utils';

import { UnauthenticatedStack, AuthenticatedStack } from './stacks';

export const Navigation = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);

  const [isRefreshingToken, setIsRefreshingToken] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const res = await refreshToken();
      if (res) {
        dispatch(setIsAuthenticated({ isAuthenticated: true }));
      }
      setIsRefreshingToken(false);
    };
    checkToken();
  }, []);

  if (isRefreshingToken) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#c8382e" />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <AuthenticatedStack /> : <UnauthenticatedStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
