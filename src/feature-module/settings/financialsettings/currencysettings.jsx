import {
  Edit,
  PlusCircle,
  Trash2,
} from "feather-icons-react/build/IconComponents";
import React from "react";
import { Link } from "react-router-dom";
import AddCurrency from "../../../core/modals/settings/addcurrency";
import EditCurrency from "../../../core/modals/editcurrency";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../../core/common/tooltip-content/collapes";
import CommonFooter from "../../../core/common/footer/commonFooter";

const CurrencySettings = () => {


  return (
    <div>
      <div className="page-wrapper">
        <div className="content settings-content">
          <div className="page-header settings-pg-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Settings</h4>
                <h6>Manage your settings on portal</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="settings-wrapper d-flex">
                <SettingsSideBar />
                <div className="card flex-fill mb-0 w-50">
                  <div className="card-header">
                    <h4>Currency</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card table-list-card">
                          <div className="card-body">
                            <div className="table-top">
                              <div className="search-set">
                                <div className="search-input">
                                  <span className="btn-searchset">
                                    <i className="ti ti-search fs-14 feather-search" />
                                  </span>
                                </div>
                              </div>
                              <Link
                                to="#"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#add-currency"
                              >
                                <PlusCircle className="me-1" />
                                Add New Currency
                              </Link>
                            </div>
                            <div className="table-responsive no-pagination">
                              <table className="table datatable">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Currency Name</th>
                                    <th>Code </th>
                                    <th>Symbol</th>
                                    <th>Exchange Rate</th>
                                    <th>Created On</th>
                                    <th className="no-sort text-end">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Euro</td>
                                    <td>EUR</td>
                                    <td>€</td>
                                    <td>Default</td>
                                    <td>12 Jul 2025</td>
                                    <td className="action-table-data justify-content-end">
                                      <div className="edit-delete-action">
                                        <Link
                                          className="me-2 p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-currency"
                                        >
                                          <i
                                            data-feather="edit"
                                            className="feather-edit"
                                          />
                                        </Link>
                                        <Link className="p-2" to="#" data-bs-toggle="modal" data-bs-target="#delete-modal">
                                          <i
                                            data-feather="trash-2"
                                            className="feather-trash-2"
                                          />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>England Pound</td>
                                    <td>GBP</td>
                                    <td>£</td>
                                    <td>Default</td>
                                    <td>14 Jul 2025</td>
                                    <td className="action-table-data justify-content-end">
                                      <div className="edit-delete-action">
                                        <Link
                                          className="me-2 p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-currency"
                                        >
                                          <Edit className="feather-edit" />
                                        </Link>
                                        <Link
                                          className="p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                        >
                                          <Trash2 className="feather-trash-2" />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>India Rupee</td>
                                    <td>INR</td>
                                    <td>₹</td>
                                    <td>76.154</td>
                                    <td>14 Mar 2025</td>
                                    <td className="action-table-data justify-content-end">
                                      <div className="edit-delete-action">
                                        <Link
                                          className="me-2 p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-currency"
                                        >
                                          <Edit className="feather-edit" />
                                        </Link>
                                        <Link
                                          className="p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                        >
                                          <Trash2 className="feather-trash-2" />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>US Dollar</td>
                                    <td>USD</td>
                                    <td>$</td>
                                    <td>Default</td>
                                    <td>10 Jan 2025</td>
                                    <td className="action-table-data justify-content-end">
                                      <div className="edit-delete-action">
                                        <Link
                                          className="me-2 p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-currency"
                                        >
                                          <Edit className="feather-edit" />
                                        </Link>
                                        <Link
                                          className="p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                        >
                                          <Trash2 className="feather-trash-2" />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      <AddCurrency />
      <EditCurrency />

      <>
        {/* delete modal */}
        <div className="modal fade" id="delete-modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content p-5 px-3 text-center">
                  <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                    <i className="ti ti-trash fs-24 text-danger" />
                  </span>
                  <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
                    Delete Currency
                  </h4>
                  <p className="text-gray-6 mb-0 fs-16">
                    Are you sure you want to delete currency?
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
                      type="button"
                      className="btn btn-submit fs-13 fw-medium p-2 px-3"
                    >
                      Yes Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /delete modal */}
      </>

    </div>
  );
};

export default CurrencySettings;
