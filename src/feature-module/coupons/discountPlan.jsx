import React from "react";
import { Link } from "react-router-dom";
import Table from "../../core/pagination/datatable";
import CommonFooter from "../../core/common/footer/commonFooter";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import DiscountPlanModal from "../../core/modals/coupons/discountPlanModal";
import { discountPlanData } from "../../core/json/discountPlanData";


const DiscountPlan = () => {

  const dataSource = discountPlanData;

  const columns = [
    {
      title: "Plan Name",
      dataIndex: "PlanName",
      sorter: (a, b) => a.PlanName.length - b.PlanName.length,
    },
    {
      title: "Customers",
      dataIndex: "Customers",
      sorter: (a, b) => a.Customers.length - b.Customers.length,
    },

    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <span className={`badge table-badge ${text === 'Active' ? 'bg-success' : text === 'Redeemed' ? 'bg-pink' : text === 'Expired' ? 'bg-light' : 'bg-danger'} fw-medium fs-10`}>
          {text}
        </span>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">

            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-units"
            >
              <i data-feather="edit" className="feather-edit" />
            </Link>
            <Link
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              className="p-2"
              to="#"
            >
              <i data-feather="trash-2" className="feather-trash-2" />
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
                <h4>Discount Plan</h4>
                <h6>Manage Your discount plans</h6>
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
                Add Discount Plan
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
                    Customer
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        All Customers
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Members Only
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        High-Spending Customers
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Online Customers
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
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Redeemed
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inactive
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Expired
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
      <DiscountPlanModal />

    </div>
  );
};

export default DiscountPlan;
