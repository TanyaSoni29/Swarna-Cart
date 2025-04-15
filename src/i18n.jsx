/** @format */

// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSon from '../src/style/i18n/en.json';
import frJSon from '../src/style/i18n/fr.json';
import esJSon from '../src/style/i18n/es.json';
import deJSon from '../src/style/i18n/de.json';

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enJSon,
		},
		fr: {
			translation: frJSon,
		},
		es: {
			// Corrected language code for Spanish
			translation: esJSon,
		},
		de: {
			translation: deJSon,
		},
	},
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
