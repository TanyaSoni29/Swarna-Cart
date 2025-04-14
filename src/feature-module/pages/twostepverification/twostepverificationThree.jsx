import React from "react";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../Router/all_routes";
import { Input } from "antd";

const TwostepverificationThree = () => {
  const route = all_routes;

  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const onInput = (value) => {
    console.log('onInput:', value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };


  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="account-content">
          <div className="login-wrapper login-new">
            <div className="row w-100">
              <div className="col-lg-5 mx-auto">
                <div className="login-content user-login">
                  <div className="login-logo">
                    <ImageWithBasePath src="assets/img/logo.png" alt="img" />
                    <Link to={route.dashboard} className="login-logo logo-white">
                      <ImageWithBasePath src="assets/img/logo-white.png" alt="Img" />
                    </Link>
                  </div>
                  <form className="digit-group">
                    <div className="card">
                      <div className="card-body p-5">
                        <div className="login-userheading">
                          <h3>2 Step Verification</h3>
                          <h4>
                            Enter the OTP sent to ******doe@example.com to confirm
                            your account.
                          </h4>
                        </div>
                        <div className="text-center otp-input">
                          <div className="d-flex align-items-center mb-3">
                            {/* <input
                              type="text"
                              className=" rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold me-3"
                              id="digit-1"
                              name="digit-1"
                              data-next="digit-2"
                              maxLength={1}
                            />
                            <input
                              type="text"
                              className=" rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold me-3"
                              id="digit-2"
                              name="digit-2"
                              data-next="digit-3"
                              data-previous="digit-1"
                              maxLength={1}
                            />
                            <input
                              type="text"
                              className=" rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold me-3"
                              id="digit-3"
                              name="digit-3"
                              data-next="digit-4"
                              data-previous="digit-2"
                              maxLength={1}
                            />
                            <input
                              type="text"
                              className=" rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold"
                              id="digit-4"
                              name="digit-4"
                              data-next="digit-5"
                              data-previous="digit-3"
                              maxLength={1}
                            /> */}
                            <Input.OTP length={4} {...sharedProps} />
                          </div>
                          <div>
                            <div className="badge bg-danger-transparent mb-3">
                              <p className="d-flex align-items-center ">
                                <i className="ti ti-clock me-1" />
                                09:59
                              </p>
                            </div>
                            <div className="mb-3 d-flex justify-content-center">
                              <p className="text-gray-9">
                              {`Didn't`} get the OTP?{" "}
                                <Link
                                  to="#"
                                  className="text-primary"
                                >
                                  Resend OTP
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-0">
                          <Link to={route.resetpasswordThree} className="btn btn-primary w-100">
                            Verify &amp; Proceed
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
              <p>Copyright © 2025 Swarna</p>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>

  );
};

export default TwostepverificationThree;
