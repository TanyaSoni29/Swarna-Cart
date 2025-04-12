import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { ChevronUp, RotateCcw } from "feather-icons-react/build/IconComponents";
import { setToogleHeader } from "../../core/redux/action";
import { Printer } from "react-feather";
import Table from "../../core/pagination/datatable";

const DeleteAccount = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rootReducer.toggle_header);
  const dataSource = useSelector((state) => state.rootReducer.deleteaccount_data);
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
  const renderPrinterTooltip = (props) => (
    <Tooltip id="printer-tooltip" {...props}>
      Printer
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


  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      render: (text, record) => (
        <div className="d-flex align-items-center">
          <Link to="/profile" className="avatar avatar-md">
            <ImageWithBasePath
              alt=""
              src={record.img}
              className="product-img"
            />
          </Link>
          <div>
            <Link to="/profile">{text}</Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.username.length - b.username.length,
    },

    {
      title: "Requisition Date",
      dataIndex: "requisitiondate",
      sorter: (a, b) => a.requisitiondate.length - b.requisitiondate.length,
    },
    {
      title: "Delete Requisition Date",
      dataIndex: "deleterequisitiondate",
      sorter: (a, b) =>
        a.deleterequisitiondate.length - b.deleterequisitiondate.length,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link
              className="confirm-text p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_modal"
            >
              <i data-feather="trash-2" className="feather-trash-2"></i>
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
                <h4>Delete Account Request</h4>
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
                <OverlayTrigger placement="top" overlay={renderPrinterTooltip}>
                  <Link data-bs-toggle="tooltip" data-bs-placement="top">
                    <Printer />
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
          </div>
          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="search-set">
                <div className="search-input">
                  <a href="#" className="btn btn-searchset">
                    <i className="ti ti-search fs-14 feather-search" />
                  </a>
                  <div id="DataTables_Table_0_filter" className="dataTables_filter">
                    <label>
                      {" "}
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder="Search"
                        aria-controls="DataTables_Table_0"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">

              </div>
            </div>
            <div className="card-body pb-0">

              <div className="table-responsive">
                <Table columns={columns} dataSource={dataSource} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
      <div className="modal fade modal-default" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="success-wrap text-center">
                <form action="delete-account.html">
                  <div className="icon-success bg-danger-transparent text-danger mb-2">
                    <i className="ti ti-trash" />
                  </div>
                  <h3 className="mb-2">Delete Request Account</h3>
                  <p className="fs-16 mb-3">
                    Are you sure you want to delete request account?
                  </p>
                  <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                    <button
                      type="button"
                      className="btn btn-md btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" className="btn btn-md btn-primary" data-bs-dismiss="modal">
                      Yes, Delete
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DeleteAccount;
