import React from 'react';
import {AppRoutes} from './app.routes';
import {AuthRoutes} from './auth.routes';
import {useAuth} from '~/hooks/useAuth';
import {NavigationContainer} from '@react-navigation/native';

export const Routes = () => {
  const {user} = useAuth();
  return (
    <NavigationContainer>
      {user === null ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};
