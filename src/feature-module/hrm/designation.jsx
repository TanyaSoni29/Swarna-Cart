import React from 'react'
import ImageWithBasePath from '../../core/img/imagewithbasebath';
import { Link } from 'react-router-dom';
import AddDesignation from '../../core/modals/hrm/adddesignation';
import EditDesignation from '../../core/modals/hrm/editdesignation';
import TooltipIcons from '../../core/common/tooltip-content/tooltipIcons';
import RefreshIcon from '../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../core/common/tooltip-content/collapes';
import CommonFooter from '../../core/common/footer/commonFooter';

const Designation = () => {


  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Designation</h4>
                <h6>Manage your designation</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-department"
              >
                <i className='ti ti-circle-plus me-1'></i>
                Add Designation
              </Link>
            </div>
          </div>

          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="search-set"></div>
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Department
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Sales
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inventory
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Finance
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Select Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inactive
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Sort By : Last 7 Days
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-body pb-0">
              <div className="table-responsive">
                <table className="table datatable">
                  <thead className="thead-light">
                    <tr>
                      <th className="no-sort">
                        <label className="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span className="checkmarks" />
                        </label>
                      </th>
                      <th>Designation</th>
                      <th>Department</th>
                      <th>Members</th>
                      <th>Total Members</th>
                      <th>Created On</th>
                      <th>Status</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Sales Manager</span>
                      </td>
                      <td>Sales</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                              to="#"
                            >
                              <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="img" />
                              <span className="position-absolute top-50 start-50 translate-middle text-center">
                                +2
                              </span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>07</td>
                      <td>24 Dec 2024</td>
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
                            data-bs-target="#edit-department"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
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
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Inventory Manager</span>
                      </td>
                      <td>Inventory</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                              to="#"
                            >
                              <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="img" />
                              <span className="position-absolute top-50 start-50 translate-middle text-center">
                                +2
                              </span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>10</td>
                      <td>10 Dec 2024</td>
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
                            data-bs-target="#edit-department"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
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
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Accountant</span>
                      </td>
                      <td>Finance</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                              to="#"
                            >
                              <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="img" />
                              <span className="position-absolute top-50 start-50 translate-middle text-center">
                                +2
                              </span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>05</td>
                      <td>27 Nov 2024</td>
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
                            data-bs-target="#edit-department"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
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
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">System Administrator</span>
                      </td>
                      <td>Admin</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                              to="#"
                            >
                              <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="img" />
                              <span className="position-absolute top-50 start-50 translate-middle text-center">
                                +2
                              </span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>10</td>
                      <td>18 Nov 2024</td>
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
                            data-bs-target="#edit-department"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
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
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">HR Manager</span>
                      </td>
                      <td>Human Resources</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                              to="#"
                            >
                              <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="img" />
                              <span className="position-absolute top-50 start-50 translate-middle text-center">
                                +2
                              </span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>06</td>
                      <td>06 Nov 2024</td>
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
                            data-bs-target="#edit-department"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
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
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Marketing Manager</span>
                      </td>
                      <td>Marketing</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                              to="#"
                            >
                              <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="img" />
                              <span className="position-absolute top-50 start-50 translate-middle text-center">
                                +2
                              </span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>12</td>
                      <td>25 Oct 2024</td>
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
                            data-bs-target="#edit-department"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
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
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">QA Analyst</span>
                      </td>
                      <td>Quality Assurance</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                              to="#"
                            >
                              <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="img" />
                              <span className="position-absolute top-50 start-50 translate-middle text-center">
                                +2
                              </span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>08</td>
                      <td>14 Oct 2024</td>
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
                            data-bs-target="#edit-department"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
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
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Research Analyst</span>
                      </td>
                      <td>R&amp;D</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                              to="#"
                            >
                              <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="img" />
                              <span className="position-absolute top-50 start-50 translate-middle text-center">
                                +2
                              </span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>07</td>
                      <td>03 Oct 2024</td>
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
                            data-bs-target="#edit-department"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
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
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Support Engineer</span>
                      </td>
                      <td>IT Support</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                              to="#"
                            >
                              <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="img" />
                              <span className="position-absolute top-50 start-50 translate-middle text-center">
                                +2
                              </span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>10</td>
                      <td>20 Sep 2024</td>
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
                            data-bs-target="#edit-department"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
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
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Content Writer</span>
                      </td>
                      <td>Content Creation</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                              to="#"
                            >
                              <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="img" />
                              <span className="position-absolute top-50 start-50 translate-middle text-center">
                                +2
                              </span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>08</td>
                      <td>10 Sep 2024</td>
                      <td>
                        <span className="badge badge-danger d-inline-flex align-items-center badge-xs">
                          <i className="ti ti-point-filled me-1" />
                          Inactive
                        </span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
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
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      <AddDesignation />
      <EditDesignation />

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
                  Delete Designation
                </h4>
                <p className="text-gray-6 mb-0 fs-16">
                  Are you sure you want to delete designation?
                </p>
                <div className="modal-footer-btn mt-3 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    className="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
                  >
                    Yes Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /delete modal -- */}


    </>


  )
}

export default Designation

