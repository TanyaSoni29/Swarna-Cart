import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../Router/all_routes";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import { DatePicker, Table } from "antd";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import { customerduereportdata } from "../../core/json/customerreportdata";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import Select from "react-select";


const CustomerDueReport = () => {

  const data = customerduereportdata;

  const route = all_routes;

  const Customer = [
    { value: "All", label: "All" },
    { value: "Carl Evans", label: "Carl Evans" },
    { value: "Minerva Rameriz", label: "Minerva Rameriz" },
    { value: "Robert Lamon", label: "Robert Lamon" },
  ];
  const PaymentMethod = [
    { value: "All", label: "All" },
    { value: "Cash", label: "Cash" },
    { value: "Paypal", label: "Paypal" },
    { value: "Stripe", label: "Stripe" },
  ];
  const PaymentStatus = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Unpaid", label: "Unpaid" },
    { value: "Paid", label: "Paid" },
  ];

  const columns = [
    {
      title: "Reference",
      dataIndex: "Reference",
      render: (text) => (
        <Link to="#" className="text-orange">
          {text}
        </Link>

      ),
      sorter: (a, b) => a.Reference.length - b.Reference.length,
    },
    {
      title: "Code",
      dataIndex: "Code",
      sorter: (a, b) => a.Code.length - b.Code.length,
    },

    {
      title: "Customer",
      dataIndex: "Customer",
      render: (text, record) => (
        <>
          <div className="d-flex align-items-center">
            <Link to="#" className="avatar avatar-md">
              <ImageWithBasePath src={record.image} className="img-fluid" alt="img" />
            </Link>
            <div className="ms-2">
              <p className="text-dark mb-0">
                <Link to="#">{text}</Link>
              </p>
            </div>
          </div>

        </>
      ),
      sorter: (a, b) => a.Customer.length - b.Customer.length,
    },

    {
      title: "Total Orders",
      dataIndex: "Total_Orders",
      sorter: (a, b) => a.Total_Orders.length - b.Total_Orders.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },

    {
      title: "Payment Method",
      dataIndex: "Payment_Method",
      sorter: (a, b) => a.Payment_Method.length - b.Payment_Method.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <span className={`badge  ${text === 'Paid' ? 'badge-success' : text==='Overdue' ? 'badge-purple' : 'badge-danger'} d-inline-flex align-items-center badge-xs`}>
          {text}
        </span>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },

  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="table-tab">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to={route.customerreport}>
                Customer Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={route.customerduereport}>
                Customer Due
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Customer Due Report</h4>
                <h6>View Reports of Customer</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <div className="card border-0">
            <div className="card-body pb-1">
              <form action="customer-report.html">
                <div className="row align-items-end">
                  <div className="col-lg-10">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Choose Date</label>
                          <div className="input-icon-start position-relative">
                            <DatePicker
                              className="form-control datetimepicker"
                              placeholder="dd/mm/yyyy"
                            />
                            <span className="input-icon-left">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Customer</label>
                          <Select
                            classNamePrefix="react-select"
                            options={Customer}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Payment Method</label>
                          <Select
                            classNamePrefix="react-select"
                            options={PaymentMethod}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Payment Status</label>
                          <Select
                            classNamePrefix="react-select"
                            options={PaymentStatus}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="mb-3">
                      <button className="btn btn-primary w-100" type="submit">
                        Generate Report
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* /product list */}
          <div className="card table-list-card no-search">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div>
                <h4>Customer Due Report</h4>
              </div>
              <ul className="table-top-head">
                <TooltipIcons />
                <li>
                  <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print">
                    <i className="ti ti-printer" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  summary={() => {
                    return (
                      <>
                        <Table.Summary.Row>
                          <Table.Summary.Cell index={3}><h6>Total</h6></Table.Summary.Cell>
                          <Table.Summary.Cell ></Table.Summary.Cell>
                          <Table.Summary.Cell ></Table.Summary.Cell>
                          <Table.Summary.Cell ><h6>$33268.53</h6></Table.Summary.Cell>
                          <Table.Summary.Cell ><h6>$25651.53</h6></Table.Summary.Cell>
                          <Table.Summary.Cell ><h6>$0.0</h6></Table.Summary.Cell>
                          <Table.Summary.Cell ></Table.Summary.Cell>
                        </Table.Summary.Row>
                      </>
                    );
                  }}
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p className="mb-0">2025 © Swarna. All Right Reserved</p>
        <p>
          Designed &amp; Developed By{" "}
          <a href="#" className="text-orange">
            Backend Coders
          </a>
        </p>
      </div>
    </div>


  );
};

export default CustomerDueReport;
