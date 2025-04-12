/** @format */

// import { sendLogs } from '../../utils/getLogs';
import toast from 'react-hot-toast';
import {
	handleDeleteReq,
	handleGetReq,
	handlePostReq,
	handlePutReq,
} from '../apiRequestHandler';
import { adsEndpoints } from '../apis';

const { GET_ADS, CREATE_ADS, GET_ADS_BY_ID, UPDATE_ADS, DELETE_ADS } =
	adsEndpoints;

export async function getAllAds() {
	const response = await handleGetReq(GET_ADS);
	console.log('get all ads response ---', response);

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

export async function getAdsById(id) {
	const response = await handleGetReq(GET_ADS_BY_ID(id));
	console.log('get ads by id response ---', response);

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

export async function createAds(data) {
	const response = await handlePostReq(CREATE_ADS, data);
	console.log('create ads response ---', response);

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
		toast.success('Ad Created Successfully');
		return response;
	}
	return null;
}

export async function updateAds(id, data) {
	const response = await handlePutReq(UPDATE_ADS(id), data);
	console.log('update ads response ---', response);

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
		toast.success('Ad Updated Successfully');
		return response;
	}
	return null;
}

export async function deleteAds(id) {
	const response = await handleDeleteReq(DELETE_ADS(id));
	console.log('delete ads response ---', response);
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
		toast.success('Ad Deleted Successfully');
		return response;
	}
	return false;
}
