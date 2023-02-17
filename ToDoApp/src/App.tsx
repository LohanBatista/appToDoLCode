import React from 'react';
import {StatusBar} from 'react-native';
import {useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';

import {I18nextProvider} from 'react-i18next';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';

import theme from '~/config/theme';
import i18n from '~/locales/i18n';
import {AppRoutes} from '~/routes/routes.stack';

import {Loader} from '~/components/Exemplos/LoaderExemplo';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});

  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  );
}
