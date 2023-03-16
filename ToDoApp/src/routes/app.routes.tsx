import React from 'react';
import {Home} from '~/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const AppRoutes = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
