import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from '~/routes/routes.stack';

import {useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import theme from './config/theme';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
