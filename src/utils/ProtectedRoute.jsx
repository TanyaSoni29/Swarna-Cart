/** @format */

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
	const { isAuth } = useSelector((state) => state.auth);

	if (!isAuth) {
		return (
			<Navigate
				to='/signin'
				replace
			/>
		); // Redirect to login if not authenticated
	}

	return element; // Render the protected component
};

export default ProtectedRoute;
