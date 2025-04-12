import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { expensereportdata } from "../../core/json/expensereportdata";
import Table from "../../core/pagination/datatable";
import CommonFooter from "../../core/common/footer/commonFooter";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import { DatePicker } from "antd";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";

const ExpenseReport = () => {
  const data = expensereportdata;

  const ExpenseCategory = [
    { value: "All", label: "All" },
    { value: "Electricity Payment", label: "Electricity Payment" },
    { value: "Stationery Purchase", label: "Stationery Purchase" },
    { value: "AC Repair Service", label: "AC Repair Service" },
  ]
  const PaymentMethode = [
    { value: "All", label: "All" },
    { value: "Paypal", label: "Paypal" },
    { value: "Cash", label: "Cash" },
    { value: "Credit Card", label: "Credit Card" },
  ]
  const Status = [
    { value: "All", label: "All" },
    { value: "Approved", label: "Approved" },
    { value: "Pending", label: "Pending" },
  ]

  const columns = [
    {
      title: "Expense Name",
      dataIndex: "Expense_Name",
      sorter: (a, b) => a.Expense_Name.length - b.Expense_Name.length,
    },
    {
      title: "Category",
      dataIndex: "Category",

      sorter: (a, b) => a.Category.length - b.Category.length,
    },

    {
      title: "Description",
      dataIndex: "Description",
      sorter: (a, b) => a.Description.length - b.Description.length,
    },

    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <>
          <span className={`badge ${text === 'Approved' ? 'badge-success' : 'badge-cyan'} d-inline-flex align-items-center badge-xs`}>
            {text}
          </span>
        </>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
  ];


  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Expense Report</h4>
              <h6>View Reports of Expenses</h6>
            </div>
          </div>
          <ul className="table-top-head">
            <RefreshIcon />
            <CollapesIcon />
          </ul>
        </div>
        <div className="card border-0">
          <div className="card-body pb-1">
            <form>
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
                        <label className="form-label">Expense Category</label>
                        <Select
                          classNamePrefix="react-select"
                          options={ExpenseCategory}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label className="form-label">Payment Method</label>
                        <Select
                          classNamePrefix="react-select"
                          options={PaymentMethode}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <Select
                          classNamePrefix="react-select"
                          options={Status}
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
              <h4>Expense Report</h4>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <li>
                <Link to="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Print">
                  <i className="ti ti-printer" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="table-responsive custome-search">
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
      <CommonFooter />
    </div>

  );
};

export default ExpenseReport;
