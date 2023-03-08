import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '~/screens/Login';

export const AuthRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
