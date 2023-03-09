import React from 'react';
import i18n from '~/locales/i18n';
import theme from '~/config/theme';
import * as ExpoFont from 'expo-font';
import * as ExpoSplashScreen from 'expo-splash-screen';

import {Routes} from './routes';
import {AppProvider} from './hooks/provider';
import {I18nextProvider} from 'react-i18next';
import {ThemeProvider} from 'styled-components/native';
import {View as AppContainer, ViewProps} from 'react-native';
import {useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';

ExpoSplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});

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

  const onLayoutRootView = async () => {
    if (appIsReady) await ExpoSplashScreen.hideAsync();
  };

  const AppInit = () => {
    const containerProps: ViewProps = {
      onLayout: onLayoutRootView,
      style: {flex: 1, backgroundColor: theme.colors.gray_700},
    };

    return (
      <AppContainer {...containerProps}>
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
