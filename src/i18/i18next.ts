import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import kzTranslation from './locale/kz.json';
import ruTranslation from './locale/ru.json';
import enTranslation from './locale/en.json';


const resources = {
    ru: {
        translation: ruTranslation,
    },
    en: {
        translation: enTranslation,
    },
    kz: {
        translation: kzTranslation,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru', // Если ключ перевода не найден на текущем языке, используйте русский язык по умолчанию.
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;