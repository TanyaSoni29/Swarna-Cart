import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { useSelector } from "react-redux";
import EditLowStock from "../../core/modals/inventory/editlowstock";
import Table from "../../core/pagination/datatable";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import CommonFooter from "../../core/common/footer/commonFooter";
import CommonDeleteModal from "../../core/common/modal/commonDeleteModal";

const LowStock = () => {

  const dataSource = useSelector((state) => state.rootReducer.lowstock_data);

  const columns = [
    {
      title: "Warehouse",
      dataIndex: "warehouse",

      sorter: (a, b) => a.warehouse.length - b.warehouse.length,
      width: "5%",
    },
    {
      title: "Store",
      dataIndex: "store",
      sorter: (a, b) => a.store.length - b.store.length,
    },
    {
      title: "Product",
      dataIndex: "product",
      render: (text, record) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <ImageWithBasePath alt="" src={record.img} />
          </Link>
          {text}
        </span>
      ),
      sorter: (a, b) => a.product.length - b.product.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "SkU",
      dataIndex: "sku",
      sorter: (a, b) => a.sku.length - b.sku.length,
    },
    {
      title: "Qty",
      dataIndex: "qty",
      sorter: (a, b) => a.qty.length - b.qty.length,
    },
    {
      title: "Qty Alert",
      dataIndex: "qtyalert",
      sorter: (a, b) => a.qtyalert.length - b.qtyalert.length,
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
              data-bs-target="#edit-stock"
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
            <div className="page-title me-auto">
              <h4 className="fw-bold">Low Stocks</h4>
              <h6>Manage your low stocks</h6>
            </div>
            <ul className="table-top-head low-stock-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
              <li>
                <Link
                  to="#"
                  className="btn btn-secondary w-auto shadow-none"
                  data-bs-toggle="modal"
                  data-bs-target="#send-email"
                >
                  <i data-feather="mail" className="feather-mail me-1" />
                  Send Email
                </Link>
              </li>
            </ul>
          </div>
          <div className="table-tab">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
              <ul
                className="nav nav-pills low-stock-tab d-flex me-2 mb-0"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Low Stocks
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Out of Stocks
                  </button>
                </li>
              </ul>
              <div className="notify d-flex bg-white p-1 px-2 border rounded">
                <div className="status-toggle text-secondary d-flex justify-content-between align-items-center">
                  <input
                    type="checkbox"
                    id="user2"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="user2" className="checktoggle me-2">
                    checkbox
                  </label>
                  Notify
                </div>
              </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
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
                          Warehouse
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Lenovo IdeaPad 3
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Beats Pro{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Nike Jordan
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Apple Series 5 Watch
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
                          Store
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              James Kirwin
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Francis Chang
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Antonio Engle
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Leo Kelly
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
                          Category
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Computers
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
                      <div className="dropdown me-2">
                        <Link
                          to="#"
                          className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          Product
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Lenovo
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Beats
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Nike
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Apple
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
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
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
                          Warehouse
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Lenovo IdeaPad 3
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Beats Pro{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Nike Jordan
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Apple Series 5 Watch
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
                          Store
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              James Kirwin
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Francis Chang
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Antonio Engle
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Leo Kelly
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
                          Category
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Computers
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
                      <div className="dropdown me-2">
                        <Link
                          to="#"
                          className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          Product
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Lenovo
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Beats
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Nike
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Apple
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
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
    
        {/* Send Mail */}
        <div className="modal fade" id="send-email">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="success-email-send modal-body .custom-modal-body text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-success-transparent mb-2">
                  <i className="ti ti-checks fs-24 text-success" />
                </span>
                <h4 className="fs-20 fw-semibold">Success</h4>
                <p>Email Sent Successfully</p>
                <Link
                  to="#"
                  className="btn btn-primary p-1 px-2 fs-13 fw-normal"
                  data-bs-dismiss="modal"
                >
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Send Mail */}
      

      <EditLowStock />
      <CommonDeleteModal />
    </div>
  );
};

export default LowStock;
