import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '~/screens/Home';

export const AppRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
