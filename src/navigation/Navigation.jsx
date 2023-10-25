import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from '@src/store/nodes';
import { navigationRef } from '@src/utils';

import { UnauthenticatedStack, AuthenticatedStack } from './stacks';

export const Navigation = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <AuthenticatedStack /> : <UnauthenticatedStack />}
    </NavigationContainer>
  );
};
