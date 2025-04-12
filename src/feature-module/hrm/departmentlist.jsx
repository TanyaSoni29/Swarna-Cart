import React from "react";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { Link } from "react-router-dom/dist";
import {
  Grid,
  List,
} from "feather-icons-react/build/IconComponents";
import { all_routes } from "../../Router/all_routes";
import { useSelector } from "react-redux";
import Table from "../../core/pagination/datatable";
import AddDepartmentList from "../../core/modals/hrm/adddepartmentlist";
import EditDepartmentList from "../../core/modals/hrm/editdepartmentlist";
import CommonFooter from "../../core/common/footer/commonFooter";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";

const DepartmentList = () => {
  const route = all_routes;
  const dataSource = useSelector((state) => state.rootReducer.departmentlist_data);


  const columns = [
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "HOD",
      dataIndex: "hod",
      sorter: (a, b) => a.hod.length - b.hod.length,
    },
    {
      title: "HOD",
      dataIndex: "hod",
      render: (text, record) => (
        <span className="userimgname">
          <Link to="/profile" className="avatar avatar-md">
            <ImageWithBasePath
              alt=""
              src={record.img}
              className="product-img"
            />
          </Link>
          <Link to="/profile">{text}</Link>
        </span>
      ),
      sorter: (a, b) => a.hod.length - b.hod.length,
    },
    {
      title: "Members",
      dataIndex: "members",
      render: () => (
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

      ),
      sorter: (a, b) => a.members.length - b.members.length,
    },
    {
      title: "Total Members",
      dataIndex: "totalmembers",
      sorter: (a, b) => a.totalmembers.length - b.totalmembers.length,
    },

    {
      title: "Creaded On",
      dataIndex: "creadedon",
      sorter: (a, b) => a.creadedon.length - b.creadedon.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <span
          className={`badge d-inline-flex align-items-center badge-xs ${text === "Active" ? "badge-success" : "badge-danger"
            }`}
        >
          <i className="ti ti-point-filled me-1"></i>{text}
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
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-department"
            >
              <i data-feather="edit" className="feather-edit"></i>
            </Link>
            <Link
              className="confirm-text p-2"
              to="#" data-bs-toggle="modal" data-bs-target="#delete-modal"
            >
              <i
                data-feather="trash-2"
                className="feather-trash-2"
              // onClick={confirmText}
              ></i>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Departments</h4>
                <h6>Manage your departments</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <li>
                <div className="d-flex me-2 pe-2 border-end">
                  <Link
                    to={route.departmentlist}
                    className="btn-list active bg-primary me-2"
                  >
                    <List className="feather-user text-white" />
                  </Link>
                  <Link to={route.departmentgrid} className="btn-grid me-2">
                    <Grid className="feather-user" />
                  </Link>
                </div>
              </li>
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
                Add Department
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
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Inactive
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        New Joiners
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
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body pb-0">
              <div className="table-responsive">
                <Table columns={columns} dataSource={dataSource} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      <AddDepartmentList />
      <EditDepartmentList />
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
                    Delete Department
                  </h4>
                  <p className="text-gray-6 mb-0 fs-16">
                    Are you sure you want to delete department?
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

export default DepartmentList;
