import React from "react";
import { Link } from "react-router-dom";

import { expensecategory } from "../../core/json/expensecategory";
import Table from "../../core/pagination/datatable";
import TextEditor from "../inventory/texteditor";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import { PlusCircle } from "feather-icons-react/build/IconComponents";

const ExpenseCategory = () => {

  const data = expensecategory;
  const columns = [
    {
      title: "CategoryName",
      dataIndex: "categoryName",
      sorter: (a, b) => a.categoryName.length - b.categoryName.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: () => (
        <span className={`badge  badge-success d-inline-flex align-items-center badge-xs`}>
          <i className="ti ti-point-filled me-1" />
          Active
        </span>

      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link
              className="me-2 p-2 mb-0"
              data-bs-toggle="modal"
              data-bs-target="#edit-units"
            >
              <i data-feather="edit" className="feather-edit"></i>
            </Link>
            <Link
              className="me-0 confirm-text p-2 mb-0"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              to="#"
            >
              <i data-feather="trash-2" className="feather-trash-2"></i>
            </Link>
          </div>
        </div>
      ),
    },
  ];



  return (
    <>
      <div>
        <div className="page-wrapper">
          <div className="content">
            <div className="page-header">
              <div className="add-item d-flex">
                <div className="page-title">
                  <h4>Expense Category</h4>
                  <h6>Manage your expense categories</h6>
                </div>
              </div>
              <ul className="table-top-head">

                <TooltipIcons />
                <RefreshIcon />
                <CollapesIcon />
              </ul>
              <div className="page-btn">
                <Link to="#" data-bs-toggle="modal" data-bs-target="#add-units" className="btn btn-primary">
                  <PlusCircle data-feather="plus-circle" className=" me-2" />
                  Add Expense Category
                </Link>
              </div>
            </div>
            {/* /product list */}
            <div className="card table-list-card">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div className="search-set">

                </div>
                <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">

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
                  <Table columns={columns} dataSource={data} />
                </div>
              </div>
            </div>

            {/* /product list */}

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
          <>
            {/* Add Store */}
            <div className="modal fade" id="add-store">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Add Store</h4>
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
                  <form >
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">
                          Store Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          User Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="input-blocks mb-3">
                        <label className="form-label">
                          Password <span className="text-danger">*</span>
                        </label>
                        <div className="pass-group">
                          <input type="password" className=" pass-input" />
                          <span className="fas toggle-password fa-eye-slash" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Phone <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label ">Status</span>
                          <input
                            type="checkbox"
                            id="user2"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user2" className="checktoggle" />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        className="btn btn-primary fs-13 fw-medium p-2 px-3"
                      >
                        Add Store
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /Add Store */}
            {/* Edit Store */}
            <div className="modal fade" id="edit-store">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Edit Store</h4>
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
                  <form >
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">
                          Store Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Electro Mart"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          User Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="johnsmith"
                        />
                      </div>
                      <div className="input-blocks mb-3">
                        <label className="form-label">
                          Password <span className="text-danger">*</span>
                        </label>
                        <div className="pass-group">
                          <input
                            type="password"
                            className=" pass-input"
                            defaultValue="********"
                          />
                          <span className="fas toggle-password fa-eye-slash" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          defaultValue="electromart@example.com"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Phone <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={+12498345785}
                        />
                      </div>
                      <div className="mb-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label ">Status</span>
                          <input
                            type="checkbox"
                            id="user1"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user1" className="checktoggle" />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        className="btn btn-primary fs-13 fw-medium p-2 px-3"
                      >
                        save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /Edit Store */}
          </>



        </div>
        <>
          <div className="modal fade" id="add-units">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="page-wrapper-new p-0">
                  <div className="content">
                    <div className="modal-header">
                      <div className="page-title">
                        <h4>Add Expense Category</h4>
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
                    <div className="modal-body">
                      <form >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Category<span className="text-danger ms-1">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="mb-3 summer-description-box">
                              <label className="form-label">Description</label>
                              <TextEditor />
                              <p className="mt-1">Maximum 60 Words</p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <span className="status-label">Status</span>
                              <input
                                type="checkbox"
                                id="user1"
                                className="check"
                                defaultChecked
                              />
                              <label htmlFor="user1" className="checktoggle">
                                {" "}
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        className="btn btn-primary fs-13 fw-medium p-2 px-3"
                      >
                        Add Expense Category
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="edit-units">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="page-wrapper-new p-0">
                  <div className="content">
                    <div className="modal-header">
                      <div className="page-title">
                        <h4>Edit Expense Category</h4>
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
                    <div className="modal-body">
                      <form >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Category<span className="text-danger ms-1">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Utilities"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="mb-3 summer-description-box">
                              <label className="form-label">Description</label>
                              <TextEditor />
                              <p className="mt-1">Maximum 60 Words</p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <span className="status-label">Status</span>
                              <input
                                type="checkbox"
                                id="user2"
                                className="check"
                                defaultChecked
                              />
                              <label htmlFor="user2" className="checktoggle">
                                {" "}
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        className="btn btn-primary fs-13 fw-medium p-2 px-3"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        <div className="modal fade" id="delete-modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content p-5 px-3 text-center">
                  <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                    <i className="ti ti-trash fs-24 text-danger" />
                  </span>
                  <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
                    Delete Expense Category
                  </h4>
                  <p className="text-gray-6 mb-0 fs-16">
                    Are you sure you want to delete employee?
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
                      data-bs-dismiss="modal"
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
      </div>
    </>
  );
};

export default ExpenseCategory;
