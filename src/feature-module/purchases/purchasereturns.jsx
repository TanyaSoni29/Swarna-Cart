import React from "react";
import { Link } from "react-router-dom";
import Table from "../../core/pagination/datatable";
import CommonFooter from "../../core/common/footer/commonFooter";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";

import { purchasesreturn } from "../../core/json/purchasereturn";
import AddPurchaseReturn from "../../core/modals/purchases/addpurchasereturn";
import EditPurchaseReturns from "../../core/modals/purchases/editpurchasereturns";
const PurchaseReturns = () => {

  const dataSource = purchasesreturn;

  const columns = [
    {
      title: "Product Image",
      dataIndex: "img",
      render: (text) => (
        <Link to='#' className="avatar avatar-md me-2">
          <img src={text} alt="product" />
        </Link>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },

    {
      title: "Supplier Name",
      dataIndex: "supplier",
      sorter: (a, b) => a.supplier.length - b.supplier.length,
    },
    {
      title: "Reference",
      dataIndex: "reference",
      sorter: (a, b) => a.reference.length - b.reference.length,
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <span
          className={`badges status-badge fs-10 p-1 px-2 rounded-1 ${text === "Pending" ? "badge-pending" : text === "Pending" ? "bg-warning" : ""
            }`}
        >
          {text}
        </span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Total",
      dataIndex: "grandTotal",
      sorter: (a, b) => a.grandTotal.length - b.grandTotal.length,
    },
    {
      title: "Paid",
      dataIndex: "paid",
      sorter: (a, b) => a.paid.length - b.paid.length,
    },
    {
      title: "Due",
      dataIndex: "due",
      sorter: (a, b) => a.due.length - b.due.length,
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      render: (text) => (
        <span
          className={`p-1 pe-2 rounded-1  fs-10 ${text === "Paid" ? "text-success bg-success-transparent" : text === "Overdue" ? "text-warning bg-warning-transparent " : "text-danger bg-danger-transparent "
            }`}
        >
          <i className="ti ti-point-filled me-1 fs-11"> </i> {text}
        </span>
      ),
      sorter: (a, b) => a.createdBy.length - b.createdBy.length,
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">

            <Link className="me-2 p-2" data-bs-toggle="modal" data-bs-target="#edit-sales-new">
              <i data-feather="edit" className="feather-edit"></i>
            </Link>
            <Link data-bs-toggle="modal" data-bs-target="#delete-modal" className="p-2" to="#" >
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
                <h4>Purchase Return List</h4>
                <h6>Manage Your Returns</h6>
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
                data-bs-target="#add-sales-new"
              >
              <i className='ti ti-circle-plus me-1'></i>
                Add Purchase Return
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
        </div>
        <CommonFooter />
      </div>
      <AddPurchaseReturn />
      <EditPurchaseReturns />
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

export default PurchaseReturns;
