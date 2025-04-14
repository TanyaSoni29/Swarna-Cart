import React, { useState } from "react";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../Router/all_routes";

const SigninTwo = () => {
  const route = all_routes;
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="account-content">
          <div className="row login-wrapper m-0">
            <div className="col-lg-6 p-0">
              <div className="login-content">
                <form >
                  <div className="login-userset">
                    <div className="login-logo logo-normal">
                      <ImageWithBasePath src="assets/img/logo.png" alt="img" />
                    </div>
                    <Link to={route.dashboard} className="login-logo logo-white">
                      <ImageWithBasePath src="assets/img/logo-white.png" alt="Img" />
                    </Link>
                    <div className="login-userheading">
                      <h3>Sign In</h3>
                      <h4>
                        Access the Swarna panel using your email and passcode.
                      </h4>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <div className="input-group">
                        <input
                          type="text"
                          defaultValue=""
                          className="form-control border-end-0"
                        />
                        <span className="input-group-text border-start-0">
                          <i className="ti ti-mail" />
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <div className="pass-group">
                        <input
                          type={isPasswordVisible ? "text" : "password"}
                          className="pass-input form-control"
                        />
                        <span
                          className={`ti toggle-password ${isPasswordVisible ? "ti-eye" : "ti-eye-off"
                            }`}
                          onClick={togglePasswordVisibility}
                        ></span>
                      </div>
                    </div>
                    <div className="form-login authentication-check">
                      <div className="row">
                        <div className="col-6">
                          <div className="custom-control custom-checkbox">
                            <label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
                              <input type="checkbox" />
                              <span className="checkmarks" />
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          <Link className="forgot-link" to={route.forgotPasswordTwo}>
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="form-login">
                      <button type="submit" className="btn btn-login">
                        Sign In
                      </button>
                    </div>
                    <div className="signinform">
                      <h4>
                        New on our platform?
                        <Link to={route.registerTwo} className="hover-a">
                          {" "}
                          Create an account
                        </Link>
                      </h4>
                    </div>
                    <div className="form-setlogin or-text">
                      <h4>OR</h4>
                    </div>
                    <div className="form-sociallink">
                      <div className="d-flex align-items-center justify-content-center flex-wrap">
                        <div className="text-center me-2 flex-fill">
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
                        </div>
                        <div className="text-center me-2 flex-fill">
                          <Link
                            to="#"
                            className="btn btn-white br-10 p-2  border d-flex align-items-center justify-content-center"
                          >
                            <ImageWithBasePath
                              className="img-fluid m-1"
                              src="assets/img/icons/google-logo.svg"
                              alt="Facebook"
                            />
                          </Link>
                        </div>
                        <div className="text-center flex-fill">
                          <Link
                            to="#"
                            className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                          >
                            <ImageWithBasePath
                              className="img-fluid m-1"
                              src="assets/img/icons/apple-logo.svg"
                              alt="Apple"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                        <p>Copyright © 2025 Swarna</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="login-img">
                <ImageWithBasePath
                  src="assets/img/authentication/authentication-01.svg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>

  );
};

export default SigninTwo;
