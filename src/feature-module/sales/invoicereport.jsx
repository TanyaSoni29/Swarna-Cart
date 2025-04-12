import React from "react";
import { Link } from "react-router-dom";
import Table from "../../core/pagination/datatable";
import { invoicereportdata } from "../../core/json/invoicereportdata";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import CommonFooter from "../../core/common/footer/commonFooter";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { Eye, Trash2 } from "feather-icons-react/build/IconComponents";
import { all_routes } from "../../Router/all_routes";
import CommonDeleteModal from "../../core/common/modal/commonDeleteModal";

const Invoice = () => {
  const data = invoicereportdata;
  const route = all_routes;
  const columns = [
    {
      title: "Invoice No",
      dataIndex: "invoiceno",
      render:(text) =>(
        <>
        <Link>{text}</Link>
        </>
      ),
      sorter: (a, b) => a.invoiceno.length - b.invoiceno.length,
    },

    {
      title: "Customer",
      dataIndex: "customer",
      render: (text, render) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <ImageWithBasePath src={`assets/img/users/${render.image}`} alt="product" />
          </Link>
          <Link to="#" className="ms-2">{text}</Link>
        </div>

      ),
      sorter: (a, b) => a.customer.length - b.customer.length,
    },
    {
      title: "Due Date",
      dataIndex: "duedate",
      sorter: (a, b) => a.duedate.length - b.duedate.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Paid",
      dataIndex: "paid",
      sorter: (a, b) => a.paid.length - b.paid.length,
    },
    {
      title: "Amount Due",
      dataIndex: "amountdue",
      sorter: (a, b) => a.amountdue.length - b.amountdue.length,
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div>
          {text === "Paid" && (
            <span className="badge badge-soft-success badge-xs shadow-none"><i className="ti ti-point-filled me-1"></i>{text}</span>
          )}
          {text === "Unpaid" && (
            <span className="badge badge-soft-danger badge-xs shadow-none"><i className="ti ti-point-filled me-1"></i>{text}</span>
          )}
          {text === "Overdue" && (
            <span className="badge badge-soft-warning badge-xs shadow-none"><i className="ti ti-point-filled me-1"></i>{text}</span>
          )}
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "",
      dataIndex: "action",
      render: () => (
        <div className="edit-delete-action d-flex align-items-center justify-content-center">
          <Link
            className="me-2 p-2 d-flex align-items-center justify-content-between border rounded"
            to={route.invoicedetails}
          >
            <Eye className="feather-eye" />
          </Link>
          <Link
            className="p-2 d-flex align-items-center justify-content-between border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
          >
            <Trash2 className="feather-trash-2" />
          </Link>
        </div>

      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
  ];

  // const Customer = [
  //   { label: 'Carl Evans', value: '1' },
  //   { label: 'Minerva Rameriz', value: '2' },
  //   { label: 'Robert Lamon', value: '3' },
  // ]

  // const Status = [
  //   { label: 'Paid', value: '1' },
  //   { label: 'Unpaid', value: '2' },
  //   { label: 'Robert Lamon', value: '3' },
  // ]

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Invoices </h4>
                <h6>Manage your stock invoices</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>

          {/* /product list */}
          <div className="card table-list-card no-search">
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
                    Customer
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Carl Evans
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Minerva Rameriz
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Robert Lamon
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
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
                      <Link to="#" className="dropdown-item rounded-1">
                        Paid
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Unpaid
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Overdue
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
              <div className=" table-responsive">
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>

      <CommonDeleteModal />
    </div>
  );
};

export default Invoice;
