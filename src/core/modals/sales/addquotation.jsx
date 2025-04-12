import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../img/imagewithbasebath";
import Select from "react-select";
import { Status } from "../../common/selectOption/selectOption";
import DefaultEditor from "react-simple-wysiwyg";
import { DatePicker } from "antd";
import { Calendar } from "feather-icons-react/build/IconComponents";

const AddQuotation = () => {
  const customer = [
    { value: "Choose", label: "Choose" },
    { value: "Benjamin", label: "Benjamin" },
    { value: "Nydia Fitzgerald", label: "Nydia Fitzgerald" },
  ];


  const [values, setValue] = useState();
  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <>
        {/*Add Quotation */}
        <div className="modal fade" id="add-units">
          <div className="modal-dialog purchase modal-dialog-centered stock-adjust-modal">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Quotation</h4>
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
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3 add-product">
                        <label className="form-label">
                          Customer Name<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="row">
                          <div className="col-lg-10 col-sm-10 col-10">
                            <Select
                              classNamePrefix="react-select"
                              options={customer}
                              placeholder="Choose"
                            />
                          </div>
                          <div className="col-lg-2 col-sm-2 col-2 p-0">
                            <div className="add-icon tab">
                              <a
                                className="bg-dark text-white p-2 rounded"
                                data-bs-toggle="modal"
                                data-bs-target="#add-units"
                              >
                                <ImageWithBasePath src="assets/img/icons/plus1.svg" alt="img" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Date<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-groupicon calender-input">
                          <DatePicker
                            className="form-control datetimepicker"
                            placeholder="dd/mm/yyyy"
                          />
                          <Calendar className="info-img" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Reference<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Product<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-groupicon select-code">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please type product code and select"
                          />
                          <div className="addonset">
                            <ImageWithBasePath src="assets/img/icons/qrcode-scan.svg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="modal-body-table">
                        <div className="table-responsive">
                          <table className="table datanew">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Purchase Price($)</th>
                                <th>Discount($)</th>
                                <th>Tax(%)</th>
                                <th>Tax Amount($)</th>
                                <th>Unit Cost($)</th>
                                <th>Total Cost(%)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{ background: "#ffffff" }}>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                                <td className="p-5"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Order Tax<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Discount<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Shipping<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Status<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={Status}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3 summer-description-box">
                      <label className="form-label">Description</label>
                      <DefaultEditor value={values} onChange={onChange} />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                    Submit
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Quotation */}
      </>

    </div>
  );
};

export default AddQuotation;
