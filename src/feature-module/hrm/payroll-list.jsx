import React from "react";
import { Link } from "react-router-dom";

import { payrollListData } from "../../core/json/payrollList";
import Table from "../../core/pagination/datatable";
import Select from "react-select";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import { Employee } from "../../core/common/selectOption/selectOption";
import CommonFooter from "../../core/common/footer/commonFooter";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { PlusCircle } from "feather-icons-react/build/IconComponents";

const PayrollList = () => {

  // const route = all_routes;

  const datas = payrollListData;

  const columns = [
    {
      title: "Employee",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text, record) => (
        <div className="d-flex align-items-center">
          <Link to={"employee-details.html"} className="avatar avatar-md">
            <ImageWithBasePath src={record.image} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <p className="text-dark mb-0">
              <Link to="employee-details.html">{text}</Link>
            </p>
            <p>
              {record.role}
            </p>
          </div>
        </div>

      ),
    },
    {
      title: "Employee ID",
      dataIndex: "id2",
      sorter: (a, b) => a.id2.localeCompare(b.id2),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Salary",
      dataIndex: "salary",
      sorter: (a, b) => a.salary.length - b.salary.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
      render: (status) => (
        <span className={`badge  ${status === 'Paid' ? 'badge-success' : 'badge-danger'} d-inline-flex align-items-center badge-xs`}>
          <i className="ti ti-point-filled me-1" />
          {status}
        </span>

      ),
    },
    {
      title: "Action",
      render: () => (
        <div className="edit-delete-action">
          <Link className="p-2 me-2" to="#">
            <i data-feather="eye" className="feather-eye" />
          </Link>
          <Link className="p-2 me-2" to="#">
            <i data-feather="download" className="feather-download" />
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#edit-department"
            className="p-2 me-2"
            to="#"
          >
            <i data-feather="edit" className="feather-edit" />
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="p-2"
            to="#"
          >
            <i data-feather="trash-2" className="feather-trash-2" />
          </Link>
        </div>

      ),
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Employee Salary</h4>
                <h6>Manage your employee salaries</h6>
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
               <PlusCircle  className="me-2"/>
                Add Payroll
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
                        Paid
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Unpaid
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <Table columns={columns} dataSource={datas} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      <>
        {/* Add Department */}
        <div className="modal fade" id="add-department">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Payroll</h4>
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
              <form action="employee-salary.html">
                <div className="modal-body">
                  <div className="row">
                    <div className="col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Select Employee <span>*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={Employee}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="text-title">
                      <h5 className="mb-2">Salary Information</h5>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Basic Salary <span>*</span>
                      </label>
                      <input type="text" className="text-form form-control" />
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="fw-semibold text-gray-9 mb-2">Status</p>
                      <div className="d-flex align-items-center">
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Radio"
                            id="Radio-sm1"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="Radio-sm1">
                            Paid
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Radio"
                            id="Radio-sm2"
                          />
                          <label className="form-check-label" htmlFor="Radio-sm2">
                            Unpaid
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Allowances</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          HRA Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Conveyance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Medical Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Bonus <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="d-flex align-items-end border-bottom mb-3">
                      <div className="mb-3 flex-grow-1">
                        <label className="form-label">Others</label>
                        <input type="text" className="text-form form-control" />
                      </div>
                      <div className="subadd-btn mb-3 ms-3">
                        <Link to="#" className="btn btn-icon btn-secondary btn-add">
                          <i className="ti ti-circle-plus fs-16" />
                        </Link>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Deductions</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          PF <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Professional Tax <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          TDS <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Loans &amp; Others <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="d-flex align-items-end border-bottom mb-3">
                      <div className="mb-3 flex-grow-1">
                        <label className="form-label">Others</label>
                        <input type="text" className="text-form form-control" />
                      </div>
                      <div className="subadd-btn mb-3 ms-3">
                        <Link to="#" className="btn btn-icon btn-secondary btn-add">
                          <i className="ti ti-circle-plus fs-16" />
                        </Link>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Deductions</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Total Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Total Deduction <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Net Salary <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-flex align-items-center justify-content-end">
                        <button type="button" className="btn btn-previw me-2">
                          Preview
                        </button>
                        <button type="button" className="btn btn-reset me-2">
                          Reset
                        </button>
                        <Link to="#" className="btn btn-save" data-bs-dismiss='modal'>
                          Save
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Department */}
        {/* Edit Department */}
        <div className="modal fade" id="edit-department">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Edit Payroll</h4>
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
                  <div className="row">
                    <div className="col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Select Employee <span>*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={Employee}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="text-title">
                      <h5 className="mb-2">Salary Information</h5>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Basic Salary <span>*</span>
                      </label>
                      <input type="text" className="text-form form-control" />
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="fw-semibold text-gray-9 mb-2">Status</p>
                      <div className="d-flex align-items-center">
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Radio"
                            id="Radio-sm3"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="Radio-sm3">
                            Paid
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Radio"
                            id="Radio-sm4"
                          />
                          <label className="form-check-label" htmlFor="Radio-sm4">
                            Unpaid
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Allowances</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          HRA Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Conveyance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Medical Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Bonus <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="d-flex align-items-end border-bottom mb-3">
                      <div className="mb-3 flex-grow-1">
                        <label className="form-label">Others</label>
                        <input type="text" className="text-form form-control" />
                      </div>
                      <div className="subadd-btn mb-3 ms-3">
                        <Link to="#" className="btn btn-icon btn-secondary btn-add">
                          <i className="ti ti-circle-plus fs-16" />
                        </Link>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Deductions</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          PF <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Professional Tax <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          TDS <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Loans &amp; Others <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="d-flex align-items-end border-bottom mb-3">
                      <div className="mb-3 flex-grow-1">
                        <label className="form-label">Others</label>
                        <input type="text" className="text-form form-control" />
                      </div>
                      <div className="subadd-btn mb-3 ms-3">
                        <Link to="#" className="btn btn-icon btn-secondary btn-add">
                          <i className="ti ti-circle-plus fs-16" />
                        </Link>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Deductions</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Total Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Total Deduction <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Net Salary <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-flex align-items-center justify-content-end">
                        <button type="button" className="btn btn-previw me-2">
                          Preview
                        </button>
                        <button type="button" className="btn btn-reset me-2">
                          Reset
                        </button>
                        <Link to="#" className="btn btn-save" data-bs-dismiss="modal">
                          Save
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Department */}
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
                    Delete Employee Salary
                  </h4>
                  <p className="text-gray-6 mb-0 fs-16">
                    Are you sure you want to delete employee salary?
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
                      className="btn btn-submit fs-13 fw-medium p-2 px-3"
                    >
                      Yes Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /delete modal */}
      </>

    </>
  );
};

export default PayrollList;
