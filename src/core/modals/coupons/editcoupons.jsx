import { DatePicker } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import TextEditor from "../../../feature-module/inventory/texteditor";

const EditCoupons = () => {
  const price = [
    { value: "choose", label: "Choose Type" },
    { value: "fixed", label: "Fixed" },
    { value: "percentage", label: "Percentage" },
  ];
  const options = [
    { value: "nike-jordan", label: "Nike Jordan" },
    { value: "amazon-echo-dot", label: "Amazon Echo Dot" },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  return (
    <div>
      {/* Edit coupons */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Edit Coupons</h4>
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
                <div className="modal-body custom-modal-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Coupon Name<span className="text-danger ms-1">*</span></label>
                          <input type="text" defaultValue="Coupons 21" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Coupon Code<span className="text-danger ms-1">*</span></label>
                          <input type="text" defaultValue="Christmas" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Type<span className="text-danger ms-1">*</span></label>
                          <Select
                            classNamePrefix="react-select"
                            options={price}
                            placeholder="Choose Type"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Discount<span className="text-danger ms-1">*</span></label>
                          <input type="text" defaultValue="$20" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-blocks">
                          <label>Limit<span className="text-danger ms-1">*</span></label>
                          <input type="text" defaultValue="04" />
                          <span className="unlimited-text">
                            0 for Unlimited
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Start Date<span className="text-danger ms-1">*</span></label>
                          <div className="input-groupicon calender-input">
                            <DatePicker
                              selected={selectedDate}
                              onChange={handleDateChange}
                              type="date"
                              className="filterdatepicker"
                              dateFormat="dd-MM-yyyy"
                              placeholder="20-2-2024"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>End Date<span className="text-danger ms-1">*</span></label>
                          <div className="input-groupicon calender-input">
                            <DatePicker
                              selected={selectedDate1}
                              onChange={handleDateChange1}
                              type="date"
                              className="filterdatepicker"
                              dateFormat="dd-MM-yyyy"
                              placeholder="20-2-2024"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-blocks">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center mb-2">
                          <span className="status-label">All Products</span>
                          <div className="d-flex align-items-center">
                            <input
                              type="checkbox"
                              id="user5"
                              className="check"
                            />
                            <label
                              htmlFor="user5"
                              className="checktoggle mb-0 me-1"
                            />
                            <span className="customer-toggle">
                              Once Per Customer
                            </span>
                          </div>
                        </div>

                        <Select
                          classNamePrefix="react-select"
                          options={options}
                          placeholder="Select an option"
                          isSearchable={true} // Set to false if you don't want a search input
                        />
                      </div>
                      <div className="mb-3 summer-description-box">
                        <label className="form-label">Description</label>
                        <TextEditor />
                        <p>Maximum 60 Words</p>
                      </div>

                      <div className="input-blocks m-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user6"
                            className="check"
                            defaultChecked="true"
                          />
                          <label htmlFor="user6" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer-btn">
                      <button
                        type="button"
                        className="btn btn-cancel me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <Link to="#" data-bs-dismiss="modal" className="btn btn-submit">
                        Save Changes
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Coupons */}
    </div>
  );
};

export default EditCoupons;
