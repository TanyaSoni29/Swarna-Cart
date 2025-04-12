/** @format */

// import { sendLogs } from '../../utils/getLogs';
import toast from 'react-hot-toast';
import {
	handleDeleteReq,
	handleGetReq,
	handlePostReq,
	handlePutReq,
} from '../apiRequestHandler';
import { categoriesEndpoints } from '../apis';

const {
	GET_CATEGORIES,
	CREATE_CATEGORIES,
	GET_CATEGORIES_BY_ID,
	UPDATE_CATEGORIES,
	DELETE_CATEGORIES,
} = categoriesEndpoints;

export async function getAllcategories() {
	const response = await handleGetReq(GET_CATEGORIES);
	console.log('get all categories response ---', response);

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

export async function getCategoriesById(id) {
	const response = await handleGetReq(GET_CATEGORIES_BY_ID(id));
	console.log('get categories by id response ---', response);

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

export async function createCategories(data) {
	const response = await handlePostReq(CREATE_CATEGORIES, data);
	console.log('create categories response ---', response);

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
		toast.success('Category Created Successfully');
		return response;
	}
	return null;
}

export async function updatePoi(id, data) {
	const response = await handlePutReq(UPDATE_CATEGORIES(id), data);
	console.log('update categories response ---', response);

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
		toast.success('Category Updated Successfully');
		return response;
	}
	return null;
}

export async function deletePoi(id) {
	const response = await handleDeleteReq(DELETE_CATEGORIES(id));
	console.log('delete category response ---', response);
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
		toast.success('Category Deleted Successfully');
		return response;
	}
	return false;
}
