import React from "react";
import { Link } from "react-router-dom";
import Table from "../../pagination/datatable";
import CommonFooter from "../../common/footer/commonFooter";
import TooltipIcons from "../../common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../common/tooltip-content/refresh";
import CollapesIcon from "../../common/tooltip-content/collapes";
import Select from "react-select";
import { warehousedata } from "../../json/warehouse";
import ImageWithBasePath from "../../img/imagewithbasebath";

const WareHouses = () => {
  const dataSource = warehousedata;
  const options1 = [
    { value: "choose", label: "Choose" },
    { value: "steven", label: "Steven" },
    { value: "gravely", label: "Gravely" },
  ];

  const options2 = [
    { value: "choose", label: "Choose" },
    { value: "uk", label: "United Kingdom" },
    { value: "us", label: "United States" },
  ];
  const columns = [
    {
      title: "Warehouse",
      dataIndex: "warehouse",
      sorter: (a, b) => a.warehouse.length - b.warehouse.length,
    },
    {
      title: "Contact Person",
      dataIndex: "contactPerson",
      render: (text,data) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <ImageWithBasePath
              src={`assets/img/warehouse/${data.img}`}
              className="img-fluid rounded-2"
              alt="img"
            />
          </Link>
          <div className="ms-2">
            <p className="mb-0">
              <Link to="#" className="text-default">
                {text}
              </Link>
            </p>
          </div>
        </div>

      ),
      sorter: (a, b) => a.contactPerson.length - b.contactPerson.length,
    },

    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.length - b.phone.length,
    },

    {
      title: "TotalProducts",
      dataIndex: "totalProducts",
      sorter: (a, b) => a.totalProducts.length - b.totalProducts.length,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      sorter: (a, b) => a.stock.length - b.stock.length,
    },
    {
      title: "Qty",
      dataIndex: "qty",
      sorter: (a, b) => a.qty.length - b.qty.length,
    },
    {
      title: "CreatedOn",
      dataIndex: "createdOn",
      sorter: (a, b) => a.createdOn.length - b.createdOn.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
      render: (text) => (
        <span
          className={`badge  d-inline-flex align-items-center badge-xs ${
            text === "Active" ? "badge-success" : "badge-danger"
          }`}
        >
          <i className="ti ti-point-filled me-1"></i>{text}
        </span>
      ),
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link
              className="me-2 edit-icon p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-units"
            >
              <i data-feather="eye" className="feather-eye"></i>
            </Link>
            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-units"
            >
              <i data-feather="edit" className="feather-edit"></i>
            </Link>
            <Link
              className="confirm-text p-2"
              to="#"
              data-bs-toggle="modal"
               data-bs-target="#delete-modal"
            >
              <i data-feather="trash-2" className="feather-trash-2"></i>
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
                <h4>Warehouses</h4>
                <h6>Manage Your warehouses</h6>
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
              <i className='ti ti-circle-plus me-1'></i>
                Warehouses
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
                     Status
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
      <div>
        {/* Add Warehouse */}
        <div className="modal fade" id="add-units">
          <div className="modal-dialog modal-dialog-centered custom-modal-two">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content p-0">
                  <div className="modal-header border-0 custom-modal-header">
                    <div className="page-title">
                      <h4>Add Warehouse</h4>
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
                  <div className="modal-body custom-modal-body">
                    <form>
                      <div className="modal-title-head">
                        <h6>
                          <span>
                            <i
                              data-feather="info"
                              className="feather-info me-2"
                            />
                          </span>
                          Warehouse Info
                        </h6>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-blocks">
                            <label>Contact Person</label>
                            <Select
                              classNamePrefix="react-select"
                              options={options1}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3 war-add">
                            <label className="mb-2">Phone Number</label>
                            <input
                              className="form-control"
                              id="phone"
                              name="phone"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Work Phone</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" />
                          </div>
                        </div>
                        <div className="modal-title-head">
                          <h6>
                            <span>
                              <i data-feather="map-pin" />
                            </span>
                            Location
                          </h6>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Address 1</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Address 2</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-blocks">
                            <label>Country</label>
                            <Select
                              classNamePrefix="react-select"
                              options={options2}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">State</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3 mb-0">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3 mb-0">
                            <label className="form-label">Zipcode</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer-btn">
                        <button
                          type="button"
                          className="btn btn-cancel me-2"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-submit">
                          Create Warehouse
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Warehouse */}
        {/* Edit Warehouse */}
        <div className="modal fade" id="edit-units">
          <div className="modal-dialog modal-dialog-centered custom-modal-two">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content p-0">
                  <div className="modal-header border-0 custom-modal-header">
                    <div className="page-title">
                      <h4>Edit Warehouse</h4>
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
                  <div className="modal-body custom-modal-body">
                    <form>
                      <div className="modal-title-head">
                        <h6>
                          <span>
                            <i
                              data-feather="info"
                              className="feather-info me-2"
                            />
                          </span>
                          Warehouse Info
                        </h6>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Legendary"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-blocks">
                            <label>Contact Person</label>
                            <Select
                              classNamePrefix="react-select"
                              options={options1}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3 war-edit-phone">
                            <label className="mb-2">Phone Number</label>
                            <input
                              className="form-control"
                              id="phone2"
                              name="phone"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3 war-edit-phone">
                            <label className="form-label">Work Phone</label>
                            <input
                              className="form-control"
                              id="phone3"
                              name="phone"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              defaultValue="stevenlegendary@example.com"
                            />
                          </div>
                        </div>
                        <div className="modal-title-head">
                          <h6>
                            <span>
                              <i data-feather="map-pin" />
                            </span>
                            Location
                          </h6>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Address 1</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Admiral Street"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-blocks">
                            <label className="form-label">Address 2</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Aire Street"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-blocks">
                            <label>Country</label>
                            <Select
                              classNamePrefix="react-select"
                              options={options2}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">State</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="East England"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3 mb-0">
                            <label className="form-label">City</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Leeds"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3 mb-0">
                            <label className="form-label">Zipcode</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="LS1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer-btn">
                        <button
                          type="button"
                          className="btn btn-cancel me-2"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-submit">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
                  Delete Product
                </h4>
                <p className="text-gray-6 mb-0 fs-16">
                  Are you sure you want to delete product?
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
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
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

export default WareHouses;
