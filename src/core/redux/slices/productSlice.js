/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../services/operations/productApi';

const initialState = {
	loading: false,
	products: [],
	product: null,
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		setProduct: (state, action) => {
			state.product = action.payload;
		},
	},
});

export function refreshProducts() {
	return async (dispatch) => {
		dispatch(setLoading(true));
		try {
			const response = await getAllProducts();
			console.log('refresh all products response ---', response);
			if (response.status === 'success') {
				dispatch(setProducts(response.data));
			}
		} catch (error) {
			console.error('Error refreshing products:', error);
		}
	};
}

export const { setLoading, setProducts, setProduct } = productSlice.actions;
export default productSlice.reducer;
