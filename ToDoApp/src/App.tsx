import React from 'react';
import {StatusBar} from 'react-native';
import {useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';

import {I18nextProvider} from 'react-i18next';
import {ThemeProvider} from 'styled-components/native';
import {AppProvider} from './hooks/provider';
import theme from '~/config/theme';
import i18n from '~/locales/i18n';
import {PageViewComponent as Loader} from './components/PageView';
import {Routes} from './routes';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});

  const App = () => {
    if (!fontsLoaded) return <Loader isLoading children={null} />;
    else return <Routes />;
  };
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <App />
        </AppProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
