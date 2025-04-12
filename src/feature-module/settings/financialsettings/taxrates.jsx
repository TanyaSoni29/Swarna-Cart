
import React from "react";
import { Link } from "react-router-dom";
import AddTaxRates from "../../../core/modals/settings/addtaxrates";
import EditTaxRates from "../../../core/modals/settings/edittaxrates";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../../core/common/tooltip-content/collapes";
import CommonFooter from "../../../core/common/footer/commonFooter";
const TaxRates = () => {

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
                    <h4>Tax Rates</h4>
                    <Link
                      to="#"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#add-tax"
                    >
                      <i className="ti ti-circle-plus me-1" />
                      Add New Tax Rate
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table border">
                        <thead className="thead-light">
                          <tr>
                            <th>Tax Name</th>
                            <th>Tax rates</th>
                            <th>Created On</th>
                            <th className="no-sort" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>VAT</td>
                            <td>10%</td>
                            <td>12 Jan 2025</td>
                            <td className="action-table-data justify-content-end">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-tax"
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
                            <td>CGST</td>
                            <td>08%</td>
                            <td>10 Jan 2025</td>
                            <td className="action-table-data justify-content-end">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-tax"
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
                            <td>SGST</td>
                            <td>10%</td>
                            <td>06 Jan 2025</td>
                            <td className="action-table-data justify-content-end">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-tax"
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
        <CommonFooter />
      </div>

      <AddTaxRates />
      <EditTaxRates />
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
                    Delete Tax Rate
                  </h4>
                  <p className="text-gray-6 mb-0 fs-16">
                    Are you sure you want to delete tax rate?
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
                      className="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
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

export default TaxRates;
