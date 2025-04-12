import {
  Edit,
} from "feather-icons-react/build/IconComponents";
import React from "react";
import { Link } from "react-router-dom";
import AddBankAccount from "../../../core/modals/settings/addbankaccount";
import EditBankAccount from "../../../core/modals/settings/editbankaccount";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../../core/common/tooltip-content/collapes";
import CommonFooter from "../../../core/common/footer/commonFooter";

const BankSettingGrid = () => {


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
                    <h4>Bank Account</h4>
                    <div className="page-btn">
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add-account"
                      >
                        <i className="ti ti-circle-plus me-1" />
                        Add New Account
                      </Link>
                    </div>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                        <div className="card bank-box active">
                          <div className="card-body">
                            <div className="mb-4">
                              <h5 className="mb-1">Karur vysya bank</h5>
                              <p>**** **** 1982</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <span className="fs-13">Holder Name</span>
                                <h6>John Smith</h6>
                              </div>
                              <div className="hstack gap-2 fs-15">
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-info-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-account"
                                >
                                  <Edit  className="feather-edit"/>
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-danger-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i data-feather="trash-2" className="feather-trash-2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                        <div className="card bank-box">
                          <div className="card-body">
                            <div className="mb-4">
                              <h5 className="mb-1">Swiss Bank</h5>
                              <p>**** **** 1796</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <span>Holder Name</span>
                                <h6>Andrew</h6>
                              </div>
                              <div className="hstack gap-2 fs-15">
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-info-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-account"
                                >
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-danger-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i data-feather="trash-2" className="feather-trash-2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                        <div className="card bank-box">
                          <div className="card-body">
                            <div className="mb-4">
                              <h5 className="mb-1">HDFC</h5>
                              <p>**** **** 1832</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <span>Holder Name</span>
                                <h6>Mathew</h6>
                              </div>
                              <div className="hstack gap-2 fs-15">
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-info-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-account"
                                >
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-danger-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i data-feather="trash-2" className="feather-trash-2" />
                                </Link>
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
        </div>
        <CommonFooter />
      </div>

      <AddBankAccount />
      <EditBankAccount />
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Bank</h4>
                <p className="text-gray-6 mb-0 fs-16">
                  Are you sure you want to delete bank?
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
                    data-bs-dismiss="modal"
                  >
                    Yes Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BankSettingGrid;
