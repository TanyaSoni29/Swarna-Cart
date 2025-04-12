import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../../core/pagination/datatable";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import CommonFooter from "../../core/common/footer/commonFooter";
import CommonDeleteModal from "../../core/common/modal/commonDeleteModal";

export const Units = () => {
  const dataSource = useSelector((state) => state.rootReducer.unit_data);


  const columns = [
    {
      title: "Unit",
      dataIndex: "unit",
      sorter: (a, b) => a.unit.length - b.unit.length,
    },
    {
      title: "Short Name",
      dataIndex: "shortname",
      sorter: (a, b) => a.shortname.length - b.shortname.length,
    },

    {
      title: "No of Products",
      dataIndex: "noofproducts",
      sorter: (a, b) => a.noofproducts.length - b.noofproducts.length,
    },
    {
      title: "Created Date",
      dataIndex: "createdon",
      sorter: (a, b) => a.createdon.length - b.createdon.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <span className="badge table-badge bg-success fw-medium fs-10">
          {text}
        </span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },

    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-units"
            >
              <i data-feather="edit" className="feather-edit"></i>
            </Link>
            <Link data-bs-toggle="modal" data-bs-target="#delete-modal" className="p-2" to="#">
              <i
                data-feather="trash-2"
                className="feather-trash-2"
              ></i>
            </Link>
          </div>
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
                <h4 className="fw-bold">Units</h4>
                <h6>Manage your units</h6>
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
                data-bs-target="#add-units"
              >
               <i className='ti ti-circle-plus me-1'></i> Add Unit
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
                    Status
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
                        Shoe
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Electronics
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
            <div className="card-body">
              <div className="table-responsive">
                <Table columns={columns} dataSource={dataSource} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>

      {/* Add Unit */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Add Unit</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">
                        Unit<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Short Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input
                          type="checkbox"
                          id="user2"
                          className="check"
                          defaultChecked
                        />
                        <label htmlFor="user2" className="checktoggle" />
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
                  <Link
                    to="#"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    data-bs-dismiss="modal"
                  >
                    Add Unit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Unit */}
      {/* Edit Unit */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Unit</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">
                        Unit<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Kilograms"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Short Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="kg"
                      />
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input
                          type="checkbox"
                          id="user3"
                          className="check"
                          defaultChecked
                        />
                        <label htmlFor="user3" className="checktoggle" />
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
                  <Link
                    to="#"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    data-bs-dismiss="modal"
                  >
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Unit */}
      <CommonDeleteModal />
    </>
  );
};
