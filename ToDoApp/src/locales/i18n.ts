import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import US from './en-US.json';
import BR from './pt-BR.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'pt-BR',
  resources: {
    'pt-BR': BR,
    'en-US': US,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
