/** @format */

import { toast } from 'react-hot-toast';
import { authEndpoints } from '../apis';
import {
	setIsAuth,
	setLoading,
	setToken,
	setUser,
} from '../../slices/authSlice';
import { handleGetReq, handlePostReq } from '../apiRequestHandler';
// import { sendLogs } from '../../utils/getLogs';

const {
	LOGIN,
	REGISTER,
	CONFIRM_EMAIL,
	CHANGE_PASSWORD,
	REGISTER_BY_PHONE,
	VERIFY_PHONE,
	RESEND_OTP,
	EXTERNAL_LOGIN,
} = authEndpoints;

export function registerUser(data, navigate) {
	return async (dispatch) => {
		dispatch(setLoading(true));
		const response = await handlePostReq(REGISTER, data);
		console.log('SIGNUP API RESPONSE.........', response);

		if (response.status === 'success') {
			toast.success('User Register Successfully');
			navigate('/signin');
			// sendLogs(
			// 	{
			// 		url: REGISTER,
			// 		reqBody: data,
			// 		headers: setHeaders(),
			// 		response: response,
			// 	},
			// 	'info'
			// );
		} else {
			toast.error('Failed to Register New User');
			navigate('/register');
		}

		dispatch(setLoading(false));
	};
}

export function registerByPhone(data, navigate) {
	return async (dispatch) => {
		dispatch(setLoading(true));
		const response = await handlePostReq(REGISTER_BY_PHONE, data);
		console.log('REGISTER_BY_PHONE API RESPONSE.........', response);

		if (response.status === 'success') {
			toast.success('User Register Successfully');
			navigate('/signin');
			// sendLogs(
			// 	{
			// 		url: REGISTER,
			// 		reqBody: data,
			// 		headers: setHeaders(),
			// 		response: response,
			// 	},
			// 	'info'
			// );
		} else {
			toast.error('Failed to Register New User');
			navigate('/register');
		}

		dispatch(setLoading(false));
	};
}

export function login(data, navigate) {
	return async (dispatch) => {
		dispatch(setLoading(true));

		const response = await handlePostReq(LOGIN, data);

		console.log('LOGIN API RESPONSE.........', response);
		if (response.status === 'success') {
			toast.success('Login Successfully');
			const user = {
				token: response?.token || null,
				expiration: response?.expiration || '',
				userid: response?.userid || null,
				fullname: response?.fullname || '',
				username: data?.username || '',
				role: response?.role || '',
				email: response?.email || '',
				emailConfirmed: response?.emailConfirmed || false,
				phone: response?.phone || '',
				phoneConfirmed: response?.phoneConfirmed || false,
				twoFactorEnabled: response?.twoFactorEnabled || false,
			};

			dispatch(setToken(response.token));
			dispatch(setUser(user));
			dispatch(setIsAuth(true));
			localStorage.setItem('token', response.token);
			localStorage.setItem('user', JSON.stringify(user));
			navigate('/index');

			// sendLogs(
			// 	{
			// 		url: LOGIN,
			// 		reqBody: data,
			// 		headers: setHeaders(),
			// 		response: response,
			// 	},
			// 	'info'
			// );
		} else {
			toast.error('Failed to Login User');
			navigate('/signin');
		}

		dispatch(setLoading(false));
	};
}

export function externalLogin(data, navigate) {
	return async (dispatch) => {
		dispatch(setLoading(true));

		const response = await handlePostReq(EXTERNAL_LOGIN, data);

		console.log('LOGIN API RESPONSE.........', response);
		if (response.status === 'success') {
			toast.success('Login Successfully');
			const user = {
				token: response?.token || null,
				expiration: response?.expiration || '',
				userid: response?.userid || null,
				fullname: response?.fullname || '',
				username: data?.username || '',
				role: response?.role || '',
				email: response?.email || '',
				emailConfirmed: response?.emailConfirmed || false,
				phone: response?.phone || '',
				phoneConfirmed: response?.phoneConfirmed || false,
				twoFactorEnabled: response?.twoFactorEnabled || false,
			};

			dispatch(setToken(response.token));
			dispatch(setUser(user));
			dispatch(setIsAuth(true));
			localStorage.setItem('token', response.token);
			localStorage.setItem('user', JSON.stringify(user));
			navigate('/index');

			// sendLogs(
			// 	{
			// 		url: LOGIN,
			// 		reqBody: data,
			// 		headers: setHeaders(),
			// 		response: response,
			// 	},
			// 	'info'
			// );
		} else {
			toast.error('Failed to Login User');
			navigate('/signin');
		}

		dispatch(setLoading(false));
	};
}

// export function getUser(navigate) {
// 	return async (dispatch, getState) => {
// 		// Check for token in Redux state or localStorage
// 		const storedToken = getState().auth.token || localStorage.getItem('token');

// 		const username = getState().auth.user.username;

// 		if (!storedToken) {
// 			console.log('No token provided, redirecting to sign-in.');
// 			toast.error('No token found. Please log in.');
// 			dispatch(setToken(null));
// 			dispatch(setIsAuth(false));
// 			dispatch(setUser(null));
// 			navigate('/signin'); // Redirect to login again
// 			return;
// 		}
// 		dispatch(setLoading(true));

// 		// Fetch current user details using token
// 		const response = await handleGetReq(GET_USER(username));

// 		console.log('GET ME API RESPONSE.........', response);

// 		if (response.status === 'success') {
// 			dispatch(setGetUser(response.data));
// 			dispatch(setIsAuth(true));
// 			// sendLogs(
// 			// 	{
// 			// 		url: LOGIN,
// 			// 		reqBody: username,
// 			// 		headers: setHeaders(),
// 			// 		response: response,
// 			// 	},
// 			// 	'info'
// 			// );
// 		} else {
// 			dispatch(setToken(null));
// 			dispatch(setIsAuth(false));
// 			localStorage.removeItem('authToken');
// 			localStorage.removeItem('username');
// 			localStorage.removeItem('userData');

// 			// Redirect to login page
// 			navigate('/auth/login');
// 		}

// 		navigate('/');

// 		dispatch(setLoading(false));
// 	};
// }

export async function confirmUserEmail(token, email) {
	// Fetch reset password link using the user ID
	const response = await handleGetReq(CONFIRM_EMAIL(token, email));

	console.log('CONFIRM_EMAIL API RESPONSE.........', response);

	if (response.status === 'success') {
		toast.success('Email Confirmed Successfully');
		// sendLogs(
		// 	{
		// 		url: RESET_PASSWORD(userId),
		// 		reqBody: userId,
		// 		headers: setHeaders(),
		// 		response: response,
		// 	},
		// 	'info'
		// );
		const mergedString = Object.keys(response)
			.filter((key) => !isNaN(key)) // Keep only numeric keys
			.sort((a, b) => a - b) // Sort keys in order
			.map((key) => response[key]) // Extract values
			.join('');
		return {
			...response,
			password: mergedString,
		};
	} else {
		toast.error('Failed to send confirm email request');
	}
}

export async function changeUserPassword(userId) {
	// Fetch reset password link using the user ID
	const response = await handleGetReq(CHANGE_PASSWORD(userId));

	console.log('RESET PASSWORD API RESPONSE.........', response);

	if (response.status === 'success') {
		toast.success('Reset password request sent successfully');
		// sendLogs(
		// 	{
		// 		url: RESET_PASSWORD(userId),
		// 		reqBody: userId,
		// 		headers: setHeaders(),
		// 		response: response,
		// 	},
		// 	'info'
		// );
		const mergedString = Object.keys(response)
			.filter((key) => !isNaN(key)) // Keep only numeric keys
			.sort((a, b) => a - b) // Sort keys in order
			.map((key) => response[key]) // Extract values
			.join('');
		return {
			...response,
			password: mergedString,
		};
	} else {
		toast.error('Failed to send reset password request');
	}
}

export async function verifyPhone(data) {
	// Fetch reset password link using the user ID
	const response = await handlePostReq(VERIFY_PHONE, data);

	console.log('VERIFY_PHONE API RESPONSE.........', response);

	if (response.status === 'success') {
		toast.success('Phone Verified Successfully');
		// sendLogs(
		// 	{
		// 		url: RESET_PASSWORD(userId),
		// 		reqBody: userId,
		// 		headers: setHeaders(),
		// 		response: response,
		// 	},
		// 	'info'
		// );
		const mergedString = Object.keys(response)
			.filter((key) => !isNaN(key)) // Keep only numeric keys
			.sort((a, b) => a - b) // Sort keys in order
			.map((key) => response[key]) // Extract values
			.join('');
		return {
			...response,
			password: mergedString,
		};
	} else {
		toast.error('Failed to send confirm email request');
	}
}

export async function resendOtp(data) {
	// Fetch reset password link using the user ID
	const response = await handlePostReq(RESEND_OTP, data);

	console.log('RESEND_OTP API RESPONSE.........', response);

	if (response.status === 'success') {
		toast.success('OTP Resend Successfully');
		// sendLogs(
		// 	{
		// 		url: RESET_PASSWORD(userId),
		// 		reqBody: userId,
		// 		headers: setHeaders(),
		// 		response: response,
		// 	},
		// 	'info'
		// );
		const mergedString = Object.keys(response)
			.filter((key) => !isNaN(key)) // Keep only numeric keys
			.sort((a, b) => a - b) // Sort keys in order
			.map((key) => response[key]) // Extract values
			.join('');
		return {
			...response,
			password: mergedString,
		};
	} else {
		toast.error('Failed to send otp request');
	}
}

export function logout(navigate) {
	return (dispatch) => {
		dispatch(setToken(null));
		dispatch(setUser(null));
		// dispatch(setGetUser(null));
		dispatch(setIsAuth(false));
		localStorage.removeItem('token');
		// localStorage.removeItem('username');
		localStorage.removeItem('user');

		toast.success('Logged Out');
		navigate('/signin');
	};
}
