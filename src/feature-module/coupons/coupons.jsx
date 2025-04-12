import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import {
  ChevronUp,
  RotateCcw,
} from "feather-icons-react/build/IconComponents";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../core/pagination/datatable";
import { setToogleHeader } from "../../core/redux/action";
import AddCoupons from "../../core/modals/coupons/addcoupons";
import EditCoupons from "../../core/modals/coupons/editcoupons";
import { CouponData } from "../../core/json/coupons";
import CommonFooter from "../../core/common/footer/commonFooter";


const Coupons = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rootReducer.toggle_header);
  const dataSource = CouponData;

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Code",
      dataIndex: "Code",
      render: (text) => (
        <span className="badge purple-badge">{text}</span>
      ),
      sorter: (a, b) => a.Code.length - b.Code.length,
    },
    {
      title: "Description",
      dataIndex: "Description",
      sorter: (a, b) => a.Description.length - b.Description.length,
    },
    {
      title: "Type",
      dataIndex: "Type",
      sorter: (a, b) => a.Type.length - b.Type.length,
    },
    {
      title: "Discount",
      dataIndex: "Discount",
      sorter: (a, b) => a.Discount.length - b.Discount.length,
    },
    {
      title: "Limit",
      dataIndex: "Limit",
      sorter: (a, b) => a.Limit.length - b.Limit.length,
    },
    {
      title: "Valid",
      dataIndex: "Valid",
      sorter: (a, b) => a.Valid.length - b.Valid.length,
    },
    
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <span className={`badge table-badge ${text === 'Active' ? 'bg-success':'bg-danger'} fw-medium fs-10`}>
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
              <i data-feather="edit" className="feather-edit"></i>
            </Link>
            <Link data-bs-toggle="modal" data-bs-target="#delete-modal" className="p-2" to="#">
              <i
                data-feather="trash-2"
                className="feather-trash-2"
              ></i>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const renderTooltip = (props) => (
    <Tooltip id="pdf-tooltip" {...props}>
      Pdf
    </Tooltip>
  );
  const renderExcelTooltip = (props) => (
    <Tooltip id="excel-tooltip" {...props}>
      Excel
    </Tooltip>
  );

  const renderRefreshTooltip = (props) => (
    <Tooltip id="refresh-tooltip" {...props}>
      Refresh
    </Tooltip>
  );
  const renderCollapseTooltip = (props) => (
    <Tooltip id="refresh-tooltip" {...props}>
      Collapse
    </Tooltip>
  );



  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Coupons</h4>
                <h6>Manage Your Coupons</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <li>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                  <Link>
                    <ImageWithBasePath
                      src="assets/img/icons/pdf.svg"
                      alt="img"
                    />
                  </Link>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={renderExcelTooltip}>
                  <Link data-bs-toggle="tooltip" data-bs-placement="top">
                    <ImageWithBasePath
                      src="assets/img/icons/excel.svg"
                      alt="img"
                    />
                  </Link>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={renderRefreshTooltip}>
                  <Link data-bs-toggle="tooltip" data-bs-placement="top">
                    <RotateCcw />
                  </Link>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={renderCollapseTooltip}>
                  <Link
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="collapse-header"
                    className={data ? "active" : ""}
                    onClick={() => {
                      dispatch(setToogleHeader(!data));
                    }}
                  >
                    <ChevronUp />
                  </Link>
                </OverlayTrigger>
              </li>
            </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-units"
              >
              <i className='ti ti-circle-plus me-1'></i>
                Add Coupons
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
      <CommonFooter/>
      </div>
      <AddCoupons />
      <EditCoupons />
    </div>
  );
};

export default Coupons;
