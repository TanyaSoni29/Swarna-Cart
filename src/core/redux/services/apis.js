/** @format */

const BASE = process.env.REACT_APP_BASE_URL;

export const authEndpoints = {
	LOGIN: `${BASE}/api/Authenticate/login`,
	REGISTER: `${BASE}/api/Authenticate/register`,
	CONFIRM_EMAIL: (token, email) =>
		`${BASE}/api/Authenticate/confirmemail?token=${token}&email=${email}`,
	CHANGE_PASSWORD: `${BASE}/api/Authenticate/changepassword`,
	REGISTER_BY_PHONE: `${BASE}/api/Authenticate/registerbyphone`,
	VERIFY_PHONE: `${BASE}/api/Authenticate/verifyphone`,
	RESEND_OTP: `${BASE}/api/Authenticate/resendotp`,
	EXTERNAL_LOGIN: `${BASE}/api/Authenticate/externallogin`,
};
