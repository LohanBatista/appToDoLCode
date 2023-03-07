import React from 'react';
import {Home} from '~/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '~/screens/Login';
import {NavigationContainer} from '@react-navigation/native';

export const AppRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
