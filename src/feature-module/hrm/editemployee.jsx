import { DatePicker } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { all_routes } from "../../Router/all_routes";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import { ArrowLeft, Calendar } from "feather-icons-react/build/IconComponents";
import DefaultEditor from "react-simple-wysiwyg";

const EditEmployee = () => {

  const route = all_routes;

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

  const [values, setValue] = useState();
  function onChange(e) {
    setValue(e.target.value);
  }

  const gender = [
    { value: "Choose", label: "Choose" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const nationality = [
    { value: "Choose", label: "Choose" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "India", label: "India" },
  ];
  const Shift = [
    { value: "Choose", label: "Choose" },
    { value: "Regular", label: "Regular" },
  ];
  const departments = [
    { value: "Choose", label: "Choose" },
    { value: "UI/UX", label: "UI/UX" },
    { value: "Support", label: "Support" },
    { value: "HR", label: "HR" },
    { value: "Engineering", label: "Engineering" },
  ];
  const designation = [
    { value: "Choose", label: "Choose" },
    { value: "Designer", label: "Designer" },
    { value: "Developer", label: "Developer" },
    { value: "Tester", label: "Tester" },
  ];
  const bloodgroup = [
    { value: "Select", label: "Select" },
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B-" },
    { value: "O+", label: "O-" },
    { value: "O+", label: "O-" },
    { value: "AB+", label: "AB-" },
    { value: "AB+", label: "AB-" },
  ];
  const country = [
    { value: "Choose", label: "Choose" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "USA", label: "USA" },
  ];

  const state = [
    { value: "Choose", label: "Choose" },
    { value: "California", label: "California" },
    { value: "Paris", label: "Paris" },
  ];
  const city = [
    { value: "Choose", label: "Choose" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "New Jersey", label: "New Jersey" },
  ];


  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Edit Employee</h4>
                <h6>Edit Employee</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link to={route.employeelist} className="btn btn-secondary">
                <ArrowLeft className="me-2" />
                Back to List
              </Link>
            </div>
          </div>
          {/* /product list */}
          <form>
            <div className="accordion-card-one accordion" id="accordionExample">
              <div className="accordion-item">
                <div className="accordion-header p-3" id="headingOne">
                  <div
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-controls="collapseOne"
                  >
                    <div className="addproduct-icon d-flex align-items-center justify-content-between flex-fill">
                      <h5 className="d-inline-flex align-items-center">
                        <i
                          data-feather="info"
                          className="feather-edit text-primary me-2"
                        />
                        <span>Employee Information</span>
                      </h5>
                      <Link to="#">
                        <i data-feather="chevron-down" className="chevron-down-add" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="new-employee-field">
                      <div className="profile-pic-upload edit-pic">
                        <div className="profile-pic">
                          <span>
                            <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="Img" />
                          </span>
                        </div>
                        <div className="me-3 mb-0">
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Change Image</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              First Name<span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Mitchum"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Last Name<span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Daniel"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Email<span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              defaultValue="mir34345@example.com"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Contact Number
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="+1 54554 54788"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Emp Code<span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="POS001"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-blocks">
                            <label className="form-label">
                              Date of Birth<span className="text-danger ms-1">*</span>
                            </label>
                            <div className="input-groupicon calender-input">
                              <Calendar className="info-img" />
                              <DatePicker
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Gender<span className="text-danger ms-1">*</span>
                            </label>
                            <Select
                              classNamePrefix="react-select"
                              options={gender}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Nationality<span className="text-danger ms-1">*</span>
                            </label>
                            <Select
                              classNamePrefix="react-select"
                              options={nationality}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-blocks">
                            <label className="form-label">
                              Joining Date<span className="text-danger ms-1">*</span>
                            </label>
                            <div className="input-groupicon calender-input">
                              <Calendar className="info-img" />
                              <DatePicker
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <div className="add-newplus">
                              <label className="form-label">
                                Shift<span className="text-danger ms-1">*</span>
                              </label>
                              <Link to="#">
                                <span>
                                  <i
                                    data-feather="plus-circle"
                                    className="plus-down-add"
                                  />
                                  Add new
                                </span>
                              </Link>
                            </div>
                            <Select
                              classNamePrefix="react-select"
                              options={Shift}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Department<span className="text-danger ms-1">*</span>
                            </label>
                            <Select
                              classNamePrefix="react-select"
                              options={departments}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Designation<span className="text-danger ms-1">*</span>
                            </label>
                            <Select
                              classNamePrefix="react-select"
                              options={designation}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Blood Group<span className="text-danger ms-1">*</span>
                            </label>
                            <Select
                              classNamePrefix="react-select"
                              options={bloodgroup}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                        {/* Editor */}
                        <div className="col-lg-12">
                          <div className="input-blocks summer-description-box transfer mb-3">
                            <label>About</label>
                            <div id="summernote">
                              <DefaultEditor value={values} onChange={onChange} />
                            </div>
                            <p className="mt-1">Maximum 60 Characters</p>
                          </div>
                        </div>
                        {/* /Editor */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header p-3" id="heading3">
                  <div
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-controls="collapseThree"
                  >
                    <div className="addproduct-icon d-flex align-items-center justify-content-between flex-fill">
                      <h5 className="d-inline-flex align-items-center">
                        <i
                          data-feather="map-pin"
                          className="feather-edit text-primary me-2"
                        />
                        <span>Address Information</span>
                      </h5>
                      <Link to="#">
                        <i data-feather="chevron-down" className="chevron-down-add" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading3"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="other-info">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="1861 Bayonne Ave, Manchester"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Country</label>
                            <Select
                              classNamePrefix="react-select"
                              options={country}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">State</label>
                            <Select
                              classNamePrefix="react-select"
                              options={state}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">City</label>
                            <Select
                              classNamePrefix="react-select"
                              options={city}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Zipcode</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={90001}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header p-3" id="heading4">
                  <div
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-controls="collapseFour"
                  >
                    <div className="addproduct-icon d-flex align-items-center justify-content-between flex-fill">
                      <h5 className="d-inline-flex align-items-center">
                        <i
                          data-feather="info"
                          className="feather-edit text-primary me-2"
                        />
                        <span>Emergency Information</span>
                      </h5>
                      <Link to="#">
                        <i data-feather="chevron-down" className="chevron-down-add" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading4"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="other-info">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Emergency Contact Number 1
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="+1 43566 67788"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Relation</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Mother"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Andrea Jermiah"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Emergency Contact Number 2
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Relation</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header p-3" id="heading5">
                  <div
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-controls="collapseFive"
                  >
                    <div className="addproduct-icon d-flex align-items-center justify-content-between flex-fill">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-building-bank feather-edit text-primary me-2" />
                        <span>Bank Information</span>
                      </h5>
                      <Link to="#">
                        <i data-feather="chevron-down" className="chevron-down-add" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading5"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="other-info">
                      <div className="row">
                        <div className="col-lg-3 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Bank Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Swizz International"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Account Number</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={350501501690}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">IFSC</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="SW7994"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Branch</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Alabama USA"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header p-3" id="heading6">
                  <div
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-controls="collapseTwo"
                  >
                    <div className="addproduct-icon d-flex align-items-center justify-content-between flex-fill">
                      <h5 className="d-inline-flex align-items-center">
                        <i
                          data-feather="info"
                          className="feather-edit text-primary me-2"
                        />
                        <span>Password</span>
                      </h5>
                      <Link to="#">
                        <i data-feather="chevron-down" className="chevron-down-add" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading6"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="pass-info">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="">
                            <label className="form-label">
                              Password <span className="text-danger"> *</span>
                            </label>
                            <div className="pass-group">
                              <input
                                type={passwordVisibility ? "text" : "password"}
                                className="pass-input form-control"
                              />
                              <span
                                className={`ti toggle-password ${passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                                  }`}
                                onClick={togglePasswordVisibility}
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="">
                            <label className="form-label">
                              Confirm Password <span className="text-danger"> *</span>
                            </label>
                            <div className="pass-group">
                              <input
                                type={
                                  passwordVisibility.confirmPassword ? "text" : "password"
                                }
                                className="pass-input form-control"
                              />
                              <span
                                className={`ti toggle-password ${passwordVisibility.confirmPassword
                                  ? "ti-eye"
                                  : "ti-eye-off"
                                  }`}
                                onClick={() =>
                                  togglePasswordVisibility("confirmPassword")
                                }
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /product list */}
            <div className="text-end mb-3">
              <button type="button" className="btn btn-secondary me-2">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2025 © Swarna. All Right Reserved</p>
          <p>
            Designed &amp; Developed by{" "}
            <Link to="#" className="text-primary">
              Backend Coders
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
};

export default EditEmployee;
