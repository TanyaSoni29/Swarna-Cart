/** @format */

// import { sendLogs } from '../../utils/getLogs';
import toast from 'react-hot-toast';
import {
	handleDeleteReq,
	handleGetReq,
	handlePostReq,
	handlePutReq,
} from '../apiRequestHandler';
import { designRequestsEndpoints } from '../apis';

const {
	GET_DESIGN_REQUESTS,
	GET_DESIGN_REQUESTS_BY_ID,
	CREATE_DESIGN_REQUESTS,
	UPDATE_DESIGN_REQUESTS,
	DELETE_DESIGN_REQUESTS,
} = designRequestsEndpoints;

export async function getAllDesignRequests() {
	const response = await handleGetReq(GET_DESIGN_REQUESTS);
	console.log('get all design requests response ---', response);

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

export async function getDesignRequestsById(id) {
	const response = await handleGetReq(GET_DESIGN_REQUESTS_BY_ID(id));
	console.log('get design requests by id response ---', response);

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

export async function createDesignRequests(data) {
	const response = await handlePostReq(CREATE_DESIGN_REQUESTS, data);
	console.log('create design requests response ---', response);

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
		toast.success('Design Request Created Successfully');
		return response;
	}
	return null;
}

export async function updateDesignRequests(id, data) {
	const response = await handlePutReq(UPDATE_DESIGN_REQUESTS(id), data);
	console.log('update design requests response ---', response);

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
		toast.success('Design Request Updated Successfully');
		return response;
	}
	return null;
}

export async function deleteDesignRequests(id) {
	const response = await handleDeleteReq(DELETE_DESIGN_REQUESTS(id));
	console.log('delete design requests response ---', response);
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
		toast.success('Design Request Deleted Successfully');
		return response;
	}
	return false;
}
