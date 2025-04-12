/** @format */

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import themeSettingSlice from './themeSettingSlice';
import authReducer from './slices/authSlice';
const store = configureStore({
	reducer: {
		auth: authReducer,
		rootReducer: rootReducer,
		themeSetting: themeSettingSlice,
	},
});

export default store;
