import { Calendar, PlusCircle } from "feather-icons-react/build/IconComponents";
import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../img/imagewithbasebath";
import Select from "react-select";
import { DatePicker } from "antd";

const AddSalesReturns = () => {
  const customers = [
    { value: "Choose Customer", label: "Choose Customer" },
    { value: "Thomas", label: "Thomas" },
    { value: "Benjamin", label: "Benjamin" },
    { value: "Bruklin", label: "Bruklin" },
  ];
  const status = [
    { value: "Status", label: "Status" },
    { value: "Pending", label: "Pending" },
    { value: "Received", label: "Received" },
  ];


  return (
    <div>
      <>
        {/* add popup */}
        <div className="modal fade" id="add-sales-new">
          <div className="modal-dialog add-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4> Add Sales Return</h4>
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
                <div className="card border-0">
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Customer Name<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="row">
                            <div className="col-lg-10 col-sm-10 col-10">
                              <Select
                                classNamePrefix="react-select"
                                options={customers}
                                placeholder="Choose"
                              />
                            </div>
                            <div className="col-lg-2 col-sm-2 col-2 ps-0">
                              <div className="add-icon">
                                <Link
                                  to="#"
                                  className="bg-dark text-white p-2 rounded"
                                >
                                  <PlusCircle />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
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
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Reference<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6 col-12">
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
                    </div>
                    <div className="table-responsive no-pagination mb-3">
                      <table className="table  datanew">
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>Net Unit Price($) </th>
                            <th>Stock</th>
                            <th>QTY </th>
                            <th>Discount($) </th>
                            <th>Tax %</th>
                            <th>Subtotal ($)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
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
                              <h5>$ 0.00</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Order Tax<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon select-code">
                            <input
                              type="text"
                              defaultValue={0}
                              className="form-control p-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Discount<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon select-code">
                            <input
                              type="text"
                              defaultValue={0}
                              className="form-control p-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Shipping<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon select-code">
                            <input
                              type="text"
                              defaultValue={0}
                              className="form-control p-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3 mb-5">
                          <label className="form-label">
                            Status<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={status}
                            placeholder="Choose"
                          />
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
        {/* /add popup */}
      </>

    </div>
  );
};

export default AddSalesReturns;
