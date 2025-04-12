import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Calendar, PlusCircle } from "feather-icons-react/build/IconComponents";
import ImageWithBasePath from "../../img/imagewithbasebath";
import { Status } from "../../common/selectOption/selectOption";
import DefaultEditor from "react-simple-wysiwyg";
import { DatePicker } from "antd";

const EditQuotation = () => {
  const customer = [
    { value: "Choose", label: "Choose" },
    { value: "Thomas", label: "Thomas" },
    { value: "Rose", label: "Rose" },
  ];
  const [values, setValue] = useState();
  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <>
        {/* edit popup */}
        <div className="modal fade" id="edit-units">
          <div className="modal-dialog edit-sales-modal">
            <div className="modal-content">
              <div className="page-header p-4">
                <div className="add-item new-sale-items d-flex align-items-center justify-content-between w-100 me-0">
                  <div className="page-title">
                    <h4>Edit Quotation</h4>
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
              </div>
              <form>
                <div className="card border-none">
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">Customer Name</label>
                          <div className="row">
                            <div className="col-lg-10 col-sm-10 col-10">
                              <Select
                                classNamePrefix="react-select"
                                options={customer}
                                placeholder="Choose"
                              />
                            </div>
                            <div className="col-lg-2 col-sm-2 col-2 ps-0">
                              <div className="add-icon">
                                <span className="bg-dark text-white p-2 rounded">
                                  <PlusCircle />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">Date</label>
                          <div className="input-groupicon calender-input">
                            <DatePicker
                              className="form-control datetimepicker"
                              placeholder="dd/mm/yyyy"
                            />
                            <Calendar className="info-img" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">Reference Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={"010203"}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">Product Name</label>
                          <div className="input-groupicon select-code">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Please type product code and select"
                            />
                            <div className="addonset">
                              <ImageWithBasePath src="assets/img/icons/scanners.svg" alt="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive no-pagination mb-3">
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
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="avatar avatar-md me-2"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/products/stock-img-02.png"
                                    alt="product"
                                  />
                                </Link>
                                <Link to="#">Nike Jordan</Link>
                              </div>
                            </td>
                            <td>
                              <div className="product-quantity bg-light border-0">
                                <span className="quantity-btn">
                                  +
                                  <i
                                    data-feather="plus-circle"
                                    className="plus-circle"
                                  />
                                </span>
                                <input
                                  type="text"
                                  className="quntity-input bg-transparent"
                                  defaultValue={2}
                                />
                                <span className="quantity-btn">
                                  <i
                                    data-feather="minus-circle"
                                    className="feather-search"
                                  />
                                </span>
                              </div>
                            </td>
                            <td>2000</td>
                            <td>500</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>1500</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="avatar avatar-md me-2"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/products/stock-img-03.png"
                                    alt="product"
                                  />
                                </Link>
                                <Link to="#">Apple Series 5 Watch</Link>
                              </div>
                            </td>
                            <td>
                              <div className="product-quantity bg-light border-0">
                                <span className="quantity-btn">
                                  +
                                  <i
                                    data-feather="plus-circle"
                                    className="plus-circle"
                                  />
                                </span>
                                <input
                                  type="text"
                                  className="quntity-input bg-transparent"
                                  defaultValue={2}
                                />
                                <span className="quantity-btn">
                                  <i
                                    data-feather="minus-circle"
                                    className="feather-search"
                                  />
                                </span>
                              </div>
                            </td>
                            <td>3000</td>
                            <td>400</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>1700</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="avatar avatar-md me-2"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/products/stock-img-05.png"
                                    alt="product"
                                  />
                                </Link>
                                <Link to="#">Lobar Handy</Link>
                              </div>
                            </td>
                            <td>
                              <div className="product-quantity bg-light border-0">
                                <span className="quantity-btn">
                                  +
                                  <i
                                    data-feather="plus-circle"
                                    className="plus-circle"
                                  />
                                </span>
                                <input
                                  type="text"
                                  className="quntity-input bg-transparent"
                                  defaultValue={2}
                                />
                                <span className="quantity-btn">
                                  <i
                                    data-feather="minus-circle"
                                    className="feather-search"
                                  />
                                </span>
                              </div>
                            </td>
                            <td>2500</td>
                            <td>500</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>2000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 ms-auto">
                        <div className="total-order w-100 max-widthauto m-auto mb-4">
                          <ul className="rounded-1 border-1">
                            <li className="border-0 border-bottom">
                              <h4 className="border-end">Order Tax</h4>
                              <h5>$ 0.00</h5>
                            </li>
                            <li className="border-0 border-bottom">
                              <h4 className="border-end">Discount</h4>
                              <h5>$ 0.00</h5>
                            </li>
                            <li className="border-0 border-bottom">
                              <h4 className="border-end">Shipping</h4>
                              <h5>$ 0.00</h5>
                            </li>
                            <li className="border-0 border-bottom">
                              <h4 className="border-end">Grand Total</h4>
                              <h5>$5200.00</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">Order Tax</label>
                          <div className="input-groupicon select-code">
                            <input
                              type="text"
                              className="form-control"
                              placeholder={0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">Discount</label>
                          <div className="input-groupicon select-code">
                            <input
                              type="text"
                              className="form-control"
                              placeholder={0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">Shipping</label>
                          <div className="input-groupicon select-code">
                            <input
                              type="text"
                              className="form-control"
                              placeholder={0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">Status</label>
                          <Select
                            classNamePrefix="react-select"
                            options={Status}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3 summer-description-box">
                          <label className="form-label">Description</label>
                          <DefaultEditor value={values} onChange={onChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary add-cancel me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link to="#" className="btn btn-primary add-sale" data-bs-dismiss="modal">
                    Submit
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /edit popup */}
      </>

    </div>
  );
};

export default EditQuotation;
