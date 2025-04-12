import React from "react";
import { Link } from "react-router-dom";

import Table from "../../core/pagination/datatable";
import CommonFooter from "../../core/common/footer/commonFooter";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import { purchasereportdata } from "../../core/json/purchasereportdata";

const PurchaseOrderReport = () => {

  const dataSource = purchasereportdata;

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      className:"d-flex align-items-center p-3 px-2",
      render: (text,data) => (
        <>
        <Link className="avatar avatar-md me-2">
          <img src={data.img} alt="product" />
        </Link>
        <Link to="#">{text}</Link>
      </>
      ),
      sorter: (a, b) => a.productName.length - b.productName.length,
    },
    {
      title: "Product Amount",
      dataIndex: "productAmount",
      sorter: (a, b) => a.productAmount.length - b.productAmount.length,
    },

    {
      title: "Product QTY",
      dataIndex: "productQty",
      sorter: (a, b) => a.productQty.length - b.productQty.length,
    },
    {
      title: "Instock QTY",
      dataIndex: "instockQty",
      sorter: (a, b) => a.instockQty.length - b.instockQty.length,
    },

    
  ];





  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Purchase order</h4>
                <h6>Manage Your Purchase order</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons/>
              <RefreshIcon/>
            <CollapesIcon/>
            </ul>
           
          </div>
          {/* /product list */}
          <div className="card table-list-card">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set">
              
            </div>
            <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
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
      <CommonFooter/>
      </div>
     

    </div>
  );
};

export default PurchaseOrderReport;
