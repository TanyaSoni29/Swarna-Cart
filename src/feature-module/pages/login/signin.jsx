/** @format */

import React, { useEffect, useState } from 'react';
import ImageWithBasePath from '../../../core/img/imagewithbasebath';
import { Link, useNavigate } from 'react-router-dom';
import { all_routes } from '../../../Router/all_routes';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import {
	externalLogin,
	login,
} from '../../../core/redux/services/operations/authApi';
import { useForm } from 'react-hook-form';

const Signin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm();
	const [isPasswordVisible, setPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordVisible((prevState) => !prevState);
	};
	const route = all_routes;

	const handleSubmitForm = async (data) => {
		try {
			const newData = {
				username: data.username,
				password: data.password,
			};
			dispatch(login(newData, navigate));
		} catch (error) {
			console.error(error);
		} finally {
			reset();
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				username: '',
				password: '',
			});
		}
	}, [reset, isSubmitSuccessful]);

	return (
		<>
			{/* Main Wrapper */}
			<div className='main-wrapper'>
				<div className='account-content'>
					<div className='login-wrapper bg-img'>
						<div className='login-content authent-content'>
							<form onSubmit={handleSubmit(handleSubmitForm)}>
								<div className='login-userset'>
									<div className='login-logo logo-normal'>
										<ImageWithBasePath
											src='assets/img/logo.png'
											alt='img'
										/>
									</div>
									<Link
										to={route.dashboard}
										className='login-logo logo-white'
									>
										<ImageWithBasePath
											src='assets/img/logo-white.png'
											alt='Img'
										/>
									</Link>
									<div className='login-userheading'>
										<h3>Sign In</h3>
										<h4 className='fs-16'>
											Access the Swarna panel using your email and passcode.
										</h4>
									</div>

									<div className='mb-3'>
										<label className='form-label'>
											Username <span className='text-danger'> *</span>
										</label>
										<div className='input-group'>
											<input
												type='text'
												defaultValue=''
												className='form-control border-end-0'
												{...register('username', {
													required: 'User name is required',
												})}
											/>
											{errors.username && (
												<span className='text-danger'>
													{errors.username.message}
												</span>
											)}
											<span className='input-group-text border-start-0'>
												<i className='ti ti-user' />
											</span>
										</div>
									</div>
									<div className='mb-3'>
										<label className='form-label'>
											Password <span className='text-danger'> *</span>
										</label>
										<div className='pass-group'>
											<input
												type={isPasswordVisible ? 'text' : 'password'}
												className='pass-input form-control'
												{...register('password', {
													required: 'Password is required',
												})}
											/>
											{errors.password && (
												<span className='text-danger'>
													{errors.password.message}
												</span>
											)}
											<span
												className={`ti toggle-password ${
													isPasswordVisible ? 'ti-eye' : 'ti-eye-off'
												}`}
												onClick={togglePasswordVisibility}
											></span>
										</div>
									</div>
									<div className='form-login authentication-check'>
										<div className='row'>
											<div className='col-12 d-flex align-items-center justify-content-between'>
												<div className='custom-control custom-checkbox'>
													<label className='checkboxs ps-4 mb-0 pb-0 line-height-1 fs-16 text-gray-6'>
														<input
															type='checkbox'
															className='form-control'
														/>
														<span className='checkmarks' />
														Remember me
													</label>
												</div>
												<div className='text-end'>
													<Link
														className='text-orange fs-16 fw-medium'
														to={route.forgotPassword}
													>
														Forgot Password?
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className='form-login'>
										<button
											type='submit'
											className='btn btn-primary w-100'
										>
											Sign In
										</button>
									</div>

									<div className='signinform'>
										<h4>
											New on our platform?
											<Link
												to={route.register}
												className='hover-a'
											>
												{' '}
												Create an account
											</Link>
										</h4>
									</div>
									<div className='form-setlogin or-text'>
										<h4>OR</h4>
									</div>
									<div className='mt-2'>
										<div className='d-flex align-items-center justify-content-center flex-wrap'>
											{/* <div className='text-center me-2 flex-fill'>
												<Link
													to='#'
													className='br-10 p-2 btn btn-info d-flex align-items-center justify-content-center'
												>
													<ImageWithBasePath
														className='img-fluid m-1'
														src='assets/img/icons/facebook-logo.svg'
														alt='Facebook'
													/>
												</Link>
											</div> */}
											<div className='text-center rounded-md flex-fill'>
												<GoogleLogin
													onSuccess={async (credentialResponse) => {
														try {
															console.log('Google Token:', credentialResponse);
															const reqData = {
																provider: 'Google',
																idToken: credentialResponse.credential,
															};
															dispatch(externalLogin(reqData, navigate));
														} catch (err) {
															console.error(err);
														}
													}}
													onError={() => {
														console.log('Login Failed');
													}}
													width='100%'
												/>
												{/* <Link
													to='#'
													onClick={() => login()}
													className='btn btn-white br-10 p-2  border d-flex align-items-center justify-content-center'
												>
													<ImageWithBasePath
														className='img-fluid m-1'
														src='assets/img/icons/google-logo.svg'
														alt='Facebook'
													/>
												</Link> */}
											</div>
											{/* <div className='text-center flex-fill'>
												<Link
													to='#'
													className='bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center'
												>
													<ImageWithBasePath
														className='img-fluid m-1'
														src='assets/img/icons/apple-logo.svg'
														alt='Apple'
													/>
												</Link>
											</div> */}
										</div>
									</div>
									<div className='my-4 d-flex justify-content-center align-items-center copyright-text'>
										<p>Copyright © 2025 Swarna Cart</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* /Main Wrapper */}
		</>
	);
};

export default Signin;
