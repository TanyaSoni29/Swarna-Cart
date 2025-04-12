import { DatePicker } from "antd";
import React, { useState } from "react";
import { PlusCircle } from "react-feather";
import { Link } from "react-router-dom";
import Select from "react-select";
import ImageWithBasePath from "../../img/imagewithbasebath";
import { Calendar } from "feather-icons-react/build/IconComponents";
import TextEditor from "../../../feature-module/inventory/texteditor";

const AddPurchaseReturn = () => {
  const suppliers = [
    { value: "choose", label: "Choose" },
    { value: "apexComputers", label: "Apex Computers" },
    { value: "modernAutomobile", label: "Modern Automobile" },
    { value: "aimInfotech", label: "AIM Infotech" },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const status = [
    { value: "choose", label: "Choose" },
    { value: "pending", label: "Pending" },
    { value: "received", label: "Received" },
  ];
  return (
    <div>
      {/*add popup */}
      <div className="modal fade" id="add-sales-new">
        <div className="modal-dialog add-centered">
          <div className="modal-content">
            <div className="page-wrapper p-0 m-0">
              <div className="content p-0">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4> Add Purchase Return</h4>
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
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="input-blocks">
                            <label className="form-label">Supplier</label>
                            <div className="row">
                              <div className="col-lg-10 col-sm-10 col-10">
                                <Select
                                  classNamePrefix="react-select"
                                  options={suppliers}
                                />
                              </div>
                              <div className="col-lg-2 col-sm-2 col-2 ps-0">
                                <div className="add-icon">
                                  <Link to="#" className="choose-add">
                                    <PlusCircle className="plus" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="input-blocks">
                            <label>Date</label>
                            <div className="input-groupicon calender-input">
                              <Calendar className="info-img" />
                              <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                type="date"
                                className="filterdatepicker"
                                dateFormat="dd-MM-yyyy"
                                placeholder="Choose Date"
                              />
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
                                placeholder="Search Product"
                                className="form-control p-2"
                              />
                              <div className="addonset">
                                <ImageWithBasePath src="assets/img/icons/qrcode-scan.svg" alt="img" />
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>
                      <div className="table-responsive no-pagination">
                        <table className="table  datanew">
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Date</th>
                              <th>Supplier</th>
                              <th>Reference</th>
                              <th>Status</th>
                              <th>Grand Total ($)</th>
                              <th>Paid ($)</th>
                              <th>Due ($)</th>
                              <th>Payment Status</th>
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
                              <td />
                              <td />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <>
                        <div className="modal-body-table mt-3">
                          <div className="table-responsive no-pagination">
                            <table className="table datanew bg-light-9 p-3">
                              <thead>
                                <tr>
                                  <th className="bg-secondary-transparent p-3">Image</th>
                                  <th>Date</th>
                                  <th>Supplier</th>
                                  <th>Reference</th>
                                  <th>Status</th>
                                  <th>Total ($)</th>
                                  <th>Paid ($)</th>
                                  <th>Due ($)</th>
                                  <th>Payment Status</th>
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Order Tax<span className="text-danger ms-1">*</span>
                              </label>
                              <div className="input-groupicon select-code">
                                <input type="text" defaultValue={0} className="form-control p-2" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Discount<span className="text-danger ms-1">*</span>
                              </label>
                              <div className="input-groupicon select-code">
                                <input type="text" defaultValue={0} className="form-control p-2" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Shipping<span className="text-danger ms-1">*</span>
                              </label>
                              <div className="input-groupicon select-code">
                                <input type="text" defaultValue={0} className="form-control p-2" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="mb-3">
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
                          <div className="col-lg-12">
                            <div className="mb-3 summer-description-box">
                              <label className="form-label">Description</label>
                              <div id="summernote"> <TextEditor/></div>
                              <p className="mt-1">Maximum 60 Words</p>
                            </div>
                          </div>
                        </div>
                      </>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /add popup */}
    </div>
  );
};

export default AddPurchaseReturn;
