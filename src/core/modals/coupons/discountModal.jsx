import { DatePicker } from 'antd';
import React from 'react'
import Select from "react-select";

const DiscountModal = () => {
    const options = [
        { value: "1", label: "Membership" },
        { value: "2", label: "Standard" },
      ];
      const customers = [
        { value: "1", label: "All Customers" },
        { value: "2", label: "Members Only" },
      ];
    const discountType = [
        { value: "1", label: "Rupess" },
        { value: "2", label: "Percentage" },
      ];
  return (
    <>
  {/* Add discount plan*/}
  <div className="modal fade" id="add-units">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <div className="page-title">
            <h4>Add Discount</h4>
          </div>
          <button
            type="button"
            className="close bg-danger text-white fs-16"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <form >
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Discount Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Discount Plan <span className="text-danger">*</span>
                  </label>
                  <Select
                    classNamePrefix="react-select"
                    options={options}
                    placeholder="Choose"
                    />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Applicable For <span className="text-danger">*</span>
                  </label>
                  <Select
                    classNamePrefix="react-select"
                    options={customers}
                    placeholder="Choose"
                    />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Valid From <span className="text-danger">*</span>
                  </label>
                  <div className="input-groupicon calender-input">
                    <i data-feather="calendar" className="info-img" />
                    <DatePicker
                      className="datetimepicker form-control p-2"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Valid Till <span className="text-danger">*</span>
                  </label>
                  <div className="input-groupicon calender-input">
                    <i data-feather="calendar" className="info-img" />
                    <DatePicker
                      className="datetimepicker form-control p-2"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Discount Type <span className="text-danger">*</span>
                  </label>
                  <Select
                    classNamePrefix="react-select"
                    options={discountType}
                    placeholder="Choose"
                    />
                </div>
              </div>
              <div className="col-md-12">
                <div>
                  <label className="form-label">
                    Valid on Following Days{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md"
                      >
                        Monday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md1"
                      >
                        Tuesday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md2"
                      >
                        Wednesday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md3"
                      >
                        Thursday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md4"
                      >
                        Friday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md5"
                      >
                        Saturday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md6"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md6"
                      >
                        Sunday
                      </label>
                    </div>
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
              type="button" data-bs-dismiss="modal"
              className="btn btn-primary fs-13 fw-medium p-2 px-3"
            >
              Add Discount Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add discount plan */}
  {/* Edit discount plan */}
  <div className="modal fade" id="edit-units">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <div className="page-title">
            <h4>Edit Discount</h4>
          </div>
          <button
            type="button"
            className="close bg-danger text-white fs-16"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <form >
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Discount Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Discount Plan <span className="text-danger">*</span>
                  </label>
                  <Select
                    classNamePrefix="react-select"
                    options={options}
                    placeholder="Choose"
                    />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Applicable For <span className="text-danger">*</span>
                  </label>
                  <Select
                    classNamePrefix="react-select"
                    options={customers}
                    placeholder="Choose"
                    />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Valid From <span className="text-danger">*</span>
                  </label>
                  <div className="input-groupicon calender-input">
                    <i data-feather="calendar" className="info-img" />
                    <DatePicker
                      
                      className="datetimepicker form-control p-2"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Valid Till <span className="text-danger">*</span>
                  </label>
                  <div className="input-groupicon calender-input">
                    <i data-feather="calendar" className="info-img" />
                    <DatePicker
                      className="datetimepicker form-control p-2"
                      placeholder="dd/mm/yyyy"
                    />
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">
                    Discount Type <span className="text-danger">*</span>
                  </label>
                  <Select
                    classNamePrefix="react-select"
                    options={discountType}
                    placeholder="Choose"
                    />
                </div>
              </div>
              <div className="col-md-12">
                <div>
                  <label className="form-label">
                    Valid on Following Days{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md7"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md7"
                      >
                        Monday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md8"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md8"
                      >
                        Tuesday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md9"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md9"
                      >
                        Wednesday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md10"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md10"
                      >
                        Thursday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md11"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md11"
                      >
                        Friday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md12"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md12"
                      >
                        Saturday
                      </label>
                    </div>
                    <div className="form-check form-check-md d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-md13"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkebox-md13"
                      >
                        Sunday
                      </label>
                    </div>
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
              type="button" data-bs-dismiss="modal"
              className="btn btn-primary fs-13 fw-medium p-2 px-3"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit discount plan */}
  {/* delete modal */}
  <div className="modal fade" id="delete-modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="page-wrapper-new p-0">
          <div className="content p-5 px-3 text-center">
            <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
              <i className="ti ti-trash fs-24 text-danger" />
            </span>
            <h4 className="fs-20 fw-bold mb-2 mt-1">Delete Discount Plan</h4>
            <p className="mb-0 fs-16">
              Are you sure you want to delete discount plan?
            </p>
            <div className="modal-footer-btn mt-3 d-flex justify-content-center">
              <button
                type="button"
                className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button" data-bs-dismiss="modal"
                className="btn btn-primary fs-13 fw-medium p-2 px-3"
              >
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default DiscountModal