/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	token: localStorage?.getItem('authToken')
		? localStorage?.getItem('authToken')
		: null,
	isAuth: localStorage?.getItem('authToken') ? true : false,
	user: null,
	getUser: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setToken(state, action) {
			// console.log('setToken action:', action);
			state.token = action.payload;
		},
		setUser(state, action) {
			state.user = action.payload;
		},
		setGetUser(state, action) {
			state.getUser = action.payload;
		},
		setIsAuth(state, action) {
			state.isAuth = action.payload;
		},
	},
});

export const { setToken, setLoading, setUser, setGetUser, setIsAuth } =
	authSlice.actions;
export default authSlice.reducer;
