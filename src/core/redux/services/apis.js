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

export const categoriesEndpoints = {
	GET_CATEGORIES: `${BASE}/api/Categories`,
	CREATE_CATEGORIES: `${BASE}/api/Categories`,
	GET_CATEGORIES_BY_ID: (id) => `${BASE}/api/Categories/${id}`,
	UPDATE_CATEGORIES: (id) => `${BASE}/api/Categories/${id}`,
	DELETE_CATEGORIES: (id) => `${BASE}/api/Categories/${id}`,
};

export const couponsEndpoints = {
	GET_COUPONS: `${BASE}/api/Coupons`,
	CREATE_COUPONS: `${BASE}/api/Coupons`,
	GET_COUPONS_BY_ID: (id) => `${BASE}/api/Coupons/${id}`,
	UPDATE_COUPONS: (id) => `${BASE}/api/Coupons/${id}`,
	DELETE_COUPONS: (id) => `${BASE}/api/Coupons/${id}`,
};

export const adsEndpoints = {
	GET_ADS: `${BASE}/api/Ads`,
	CREATE_ADS: `${BASE}/api/Ads`,
	GET_ADS_BY_ID: (id) => `${BASE}/api/Ads/${id}`,
	UPDATE_ADS: (id) => `${BASE}/api/Ads/${id}`,
	DELETE_ADS: (id) => `${BASE}/api/Ads/${id}`,
};

export const designRequestsEndpoints = {
	GET_DESIGN_REQUESTS: `${BASE}/api/DesignRequests`,
	CREATE_DESIGN_REQUESTS: `${BASE}/api/DesignRequests`,
	GET_DESIGN_REQUESTS_BY_ID: (id) => `${BASE}/api/DesignRequests/${id}`,
	UPDATE_DESIGN_REQUESTS: (id) => `${BASE}/api/DesignRequests/${id}`,
	DELETE_DESIGN_REQUESTS: (id) => `${BASE}/api/DesignRequests/${id}`,
};

export const emailVerificationTokensEndpoints = {
	GET_EMAIL_VERIFICATION_TOKENS: `${BASE}/api/EmailVerificationTokens`,
	CREATE_EMAIL_VERIFICATION_TOKENS: `${BASE}/api/EmailVerificationTokens`,
	GET_EMAIL_VERIFICATION_TOKENS_BY_ID: (id) =>
		`${BASE}/api/EmailVerificationTokens/${id}`,
	UPDATE_EMAIL_VERIFICATION_TOKENS: (id) =>
		`${BASE}/api/EmailVerificationTokens/${id}`,
	DELETE_EMAIL_VERIFICATION_TOKENS: (id) =>
		`${BASE}/api/EmailVerificationTokens/${id}`,
};

export const enquiriesEndpoints = {
	GET_ENQUIRIES: `${BASE}/api/Enquiries`,
	CREATE_ENQUIRIES: `${BASE}/api/Enquiries`,
	GET_ENQUIRIES_BY_ID: (id) => `${BASE}/api/Enquiries/${id}`,
	UPDATE_ENQUIRIES: (id) => `${BASE}/api/Enquiries/${id}`,
	DELETE_ENQUIRIES: (id) => `${BASE}/api/Enquiries/${id}`,
};

export const giftCardsEndpoints = {
	GET_GIFT_CARDS: `${BASE}/api/GiftCards`,
	CREATE_GIFT_CARDS: `${BASE}/api/GiftCards`,
	GET_GIFT_CARDS_BY_ID: (id) => `${BASE}/api/GiftCards/${id}`,
	UPDATE_GIFT_CARDS: (id) => `${BASE}/api/GiftCards/${id}`,
	DELETE_GIFT_CARDS: (id) => `${BASE}/api/GiftCards/${id}`,
};

export const liveRatesEndpoints = {
	GET_LIVE_RATES: `${BASE}/api/LiveRates`,
	CREATE_LIVE_RATES: `${BASE}/api/LiveRates`,
	GET_LIVE_RATES_BY_ID: (id) => `${BASE}/api/LiveRates/${id}`,
	UPDATE_LIVE_RATES: (id) => `${BASE}/api/LiveRates/${id}`,
	DELETE_LIVE_RATES: (id) => `${BASE}/api/LiveRates/${id}`,
};

export const loginAttemptsEndpoints = {
	GET_LOGIN_ATTEMPTS: `${BASE}/api/LoginAttempts`,
	CREATE_LOGIN_ATTEMPTS: `${BASE}/api/LoginAttempts`,
	GET_LOGIN_ATTEMPTS_BY_ID: (id) => `${BASE}/api/LoginAttempts/${id}`,
	UPDATE_LOGIN_ATTEMPTS: (id) => `${BASE}/api/LoginAttempts/${id}`,
	DELETE_LOGIN_ATTEMPTS: (id) => `${BASE}/api/LoginAttempts/${id}`,
};

export const mortgagePaymentsEndpoints = {
	GET_MORTGAGE_PAYMENTS: `${BASE}/api/MortgagePayments`,
	CREATE_MORTGAGE_PAYMENTS: `${BASE}/api/MortgagePayments`,
	GET_MORTGAGE_PAYMENTS_BY_ID: (id) => `${BASE}/api/MortgagePayments/${id}`,
	UPDATE_MORTGAGE_PAYMENTS: (id) => `${BASE}/api/MortgagePayments/${id}`,
	DELETE_MORTGAGE_PAYMENTS: (id) => `${BASE}/api/MortgagePayments/${id}`,
};

export const mortgagesEndpoints = {
	GET_MORTGAGES: `${BASE}/api/Mortgages`,
	CREATE_MORTGAGES: `${BASE}/api/Mortgages`,
	GET_MORTGAGES_BY_ID: (id) => `${BASE}/api/Mortgages/${id}`,
	UPDATE_MORTGAGES: (id) => `${BASE}/api/Mortgages/${id}`,
	DELETE_MORTGAGES: (id) => `${BASE}/api/Mortgages/${id}`,
};

export const notificationsEndpoints = {
	GET_NOTIFICATIONS: `${BASE}/api/Notifications`,
	CREATE_NOTIFICATIONS: `${BASE}/api/Notifications`,
	GET_NOTIFICATIONS_BY_ID: (id) => `${BASE}/api/Notifications/${id}`,
	UPDATE_NOTIFICATIONS: (id) => `${BASE}/api/Notifications/${id}`,
	DELETE_NOTIFICATIONS: (id) => `${BASE}/api/Notifications/${id}`,
};

export const orderItemsEndpoints = {
	GET_ORDER_ITEMS: `${BASE}/api/OrderItems`,
	CREATE_ORDER_ITEMS: `${BASE}/api/OrderItems`,
	GET_ORDER_ITEMS_BY_ID: (id) => `${BASE}/api/OrderItems/${id}`,
	UPDATE_ORDER_ITEMS: (id) => `${BASE}/api/OrderItems/${id}`,
	DELETE_ORDER_ITEMS: (id) => `${BASE}/api/OrderItems/${id}`,
};

export const ordersEndpoints = {
	GET_ORDERS: `${BASE}/api/Orders`,
	CREATE_ORDERS: `${BASE}/api/Orders`,
	GET_ORDERS_BY_ID: (id) => `${BASE}/api/Orders/${id}`,
	UPDATE_ORDERS: (id) => `${BASE}/api/Orders/${id}`,
	DELETE_ORDERS: (id) => `${BASE}/api/Orders/${id}`,
};

export const passwordResetTokens = {
	GET_PASSWORD_RESET_TOKENS: `${BASE}/api/PasswordResetTokens`,
	CREATE_PASSWORD_RESET_TOKENS: `${BASE}/api/PasswordResetTokens`,
	GET_PASSWORD_RESET_TOKENS_BY_ID: (id) =>
		`${BASE}/api/PasswordResetTokens/${id}`,
	UPDATE_PASSWORD_RESET_TOKENS: (id) => `${BASE}/api/PasswordResetTokens/${id}`,
	DELETE_PASSWORD_RESET_TOKENS: (id) => `${BASE}/api/PasswordResetTokens/${id}`,
};

export const productImagesEndpoints = {
	GET_PRODUCT_IMAGES: `${BASE}/api/ProductImages`,
	CREATE_PRODUCT_IMAGES: `${BASE}/api/ProductImages`,
	GET_PRODUCT_IMAGES_BY_ID: (id) => `${BASE}/api/ProductImages/${id}`,
	UPDATE_PRODUCT_IMAGES: (id) => `${BASE}/api/ProductImages/${id}`,
	DELETE_PRODUCT_IMAGES: (id) => `${BASE}/api/ProductImages/${id}`,
};

export const productReviewsEndpoints = {
	GET_PRODUCT_REVIEWS: `${BASE}/api/ProductReviews`,
	CREATE_PRODUCT_REVIEWS: `${BASE}/api/ProductReviews`,
	GET_PRODUCT_REVIEWS_BY_ID: (id) => `${BASE}/api/ProductReviews/${id}`,
	UPDATE_PRODUCT_REVIEWS: (id) => `${BASE}/api/ProductReviews/${id}`,
	DELETE_PRODUCT_REVIEWS: (id) => `${BASE}/api/ProductReviews/${id}`,
};

export const productsEndpoints = {
	GET_PRODUCTS: `${BASE}/api/Products`,
	CREATE_PRODUCTS: `${BASE}/api/Products`,
	GET_PRODUCTS_BY_ID: (id) => `${BASE}/api/Products/${id}`,
	UPDATE_PRODUCTS: (id) => `${BASE}/api/Products/${id}`,
	DELETE_PRODUCTS: (id) => `${BASE}/api/Products/${id}`,
};

export const sellersEndpoints = {
	GET_SELLERS: `${BASE}/api/Sellers`,
	CREATE_SELLERS: `${BASE}/api/Sellers`,
	GET_SELLERS_BY_ID: (id) => `${BASE}/api/Sellers/${id}`,
	UPDATE_SELLERS: (id) => `${BASE}/api/Sellers/${id}`,
	DELETE_SELLERS: (id) => `${BASE}/api/Sellers/${id}`,
};

export const sessionsEndpoints = {
	GET_SESSIONS: `${BASE}/api/Sessions`,
	CREATE_SESSIONS: `${BASE}/api/Sessions`,
	GET_SESSIONS_BY_ID: (id) => `${BASE}/api/Sessions/${id}`,
	UPDATE_SESSIONS: (id) => `${BASE}/api/Sessions/${id}`,
	DELETE_SESSIONS: (id) => `${BASE}/api/Sessions/${id}`,
};

export const usersEndpoints = {
	GET_USERS: `${BASE}/api/Users`,
	CREATE_USERS: `${BASE}/api/Users`,
	GET_USERS_BY_ID: (id) => `${BASE}/api/Users/${id}`,
	UPDATE_USERS: (id) => `${BASE}/api/Users/${id}`,
	DELETE_USERS: (id) => `${BASE}/api/Users/${id}`,
};

export const userSubscriptionsEndpoints = {
	GET_USER_SUBSCRIPTIONS: `${BASE}/api/UserSubscriptions`,
	CREATE_USER_SUBSCRIPTIONS: `${BASE}/api/UserSubscriptions`,
	GET_USER_SUBSCRIPTIONS_BY_ID: (id) => `${BASE}/api/UserSubscriptions/${id}`,
	UPDATE_USER_SUBSCRIPTIONS: (id) => `${BASE}/api/UserSubscriptions/${id}`,
	DELETE_USER_SUBSCRIPTIONS: (id) => `${BASE}/api/UserSubscriptions/${id}`,
};


