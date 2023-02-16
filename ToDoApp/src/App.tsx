import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from '~/routes/routes.stack';

import {useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import theme from './config/theme';
import {Loader} from './components/Exemplos/LoaderExemplo';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={theme.colors.gray_700}
        />
        {fontsLoaded ? <AppRoutes /> : <Loader />}
      </NavigationContainer>
    </ThemeProvider>
  );
}
