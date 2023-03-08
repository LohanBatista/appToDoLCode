import React from 'react';
import {Home} from '~/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const AppRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
