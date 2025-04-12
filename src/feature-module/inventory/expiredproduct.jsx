import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import Table from "../../core/pagination/datatable";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import CommonFooter from "../../core/common/footer/commonFooter";
import { useSelector } from "react-redux";
import CommonDeleteModal from "../../core/common/modal/commonDeleteModal";
import { DatePicker } from "antd";
import Select from "react-select";
import { ProductName } from "../../core/common/selectOption/selectOption";
import Calendar from "feather-icons-react/build/IconComponents/Calendar";

const ExpiredProduct = () => {
  const dataSource = useSelector((state) => state.rootReducer.expiredproduct_data);



  const columns = [

    {
      title: "SKU",
      dataIndex: "sku",
      sorter: (a, b) => a.sku.length - b.sku.length,
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
      width: "5%",
    },
    {
      title: "Manufactured Date",
      dataIndex: "manufactureddate",
      sorter: (a, b) => a.manufactureddate.length - b.manufactureddate.length,
    },
    {
      title: "Expired Date",
      dataIndex: "expireddate",
      sorter: (a, b) => a.expireddate.length - b.expireddate.length,
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link data-bs-toggle="modal" data-bs-target="#add-units" className="me-2 p-2" to="#">
              <i data-feather="edit" className="feather-edit"></i>
            </Link>
            <Link data-bs-toggle="modal" data-bs-target="#delete-modal" className="p-2">
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
                <h4>Expired Products</h4>
                <h6>Manage your expired products</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <>
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
                      Product
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Lenovo IdeaPad 3
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Beats Pro{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Nike Jordan
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Apple Series 5 Watch
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
              <div className="card-body">
                <div className="table-responsive">
                  <Table columns={columns} dataSource={dataSource} />
                </div>
              </div>
            </div>
            {/* /product list */}
          </>

        </div>
        <CommonFooter />
      </div>

      {/* edit */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Expired Product</h4>
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
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            SKU<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Product Name<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={ProductName}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label>
                            Manufacturer Date
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <DatePicker
                              className="form-control datetimepicker"
                              placeholder="dd/mm/yyyy"
                            />
                           <Calendar className="info-img"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label>
                            Expiry Date<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <DatePicker
                              className="form-control datetimepicker"
                              placeholder="dd/mm/yyyy"
                            />
                            <Calendar className="info-img"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link to='#' data-bs-dismiss="modal"
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


      <CommonDeleteModal />
    </div>
  );
};

export default ExpiredProduct;
