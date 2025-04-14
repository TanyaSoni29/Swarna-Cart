import React from "react";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../Router/all_routes";
import { Input } from "antd";

const Twostepverification = () => {
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
          <div className="login-wrapper bg-img">
            <div className="login-content authent-content">
              <form className="digit-group">
                <div className="login-userset">
                  <div className="login-logo logo-normal">
                    <ImageWithBasePath src="assets/img/logo.png" alt="img" />
                  </div>
                  <Link to={route.dashboard} className="login-logo logo-white">
                    <ImageWithBasePath src="assets/img/logo-white.png" alt="Img" />
                  </Link>
                  <div>
                    <div className="login-userheading">
                      <h3>2 Step Verification</h3>
                      <h4>
                        Please enter the OTP received to confirm your account
                        ownership. A code has been send to ******doe@example.com
                      </h4>
                    </div>
                    <div className="text-center otp-input">
                      <div className="d-flex align-items-center justify-content-center mb-3">
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
                            <Link to="#" className="text-primary">
                              Resend OTP
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <Link to={route.resetpassword} className="btn btn-primary w-100">
                        Submit
                      </Link>
                    </div>
                  </div>
                  <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                    <p>Copyright © 2025 Swarna</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Twostepverification;
