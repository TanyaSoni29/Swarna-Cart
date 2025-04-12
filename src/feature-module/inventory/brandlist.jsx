import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";
import Table from "../../core/pagination/datatable";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import CommonFooter from "../../core/common/footer/commonFooter";
import { PlusCircle, X } from "feather-icons-react/build/IconComponents";
import CommonDeleteModal from "../../core/common/modal/commonDeleteModal";
const BrandList = () => {
  const dataSource = useSelector((state) => state.rootReducer.brand_list);

  const columns = [
    {
      title: "Brand",
      dataIndex: "brand",
      sorter: (a, b) => a.brand.length - b.brand.length,
    },

    {
      title: "Image",
      dataIndex: "logo",
      render: (text, record) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <ImageWithBasePath alt="" src={record.logo} />
          </Link>
        </span>
      ),
      sorter: (a, b) => a.logo.length - b.logo.length,
      width: "5%",
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
              data-bs-target="#edit-brand"
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
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Brand</h4>
                <h6>Manage your brands</h6>
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
                data-bs-target="#add-brand"
              >
                <i className='ti ti-circle-plus me-1'></i>
                Add Brand
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
              <div className="table-responsive brand-table">
                <Table columns={columns} dataSource={dataSource} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      <>
        {/* Add Brand */}
        <div className="modal fade" id="add-brand">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Add Brand</h4>
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
                  <div className="modal-body custom-modal-body new-employee-field">
                    <form>
                      <div className="profile-pic-upload mb-3">
                        <div className="profile-pic brand-pic">
                          <span>
                            <PlusCircle className="plus-down-add" />  Add Image
                          </span>
                        </div>
                        <div>
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Upload Image</h4>
                            </div>
                          </div>
                          <p className="mt-2">JPEG, PNG up to 2 MB</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Brand<span className="text-danger ms-1">*</span>
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
                      data-bs-dismiss="modal"
                      className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    >
                      Add Brand
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Brand */}
        {/* Edit Brand */}
        <div className="modal fade" id="edit-brand">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Edit Brand</h4>
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
                  <div className="modal-body custom-modal-body new-employee-field">
                    <form>
                      <div className="profile-pic-upload mb-3">
                        <div className="profile-pic brand-pic">
                          <span>
                            <ImageWithBasePath src="assets/img/brand/brand-icon-02.png" alt="Img" />
                          </span>
                          <Link to="#" className="remove-photo">
                            <X className="x-square-add" />
                          </Link>
                        </div>
                        <div>
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Change Image</h4>
                            </div>
                          </div>
                          <p className="mt-2">JPEG, PNG up to 2 MB</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Brand<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user4"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user4" className="checktoggle" />
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
                      data-bs-dismiss="modal"
                      className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    >
                      Save Changes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Brand */}
        <CommonDeleteModal />
      </>

    </div>
  );
};

export default BrandList;
