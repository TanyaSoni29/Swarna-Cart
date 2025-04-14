/** @format */

import axios from 'axios';
// import { sendLogs } from '../utils/getLogs';

export function setHeaders() {
	const accessToken = localStorage.getItem('token');
	if (!accessToken) return {};
	return {
		'accept': '*/*',
		'Authorization': `Bearer ${accessToken}`,
		'Content-Type': 'application/json',
	};
}

export async function handleGetReq(URL) {
	try {
		// console.log(URL);
		const response = await axios.get(URL, { headers: setHeaders() });
		if (response?.status >= 200 && response?.status < 300) {
			return { ...response.data, status: 'success' };
		} else {
			console.log('Unexpected response status:', response);
			return null;
		}
	} catch (err) {
		// sendLogs({ url: URL, error: err.response }, 'error');
		console.error('Error in GET request:', err);
		return {
			...err.response,
			status: err.response?.status > 499 ? 'error' : 'fail',
			message: `${
				err.response?.status > 499 ? 'server error' : 'Failed'
			} while fetching the data`,
		};
	}
}

export async function handlePostReq(URL, data) {
	try {
		const response = await axios.post(URL, data, {
			headers: setHeaders(),
		});

		if (response?.status >= 200 && response?.status < 300) {
			return { ...response.data, status: 'success' };
		} else {
			console.log('Unexpected response status:', response);
			return null;
		}
	} catch (err) {
		// sendLogs({ url: URL, error: err.response }, 'error');
		return {
			...err.response,
			status: err.response?.status > 499 ? 'error' : 'fail',
			message: `${
				err.response?.status > 499 ? 'server error' : 'Failed'
			} while fetching the data`,
		};
	}
}

export async function handlePutReq(URL, data) {
	try {
		const response = await axios.put(URL, data, {
			headers: setHeaders(),
		});

		if (response?.status >= 200 && response?.status < 300) {
			return { ...response.data, status: 'success' };
		} else {
			console.log('Unexpected response status:', response);
			return null;
		}
	} catch (err) {
		// sendLogs({ url: URL, error: err.response }, 'error');
		return {
			...err.response,
			status: err.response?.status > 499 ? 'error' : 'fail',
			message: `${
				err.response?.status > 499 ? 'server error' : 'Failed'
			} while fetching the data`,
		};
	}
}

export async function handleDeleteReq(URL) {
	try {
		// console.log(URL);
		const response = await axios.delete(URL, { headers: setHeaders() });
		if (response?.status >= 200 && response?.status < 300) {
			return { ...response.data, status: 'success' };
		} else {
			console.log('Unexpected response status:', response);
			return null;
		}
	} catch (err) {
		// sendLogs({ url: URL, error: err.response }, 'error');
		console.error('Error in GET request:', err);
		return {
			...err.response,
			status: err.response?.status > 499 ? 'error' : 'fail',
			message: `${
				err.response?.status > 499 ? 'server error' : 'Failed'
			} while fetching the data`,
		};
	}
}
