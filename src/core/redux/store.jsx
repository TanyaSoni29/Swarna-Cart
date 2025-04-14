/** @format */

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import themeSettingSlice from './themeSettingSlice';
import authReducer from './slices/authSlice';
import adsReducer from './slices/adSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		ads: adsReducer,
		rootReducer: rootReducer,
		themeSetting: themeSettingSlice,
	},
});

export default store;
