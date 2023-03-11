import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import US from './en.json';
import BR from './pt.json';
import {getLocales} from 'expo-localization';

const systemLang = getLocales()[0].languageCode;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: systemLang === 'pt' ? systemLang : 'en',
  resources: {
    pt: BR,
    en: US,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
