import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import Table from "../../core/pagination/datatable";
import CommonFooter from "../../core/common/footer/commonFooter";
import GiftCardModals from "../../core/modals/coupons/giftCardModals";
import { GiftData } from "../../core/json/giftCardData";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";


const GiftCards = () => {

  const dataSource = GiftData;

  const columns = [
    {
      title: "Gift Card",
      dataIndex: "GiftCard",
      sorter: (a, b) => a.GiftCard.length - b.GiftCard.length,
    },
    {
      title: "Customer",
      dataIndex: "Customer",
      render: (text, data) => (
        <div className="userimgname">
          <span className="avatar avatar-md me-2">
            <Link to="#">
              <ImageWithBasePath src={`assets/img/users/${data.Image}`} alt="user" />
            </Link>
          </span>
          <Link to="#">{text}</Link>
        </div>
      ),
      sorter: (a, b) => a.Customer.length - b.Customer.length,
    },
    {
      title: "IssuedDate",
      dataIndex: "IssuedDate",
      sorter: (a, b) => a.IssuedDate.length - b.IssuedDate.length,
    },
    {
      title: "ExpiryDate",
      dataIndex: "ExpiryDate",
      sorter: (a, b) => a.ExpiryDate.length - b.ExpiryDate.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Balance",
      dataIndex: "Balance",
      sorter: (a, b) => a.Balance.length - b.Balance.length,
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
              data-bs-toggle="modal"
              data-bs-target="#gift-card-details"
              className="me-2 edit-icon  p-2"
              to="#"
            >
              <i data-feather="eye" className="feather-eye" />
            </Link>
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
                <h4>Gift Cards</h4>
                <h6>Manage your gift cards</h6>
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
                Add Gift Card
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
                    Type
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Fixed
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Percentage
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
                        Inactive
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
      <GiftCardModals />

    </div>
  );
};

export default GiftCards;
