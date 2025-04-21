/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { getAllCategories } from '../services/operations/categoriesApi';

const initialState = {
	loading: false,
	categories: [],
	category: null,
};

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setCategories: (state, action) => {
			state.categories = action.payload;
		},
		setCategory: (state, action) => {
			state.category = action.payload;
		},
	},
});

export function refreshCategories() {
	return async (dispatch) => {
		dispatch(setLoading(true));
		try {
			const response = await getAllCategories();
			console.log('refresh all categories response ---', response);
			if (response.status === 'success') {
				const array = Object.keys(response)
					.filter((key) => key !== 'status')
					.map((key) => response[key]);
				dispatch(setCategories(array));
			}
		} catch (error) {
			console.error('Error refreshing categories:', error);
		}
	};
}

export const { setLoading, setCategories, setCategory } = categorySlice.actions;
export default categorySlice.reducer;
