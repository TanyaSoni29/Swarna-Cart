import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../../core/pagination/datatable";
import CommonFooter from "../../core/common/footer/commonFooter";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import { Period } from "../../core/common/selectOption/selectOption";
import Select from "react-select";
import DefaultEditor from "react-simple-wysiwyg";
import CommonDeleteModal from "../../core/common/modal/commonDeleteModal";
const Warranty = () => {
  const dataSource = useSelector((state) => state.rootReducer.warranty_data);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      width: "10px",
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
      width: "10px",
    },

    {
      title: "Duration",
      dataIndex: "duration",
      sorter: (a, b) => a.duration.length - b.duration.length,
      width: "10px",
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
            <Link
              data-bs-toggle="modal" data-bs-target="#delete-modal" className="p-2"
              to="#"
            >
              <i data-feather="trash-2" className="feather-trash-2"></i>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const [values, setValue] = useState();
  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Warranties</h4>
                <h6>Manage your warranties</h6>
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
                <i className='ti ti-circle-plus me-1'></i> Add Warranty
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

      {/* Add Warranty */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Add Warrranty</h4>
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
                  <form action="warranty.html">
                    <div className="mb-3">
                      <label className="form-label">
                        Warranty<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Duration<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Period<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={Period}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Description<span className="text-danger ms-1">*</span>
                          </label>
                          <DefaultEditor value={values} onChange={onChange} />
                        </div>
                      </div>
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input type="checkbox" id="user2" className="check" />
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
                    Add Warranty
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Warranty */}
      {/* Edit Warranty */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Warrranty</h4>
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
                        Warranty<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Replacement Warranty"
                      />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Duration<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={2}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Period<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={Period}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Description<span className="text-danger ms-1">*</span>
                          </label>
                          <DefaultEditor value={values} onChange={onChange} />
                        </div>
                      </div>
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input type="checkbox" id="user3" className="check" />
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
      {/* /Edit Warranty */}
      <CommonDeleteModal />
    </>

  );
};

export default Warranty;
