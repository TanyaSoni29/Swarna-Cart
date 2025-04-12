/** @format */

// import { sendLogs } from '../../utils/getLogs';
import toast from 'react-hot-toast';
import {
	handleDeleteReq,
	handleGetReq,
	handlePostReq,
	handlePutReq,
} from '../apiRequestHandler';
import { productsEndpoints } from '../apis';

const {
	GET_PRODUCTS,
	CREATE_PRODUCTS,
	GET_PRODUCTS_BY_ID,
	UPDATE_PRODUCTS,
	DELETE_PRODUCTS,
} = productsEndpoints;

export async function getAllProducts() {
	const response = await handleGetReq(GET_PRODUCTS);
	console.log('get all products response ---', response);

	if (response.status === 'success') {
		// sendLogs(
		// 	{
		// 		url: GET_LOCAL_POI2,
		// 		reqBody: searchTerm,
		// 		headers: setHeaders(),
		// 		response: response,
		// 	},
		// 	'info'
		// );
		return response;
	}
	return null;
}

export async function getProductsById(id) {
	const response = await handleGetReq(GET_PRODUCTS_BY_ID(id));
	console.log('get products by id response ---', response);

	if (response.status === 'success') {
		// sendLogs(
		// 	{
		// 		url: GET_LOCAL_POI2,
		// 		reqBody: searchTerm,
		// 		headers: setHeaders(),
		// 		response: response,
		// 	},
		// 	'info'
		// );
		return response;
	}
	return null;
}

export async function createProducts(data) {
	const response = await handlePostReq(CREATE_PRODUCTS, data);
	console.log('create products response ---', response);

	if (response.status === 'success') {
		// sendLogs(
		// 	{
		// 		url: CREATE_LOCAL_POI,
		// 		reqBody: data,
		// 		headers: setHeaders(),
		// 		response: response,
		// 	},
		// 	'info'
		// );
		toast.success('Product Created Successfully');
		return response;
	}
	return null;
}

export async function updateProducts(id, data) {
	const response = await handlePutReq(UPDATE_PRODUCTS(id), data);
	console.log('update products response ---', response);

	if (response.status === 'success') {
		// sendLogs(
		// 	{
		// 		url: UPDATE_LOCAL_POI,
		// 		reqBody: data,
		// 		headers: setHeaders(),
		// 		response: response,
		// 	},
		// 	'info'
		// );
		toast.success('Product Updated Successfully');
		return response;
	}
	return null;
}

export async function deleteProducts(id) {
	const response = await handleDeleteReq(DELETE_PRODUCTS(id));
	console.log('delete products response ---', response);
	if (response.status === 'success') {
		// sendLogs(
		// 	{
		// 		url: DELETE_LOCAL_POI,
		// 		reqBody: { id },
		// 		headers: setHeaders(),
		// 		response: response,
		// 	},
		// 	'info'
		// );
		toast.success('Product Deleted Successfully');
		return response;
	}
	return false;
}
