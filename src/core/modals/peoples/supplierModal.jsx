import React from "react";
import Select from "react-select";
import ImageWithBasePath from "../../img/imagewithbasebath";
import { Link } from "react-router-dom";

const SupplierModal = () => {
  const city = [
    { value: "Choose", label: "Choose" },
    { value: "Varrel", label: "Varrel" },
    { value: "Los Angels", label: "Los Angels" },
    { value: "Munich", label: "Munich" },
  ];
  const state = [
    { value: "Choose", label: "Choose" },
    { value: "Bavaria", label: "Bavaria" },
    { value: "New York City", label: "New York City" },
    { value: "California", label: "California" },
  ];

  const country = [
    { value: "Choose", label: "Choose" },
    { value: "Germany", label: "Germany" },
    { value: "Mexico", label: "Mexico" },
  ];

  return (
    <div>
      <>
        {/* Add Supplier */}
        <div className="modal fade" id="add-supplier">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Supplier</h4>
                </div>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="new-employee-field">
                        <div className="profile-pic-upload mb-2">
                          <div className="profile-pic">
                            <span>
                              <i
                                data-feather="plus-circle"
                                className="plus-down-add"
                              />
                              Add Image
                            </span>
                          </div>
                          <div className="mb-0">
                            <div className="image-upload mb-2">
                              <input type="file" />
                              <div className="image-uploads">
                                <h4>Upload Image</h4>
                              </div>
                            </div>
                            <p>JPEG, PNG up to 2 MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Phone <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Address <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-10 col-10">
                      <div className="mb-3">
                        <label className="form-label">
                          City <span className="text-danger">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={city}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-10 col-10">
                      <div className="mb-3">
                        <label className="form-label">
                          State <span className="text-danger">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={state}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-10 col-10">
                      <div className="mb-3">
                        <label className="form-label">
                          Country <span className="text-danger">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={country}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Postal Code <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="users5"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="users5" className="checktoggle mb-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Add Supplier
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Supplier */}
        {/* Edit Supplier */}
        <div className="modal fade" id="edit-supplier">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Supplier</h4>
                  </div>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <form>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="new-employee-field">
                          <div className="profile-pic-upload edit-pic">
                            <div className="profile-pic">
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/supplier/edit-supplier.jpg"
                                  alt="Img"
                                />
                              </span>
                              <div className="close-img">
                                <i data-feather="x" className="info-img" />
                              </div>
                            </div>
                            <div className="mb-0">
                              <div className="image-upload mb-0">
                                <input type="file" />
                                <div className="image-uploads">
                                  <h4>Change Image</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Apex"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Computers"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue="carlevans@example.com"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Phone <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={+15964712634}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="46 Perry Street"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-10 col-10">
                        <div className="mb-3">
                          <label className="form-label">
                            City <span className="text-danger">*</span>
                          </label>
                          <Select
                          classNamePrefix="react-select"
                          options={city}
                          placeholder="Choose"
                        />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-10 col-10">
                        <div className="mb-3">
                          <label className="form-label">
                            State <span className="text-danger">*</span>
                          </label>
                          <Select
                          classNamePrefix="react-select"
                          options={state}
                          placeholder="Choose"
                        />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-10 col-10">
                        <div className="mb-3">
                          <label className="form-label">
                            Country <span className="text-danger">*</span>
                          </label>
                          <Select
                          classNamePrefix="react-select"
                          options={country}
                          placeholder="Choose"
                        />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Postal Code <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={10176}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-0">
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span className="status-label">Status</span>
                            <input
                              type="checkbox"
                              id="users6"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="users6" className="checktoggle mb-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <Link
                      to="#"
                      className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    >
                      Save Changes
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Supplier */}
        {/* Delete Modal */}
        <div className="modal fade" id="delete-modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-5">
              <div className="modal-body text-center p-0">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
                  Delete Supplier
                </h4>
                <p className="text-gray-6 mb-0 fs-16">
                  Are you sure you want to delete supplier?
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <Link
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    data-bs-dismiss="modal"
                  >
                    Yes Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Modal */}
      </>

    </div>
  );
};

export default SupplierModal;
