/** @format */

import React, { useEffect, useState } from 'react';
import ImageWithBasePath from '../../../core/img/imagewithbasebath';
import { Link, useNavigate } from 'react-router-dom';
import { all_routes } from '../../../Router/all_routes';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import {
	externalLogin,
	registerUser,
} from '../../../core/redux/services/operations/authApi';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import toast from 'react-hot-toast';

const Register = () => {
	const status = [
		{ value: 0, label: 'Choose' },
		{ value: 1, label: 'Admin' },
		{ value: 2, label: 'User' },
		{ value: 3, label: 'Dealer' },
	];
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		getValues,
		trigger,
		formState: { errors, isSubmitSuccessful },
	} = useForm();
	const [passwordVisibility, setPasswordVisibility] = useState({
		password: false,
		confirmPassword: false,
	});

	const togglePasswordVisibility = (field) => {
		setPasswordVisibility((prevState) => ({
			...prevState,
			[field]: !prevState[field],
		}));
	};

	const route = all_routes;

	const handleSubmitForm = async (data) => {
		if (data.password !== data.confirmPassword) {
			toast.error('Password and Confirm Password do not match');
			return;
		}
		console.log('Form Data:', data);
		try {
			const newData = {
				username: data.username,
				password: data.password,
				email: data.email,
				userRole: getValues('userRole').value,
			};
			dispatch(registerUser(newData, navigate));
		} catch (error) {
			console.error(error);
		} finally {
			reset();
		}
	};
	useEffect(() => {
		register('userRole', {
			required: 'User Role is required',
		});
	}, [register]);

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				username: '',
				password: '',
				confirmPassword: '',
				email: '',
			});
		}
	}, [reset, isSubmitSuccessful]);
	return (
		<>
			{/* Main Wrapper */}
			<div className='main-wrapper'>
				<div className='account-content'>
					<div className='login-wrapper register-wrap bg-img'>
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
										<h3>Register</h3>
										<h4>Create New Swarna Account</h4>
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
											Email <span className='text-danger'> *</span>
										</label>
										<div className='input-group'>
											<input
												type='text'
												defaultValue=''
												className='form-control border-end-0'
												{...register('email', {
													required: 'Email is required',
												})}
											/>
											{errors.email && (
												<span className='text-danger'>
													{errors.email.message}
												</span>
											)}
											<span className='input-group-text border-start-0'>
												<i className='ti ti-mail' />
											</span>
										</div>
									</div>
									<div className='mb-3'>
										<label className='form-label'>
											Password <span className='text-danger'> *</span>
										</label>
										<div className='pass-group'>
											<input
												type={passwordVisibility.password ? 'text' : 'password'}
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
													passwordVisibility.password ? 'ti-eye' : 'ti-eye-off'
												}`}
												onClick={() => togglePasswordVisibility('password')}
											></span>
										</div>
									</div>
									<div className='mb-3'>
										<label className='form-label'>
											Confirm Password <span className='text-danger'> *</span>
										</label>
										<div className='pass-group'>
											<input
												type={
													passwordVisibility.confirmPassword
														? 'text'
														: 'password'
												}
												className='pass-input form-control'
												{...register('confirmPassword', {
													required: 'Confirm Password is required',
												})}
											/>
											{errors.confirmPassword && (
												<span className='text-danger'>
													{errors.confirmPassword.message}
												</span>
											)}
											<span
												className={`ti toggle-password ${
													passwordVisibility.confirmPassword
														? 'ti-eye'
														: 'ti-eye-off'
												}`}
												onClick={() =>
													togglePasswordVisibility('confirmPassword')
												}
											></span>
										</div>
									</div>
									<div className='mb-3'>
										<label className='form-label'>
											Role <span className='text-danger'> *</span>
										</label>
										<Select
											classNamePrefix='react-select'
											options={status}
											placeholder='Choose Role'
											onChange={(selectedOption) => {
												setValue('userRole', selectedOption);
												trigger('userRole'); // optional: triggers validation
											}}
										/>
										{errors.userRole && (
											<span className='text-danger'>
												{errors.userRole.message}
											</span>
										)}
									</div>
									<div className='form-login authentication-check'>
										<div className='row'>
											<div className='col-sm-8'>
												<div className='custom-control custom-checkbox justify-content-start'>
													<div className='custom-control custom-checkbox'>
														<label className='checkboxs ps-4 mb-0 pb-0 line-height-1'>
															<input type='checkbox' />
															<span className='checkmarks' />I agree to the{' '}
															<Link
																to='#'
																className='text-primary'
															>
																Terms &amp; Privacy
															</Link>
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='form-login'>
										<button
											type='submit'
											className='btn btn-login'
										>
											Sign Up
										</button>
									</div>

									<div className='signinform'>
										<h4>
											Already have an account ?{' '}
											<Link
												to={route.signin}
												className='hover-a'
											>
												Sign In Instead
											</Link>
										</h4>
									</div>
									<div className='form-setlogin or-text'>
										<h4>OR</h4>
									</div>
									<div className='mt-2'>
										<div className='d-flex align-items-center justify-content-center flex-wrap'>
											{/* <div className="text-center me-2 flex-fill">
                        <Link
                          to="#"
                          className="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center"
                        >
                          <ImageWithBasePath
                            className="img-fluid m-1"
                            src="assets/img/icons/facebook-logo.svg"
                            alt="Facebook"
                          />
                        </Link>
                      </div> */}
											<div className='text-center me-2 flex-fill'>
												{/* <Link
													to='#'
													className='btn btn-white br-10 p-2  border d-flex align-items-center justify-content-center'
												>
													<ImageWithBasePath
														className='img-fluid m-1'
														src='assets/img/icons/google-logo.svg'
														alt='Facebook'
													/>
												</Link> */}
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

export default Register;
