
import React from "react";
import { Link } from "react-router-dom";
import EditCustomFields from "../../../core/modals/settings/editcustomfields";
import SettingsSideBar from "../settingssidebar";
import CollapesIcon from "../../../core/common/tooltip-content/collapes";
import AddCustomFields from "../../../core/modals/settings/addcustomfields";
import RefreshIcon from "../../../core/common/tooltip-content/refresh";

const CustomFields = () => {

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
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h4>Custom Fields</h4>
                    <div className="page-btn">
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add-custom-field"
                      >
                        <i className="ti ti-circle-plus me-1" />
                        Add New Field
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table border">
                        <thead className="thead-light">
                          <tr>
                            <th>Module</th>
                            <th>Label</th>
                            <th>Type</th>
                            <th>Default Value</th>
                            <th>Required/Disable</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h6>Product</h6>
                            </td>
                            <td>Weight</td>
                            <td>Number</td>
                            <td>0</td>
                            <td>Required</td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i data-feather="trash-2" className="feather-trash-2" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>Customer</h6>
                            </td>
                            <td>Type</td>
                            <td>Select</td>
                            <td>Regular</td>
                            <td>Required</td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i data-feather="trash-2" className="feather-trash-2" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>Supplier</h6>
                            </td>
                            <td>Type</td>
                            <td>Select</td>
                            <td>-</td>
                            <td>Required</td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i data-feather="trash-2" className="feather-trash-2" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>Biller</h6>
                            </td>
                            <td>Type</td>
                            <td>Select</td>
                            <td>Utility</td>
                            <td>Required</td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i data-feather="trash-2" className="feather-trash-2" />
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
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2025 © Swarna. All Right Reserved</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Backend Coders
            </Link>
          </p>
        </div>
      </div>

      <AddCustomFields />
      <EditCustomFields />

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
                  Delete Custom Field
                </h4>
                <p className="text-gray-6 mb-0 fs-16">
                  Are you sure you want to delete custom field?
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


    </div>
  );
};

export default CustomFields;
