import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@src/utils';
import { UnauthenticatedStack, AuthenticatedStack } from './stacks';

export const Navigation = () => {
  const isAuthenticated = false;
  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <AuthenticatedStack /> : <UnauthenticatedStack />}
    </NavigationContainer>
  );
};
