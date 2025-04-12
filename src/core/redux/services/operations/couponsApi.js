/** @format */

// import { sendLogs } from '../../utils/getLogs';
import toast from 'react-hot-toast';
import {
	handleDeleteReq,
	handleGetReq,
	handlePostReq,
	handlePutReq,
} from '../apiRequestHandler';
import { couponsEndpoints } from '../apis';

const {
	GET_COUPONS,
	CREATE_COUPONS,
	GET_COUPONS_BY_ID,
	UPDATE_COUPONS,
	DELETE_COUPONS,
} = couponsEndpoints;

export async function getAllCoupons() {
	const response = await handleGetReq(GET_COUPONS);
	console.log('get all coupons response ---', response);

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

export async function getCouponsById(id) {
	const response = await handleGetReq(GET_COUPONS_BY_ID(id));
	console.log('get coupons by id response ---', response);

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

export async function createCoupons(data) {
	const response = await handlePostReq(CREATE_COUPONS, data);
	console.log('create coupons response ---', response);

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
		toast.success('Coupon Created Successfully');
		return response;
	}
	return null;
}

export async function updateCoupons(id, data) {
	const response = await handlePutReq(UPDATE_COUPONS(id), data);
	console.log('update coupons response ---', response);

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
		toast.success('Coupon Updated Successfully');
		return response;
	}
	return null;
}

export async function deleteCoupons(id) {
	const response = await handleDeleteReq(DELETE_COUPONS(id));
	console.log('delete coupons response ---', response);
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
		toast.success('Coupon Deleted Successfully');
		return response;
	}
	return false;
}
