import React from 'react'
import { Link } from 'react-router-dom'
import Table from "../../../core/pagination/datatable";
import TooltipIcons from '../../../core/common/tooltip-content/tooltipIcons';
import RefreshIcon from '../../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../../core/common/tooltip-content/collapes';
import CommonFooter from '../../../core/common/footer/commonFooter';
import { purchase_transaction } from '../../../core/json/purchaseTransactionDetails';
import ImageWithBasePath from '../../../core/img/imagewithbasebath';

const PurchaseTransaction = () => {
  const data = purchase_transaction;
  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "InvoiceID",
      render: (text) => (
        <Link to="#" className="link-default">{text}</Link>
      ),
      sorter: (a, b) => a.InvoiceID.length - b.InvoiceID.length,
    },
    {
      title: "Customer",
      dataIndex: "CompanyName",
      render: (text, record) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link to="#" className="avatar avatar-md border rounded-circle">
            <ImageWithBasePath
              src={`assets/img/company/${record.Image}`}
              className="img-fluid"
              alt="img"
            />
          </Link>
          <div className="ms-2">
            <h6 className="fw-medium">
              <Link to="#">{text}</Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a, b) => a.CompanyName.length - b.CompanyName.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },
    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      sorter: (a, b) => a.CreatedDate.length - b.CreatedDate.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.CreatedDate.length - b.CreatedDate.length,
    },
    {
      title: "Payment Methode",
      dataIndex: "PaymentMethod",
      sorter: (a, b) => a.PaymentMethod.length - b.PaymentMethod.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <Link
          to="#"
          className={`badge ${text === 'Paid' ? 'badge-success' : 'badge-danger'} d-inline-flex align-items-center badge-xs`}
        >
          <i className="ti ti-point-filled me-1"></i>
          {text}
        </Link>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "",
      dataIndex: "action",
      render: () => (
        <div className="action-icon d-inline-flex align-items-center">
          <Link
            to="#"
            className="p-2 d-flex align-items-center border rounded me-2"
            data-bs-toggle="modal"
            data-bs-target="#view_invoice"
          >
            <i className="ti ti-file-invoice" />
          </Link>
          <Link to="#" className="p-2 d-flex align-items-center border rounded me-2">
            <i className="ti ti-download" />
          </Link>
          <Link
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
            className="p-2 d-flex align-items-center border rounded"
          >
            <i className="ti ti-trash" />
          </Link>
        </div>

      ),
    },
  ]

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Purchase Transaction</h4>
                <h6>Manage your purchase transaction</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>

          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Transaction List</h5>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Payment Method
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Credit Card
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Paypal
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Debit Card
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
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
                        Paid
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Unpaid
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
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
            <div className="card-body p-0">
              <div className="table-responsive">
                <Table dataSource={data} columns={columns} />
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
      {/* /Page Wrapper */}
      {/* Invoices */}
      <div className="modal fade" id="view_invoice">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body p-5">
              <div className="row justify-content-between align-items-center mb-3">
                <div className="col-md-6">
                  <div className="mb-4">
                    <ImageWithBasePath
                      src="assets/img/logo.svg"
                      className="img-fluid"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className=" text-end mb-3">
                    <h5 className="text-dark mb-1">Invoice</h5>
                    <p className="mb-1 fw-normal">
                      <i className="ti ti-file-invoice me-1" />
                      INV0287
                    </p>
                    <p className="mb-1 fw-normal">
                      <i className="ti ti-calendar me-1" />
                      Issue date : 12 Sep 2024{" "}
                    </p>
                    <p className="fw-normal">
                      <i className="ti ti-calendar me-1" />
                      Due date : 12 Oct 2024{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mb-3 d-flex justify-content-between">
                <div className="col-md-7">
                  <p className="text-dark mb-2 fw-medium fs-16">Invoice From :</p>
                  <div>
                    <p className="mb-1">SmartHR</p>
                    <p className="mb-1">
                      367 Hillcrest Lane, Irvine, California, United States
                    </p>
                    <p className="mb-1">smarthr@example.com</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <p className="text-dark mb-2 fw-medium fs-16 text-end">
                    Invoice To :
                  </p>
                  <div>
                    <p className="mb-1 text-end">BrightWave Innovations</p>
                    <p className="mb-1 text-end">
                      367 Hillcrest Lane, Irvine, California, United States
                    </p>
                    <p className="mb-1 text-end">michael@example.com</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="table-responsive mb-3">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>Plan</th>
                        <th className="text-end">Billing Cycle</th>
                        <th className="text-end">Created Date</th>
                        <th className="text-end">Expiring On</th>
                        <th className="text-end">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Advanced (Monthly)</td>
                        <td className="text-end">30 Days</td>
                        <td className="text-end">12 Sep 2024</td>
                        <td className="text-end">12 Oct 2024</td>
                        <td className="text-end">$200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row mb-3 d-flex justify-content-between">
                <div className="col-md-4">
                  <div>
                    <h6 className="mb-4">Payment info:</h6>
                    <p className="mb-0">Credit Card - 123***********789</p>
                    <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                      <p className="mb-0">Amount</p>
                      <p className="text-dark fw-medium mb-2">$200.00</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex justify-content-between align-items-center pe-3">
                    <p className="text-dark fw-medium mb-0">Sub Total</p>
                    <p className="mb-2">$200.00</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pe-3">
                    <p className="text-dark fw-medium mb-0">Tax </p>
                    <p className="mb-2">$0.00</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pe-3">
                    <p className="text-dark fw-medium mb-0">Total</p>
                    <p className="text-dark fw-medium mb-2">$200.00</p>
                  </div>
                </div>
              </div>
              <div className="card border mb-0">
                <div className="card-body">
                  <p className="text-dark fw-medium mb-2">
                    Terms &amp; Conditions:
                  </p>
                  <p className="fs-12 fw-normal d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled text-primary me-1" />
                    All payments must be made according to the agreed schedule. Late
                    payments may incur additional fees.
                  </p>
                  <p className="fs-12 fw-normal d-flex align-items-baseline">
                    <i className="ti ti-point-filled text-primary me-1" />
                    We are not liable for any indirect, incidental, or consequential
                    damages, including loss of profits, revenue, or data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Invoices */}
      <>
        {/* Delete Modal */}
        <div className="modal fade" id="delete_modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <span className="avatar avatar-xl bg-danger-transparent rounded-circle text-danger mb-3">
                  <i className="ti ti-trash-x fs-36" />
                </span>
                <h4 className="mb-1">Confirm Delete</h4>
                <p className="mb-3">
                  You want to delete all the marked items, this cant be undone once
                  you delete.
                </p>
                <div className="d-flex justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-secondary me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                    Yes, Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Modal */}
      </>

    </>

  )
}

export default PurchaseTransaction