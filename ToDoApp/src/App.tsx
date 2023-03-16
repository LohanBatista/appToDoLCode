import React from 'react';
import i18n from '~/locales/i18n';
import theme from '~/config/theme';
import * as ExpoFont from 'expo-font';

import {Routes} from './routes';
import {AppProvider} from './hooks/provider';
import {I18nextProvider} from 'react-i18next';
import {ThemeProvider} from 'styled-components/native';
import {StatusBar, View as AppContainer, ViewProps} from 'react-native';
import {useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});
  const [appIsReady, setAppIsReady] = React.useState(false);

  const prepare = async () => {
    try {
      await ExpoFont.loadAsync({Inter_400Regular, Inter_700Bold});
      await new Promise((resolve) => setTimeout(resolve, 5000));
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  };

  const AppInit = () => {
    const containerProps: ViewProps = {
      style: {flex: 1, backgroundColor: theme.colors.gray_700},
    };

    return (
      <AppContainer {...containerProps}>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={theme.colors.gray_700}
        />
        <Routes />
      </AppContainer>
    );
  };

  React.useEffect(() => {
    prepare();
  }, []);

  if (!appIsReady || !fontsLoaded) return null;

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <AppInit />
        </AppProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
