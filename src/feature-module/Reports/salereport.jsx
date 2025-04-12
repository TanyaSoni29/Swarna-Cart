import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Table from "../../core/pagination/datatable";
import CommonFooter from "../../core/common/footer/commonFooter";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import { DatePicker } from "antd";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import { salereportdata } from "../../core/json/taxreport";

const SaleReport = () => {
  const data = salereportdata;

  const columns = [
    {
      title: "Reference",
      dataIndex: "Reference",
      render: (text) => (
        <Link to="#" className="text-orange">{text}</Link>
      ),
      sorter: (a, b) => a.Reference.length - b.Reference.length,
    },
    {
      title: "Customer",
      dataIndex: "Customer",
      sorter: (a, b) => a.Customer.length - b.Customer.length,
    },

    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Store",
      dataIndex: "Store",
      sorter: (a, b) => a.Store.length - b.Store.length,
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
      title: "Discount",
      dataIndex: "Discount",
      sorter: (a, b) => a.Discount.length - b.Discount.length,
    },
    {
      title: "Tax Amount",
      dataIndex: "Tax_Amount",
      sorter: (a, b) => a.Tax_Amount.length - b.Tax_Amount.length,
    },
  ];


  const Store = [
    { value: "All", label: "All" },
    { value: "Electro Mart", label: "Electro Mart" },
    { value: "Quantum Gadgets", label: "Quantum Gadgets" },
    { value: "Prime Bazaar", label: "Prime Bazaar" },
  ]
  const Products = [
    { value: "All", label: "All" },
    { value: "Lenovo IdeaPad 3", label: "Lenovo IdeaPad 3" },
    { value: "Nike Jordan", label: "Nike Jordan" },
    { value: "Amazon Echo Dot", label: "Amazon Echo Dot" },
    { value: "Red Premium Satchel", label: "Red Premium Satchel" },
  ]


  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Sales Report</h4>
              <h6>Manage your Sales report</h6>
            </div>
          </div>
          <ul className="table-top-head">
            <RefreshIcon />
            <CollapesIcon />
          </ul>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card border border-success sale-widget flex-fill">
              <div className="card-body d-flex align-items-center">
                <span className="sale-icon bg-success text-white">
                  <i className="ti ti-align-box-bottom-left-filled fs-24" />
                </span>
                <div className="ms-2">
                  <p className="fw-medium mb-1">Total Amount</p>
                  <div>
                    <h3>$4,56,000</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card border border-info sale-widget flex-fill">
              <div className="card-body d-flex align-items-center">
                <span className="sale-icon bg-info text-white">
                  <i className="ti ti-align-box-bottom-left-filled fs-24" />
                </span>
                <div className="ms-2">
                  <p className="fw-medium mb-1">Total Paid</p>
                  <div>
                    <h3>$2,56,42</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card border border-orange sale-widget flex-fill">
              <div className="card-body d-flex align-items-center">
                <span className="sale-icon bg-orange text-white">
                  <i className="ti ti-moneybag fs-24" />
                </span>
                <div className="ms-2">
                  <p className="fw-medium mb-1">Total Unpaid</p>
                  <div>
                    <h3>$1,52,45</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card border border-danger sale-widget flex-fill">
              <div className="card-body d-flex align-items-center">
                <span className="sale-icon bg-danger text-white">
                  <i className="ti ti-alert-circle-filled fs-24" />
                </span>
                <div className="ms-2">
                  <p className="fw-medium mb-1">Overdue</p>
                  <div>
                    <h3>$2,56,12</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0">
          <div className="card-body pb-1">
            <form action="sales-report.html">
              <div className="row align-items-end">
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Choose Date&nbsp;</label>
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
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Store</label>
                        <Select
                          classNamePrefix="react-select"
                          options={Store}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Products</label>
                        <Select
                          classNamePrefix="react-select"
                          options={Products}
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
              <h4>Sales Report</h4>
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

export default SaleReport;
