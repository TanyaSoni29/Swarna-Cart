import React from "react";
import { Link } from "react-router-dom";
import {
  Eye,
} from "feather-icons-react/build/IconComponents";
import { useSelector } from "react-redux";
import Table from "../../core/pagination/datatable";
import AddQuotation from "../../core/modals/sales/addquotation";
import EditQuotation from "../../core/modals/sales/editquotation";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import CommonFooter from "../../core/common/footer/commonFooter";
import CommonDeleteModal from "../../core/common/modal/commonDeleteModal";
import ImageWithBasePath from "../../core/img/imagewithbasebath";

const QuotationList = () => {

  const dataSource = useSelector((state) => state.rootReducer.quotationlist_data);

  const columns = [
    {
      title: "Product Name",
      dataIndex: "Product_Name",
      render: (text,record) => (
        <>
          <div className="d-flex align-items-center me-2">
            <Link to="#" className="avatar avatar-md me-2">
              <ImageWithBasePath src={record.Product_image} alt="product" />
            </Link>
            <Link to="#">{text}</Link>
          </div>

        </>
      ),
      sorter: (a, b) => a.Product_Name.length - b.Product_Name.length,
    },
    {
      title: "Customer",
      dataIndex: "Custmer_Name",
      render: (text,record) => (
        <>
          <div className="d-flex align-items-center me-2">
            <Link to="#" className="avatar avatar-md me-2">
              <ImageWithBasePath src={record.Custmer_Image} alt="product" />
            </Link>
            <Link to="#">{text}</Link>
          </div>

        </>
      ),
      sorter: (a, b) => a.Custmer_Name.length - b.Custmer_Name.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div>
          <span className={`badge  ${text==='Sent' ? "badge-success" : text=== 'Ordered' ? "badge-warning" : "badge-cyan"}`}>{text}</span>
        </div>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link className="me-2 p-2" to="#">
              <Eye className="feather-view" />
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
              to="#" data-bs-toggle="modal" data-bs-target="#delete-modal"
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
                <h4>Quotation List</h4>
                <h6>Manage Your Quotation</h6>
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
                Add Quotation
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
                    Product
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
                        Beats Pro
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
                    Customer
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Carl Evans
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Minerva Rameriz
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Robert Lamon
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Patricia Lewis
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
                    Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Sent
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Pending
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Ordered
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
              <div className=" table-responsive">
                <Table columns={columns} dataSource={dataSource} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>

      <AddQuotation />
      <EditQuotation />
      <CommonDeleteModal />
    </div>
  );
};

export default QuotationList;
