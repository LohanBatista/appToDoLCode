import React from 'react';
import {Login} from '~/screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const AuthRoutes = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
