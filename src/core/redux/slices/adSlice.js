/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { getAllAds } from '../services/operations/adsApi';

const initialState = {
	loading: false,
	ads: [],
	ad: null,
};

const adsSlice = createSlice({
	name: 'ads',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setAds: (state, action) => {
			state.ads = action.payload;
		},
		setAd: (state, action) => {
			state.ad = action.payload;
		},
	},
});

export function refreshAds() {
	return async (dispatch) => {
		dispatch(setLoading(true));
		try {
			const response = await getAllAds();
			console.log('refresh all ads response ---', response);
			if (response.status === 'success') {
				dispatch(setAds(response.data));
			}
		} catch (error) {
			console.error('Error refreshing ads:', error);
		}
	};
}

export const { setLoading, setAds, setAd } = adsSlice.actions;
export default adsSlice.reducer;
