import React, { useState } from "react";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { Link } from "react-router-dom";
import Select from "react-select";
import { purchasereportdata } from "../../core/json/purchasereportdata";
import Table from "../../core/pagination/datatable";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import { ProductName, Store } from "../../core/common/selectOption/selectOption";
import { DatePicker } from "antd";
import CommonFooter from "../../core/common/footer/commonFooter";

const PurchaseReport = () => {

  const data = purchasereportdata;
  const [searchText ] = useState("");
  const filteredData = data.filter((entry) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });


  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      render: (text, record) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <ImageWithBasePath alt="" src={record.img} />
          </Link>
          <Link to="#">{text}</Link>
        </span>
      ),
      sorter: (a, b) => a.productName.length - b.productName.length,

    },
    {
      title: "Product Amount",
      dataIndex: "productAmount",
      sorter: (a, b) => a.productAmount.length - b.productAmount.length,
    },

    {
      title: "Product Qty",
      dataIndex: "productQty",
      sorter: (a, b) => a.productQty.length - b.productQty.length,
    },

    {
      title: "Instock Qty",
      dataIndex: "instockQty",
      sorter: (a, b) => a.instockQty.length - b.instockQty.length,
    },


  ];
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Purchase report</h4>
              <h6>Manage your Purchase report</h6>
            </div>
          </div>
          <ul className="table-top-head">
            <RefreshIcon />
            <CollapesIcon />
          </ul>
        </div>
        <div className="card border-0">
          <div className="card-body pb-1">
            <form action="purchase-report.html">
              <div className="row align-items-end">
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-md-4">
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
                          options={ProductName}
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
        <div className="card table-list-card hide-search">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div>
              <h4>Customer Report</h4>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <li>
                <Link data-bs-toggle="tooltip" data-bs-placement="top" title="Print">
                  <i className="ti ti-printer" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <Table columns={columns} dataSource={filteredData} />
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
      <CommonFooter />
    </div>
  );
};

export default PurchaseReport;
