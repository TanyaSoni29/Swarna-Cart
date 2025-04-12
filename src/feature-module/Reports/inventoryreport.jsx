import React, { useState } from "react";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { Link } from "react-router-dom";
import Select from "react-select";
import { inventoryreportdata } from "../../core/json/inventoryreportdata";
import Table from "../../core/pagination/datatable";
import { all_routes } from "../../Router/all_routes";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import { DatePicker } from "antd";
import { Category, ProductName } from "../../core/common/selectOption/selectOption";
import CommonFooter from "../../core/common/footer/commonFooter";

const InventoryReport = () => {

  const route = all_routes;

  const data = inventoryreportdata;
  const [searchText] = useState("");

  const filteredData = data.filter((entry) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });


  const units = [
    { value: "PC", label: "PC" },
    { value: "BX", label: "BX" },
  ];
  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      render: (text, record) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <ImageWithBasePath alt="img" src={record.img} />
          </Link>
          <Link to="#">{text}</Link>
        </span>
      ),
      sorter: (a, b) => a.productName.length - b.productName.length,
    },
    {
      title: "SKU",
      dataIndex: "sku",
      sorter: (a, b) => a.sku.length - b.sku.length,
    },

    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },

    {
      title: "Brand",
      dataIndex: "brand",
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: "Unit",
      dataIndex: "unit",
      sorter: (a, b) => a.unit.length - b.unit.length,
    },

    {
      title: "Instock Qty",
      dataIndex: "instockQty",
      sorter: (a, b) => a.instockQty.length - b.instockQty.length,
    },

  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="table-tab">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link active" to={route.inventoryreport}>
                  Inventory Report
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={route.stockhistory}>
                  Stock History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={route.soldstock}>
                  Sold Stock
                </Link>
              </li>
            </ul>
          </div>

          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Inventory</h4>
                <h6>View Reports of Inventory</h6>
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
                          <label className="form-label">Category</label>
                          <Select
                            classNamePrefix="react-select"
                            options={Category}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Products</label>
                          <Select
                            classNamePrefix="react-select"
                            options={ProductName}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Units</label>
                          <Select
                            classNamePrefix="react-select"
                            options={units}
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
          <div className="card table-list-card">
            <div className="card-body">
              <div className="table-responsive">
                <Table columns={columns} dataSource={filteredData} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
      <CommonFooter />
    </>

  );
};

export default InventoryReport;
