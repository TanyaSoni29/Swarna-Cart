import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddLeaveEmployee from "../../core/modals/hrm/addleaveemployee";
import EditLeaveEmployee from "../../core/modals/hrm/editleaveemployee";
import Table from "../../core/pagination/datatable";
import { leavesEmployee } from "../../core/json/leavesemployee";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import { DatePicker } from "antd";
import { Calendar } from "feather-icons-react/build/IconComponents";
import CommonFooter from "../../core/common/footer/commonFooter";

const LeavesEmployee = () => {
  const leavesEmployeedata = leavesEmployee;

  const columns = [
    {
      title: "EmpId",
      dataIndex: "empId",
      // sorter: (a, b) => a.empId.length - b.empId.length,
      sorter: (a, b) => a.empId.localeCompare(b.empId)

    },
    {
      title: "Type",
      dataIndex: "type",
      sorter: (a, b) => a.type.length - b.type.length,
    },

    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      sorter: (a, b) => a.duration.length - b.duration.length,
    },
    {
      title: "AppliedOn",
      dataIndex: "appliedOn",
      sorter: (a, b) => a.appliedOn.length - b.appliedOn.length,
    },
    {
      title: "Reason",
      dataIndex: "reason",
      sorter: (a, b) => a.reason.length - b.reason.length,
    },
    {
      title: "Status",
      dataIndex: "approval",
      sorter: (a, b) => a.approval.length - b.approval.length,
      render: (text) => (
        <span
          className={`badge  d-inline-flex align-items-center badge-xs ${text === "Applied" ? "badge-purple" : text === "Approved" ? "badge-success" : "badge-danger"
            }`}
        >
          <i className="ti ti-point-filled me-1"></i>{text}
        </span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "action",
      sorter: (a, b) => a.action.length - b.action.length,
      render: (text) => (
        <td className="action-table-data justify-content-end">
          <div className="edit-delete-action">
            <Link
              to=""
              className={`me-2 p-2 ${text !== 'Rejected' && text !== 'Applied' ? 'd-none' : ''}`}
            >
              <i
                data-feather={`${text === 'Rejected' ? 'x-circle' : 'info'}`}
                className={`${text === 'Rejected' ? 'feather-x-circle' : text === 'Applied' ? 'feather-info' : ''}`}
              ></i>
            </Link>
            <Link className="me-2 p-2" to="#" data-bs-toggle="modal" data-bs-target="#edit-leave">
              <i data-feather="edit" className="feather-edit"></i>
            </Link>
            <Link className="confirm-text p-2" to="#" data-bs-toggle="modal" data-bs-target="#delete-modal">
              <i data-feather="trash-2" className="feather-trash-2"></i>
            </Link>
          </div>

        </td>
      ),
    },

  ];

  const [searchText] = useState("");
  const filteredData = leavesEmployeedata.filter((entry) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });


  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Leaves</h4>
                <h6>Manage your Leaves</h6>
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
                data-bs-target="#add-leave"
              >
                Apply Leave
              </Link>
            </div>
          </div>

          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="search-set">
              </div>
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="me-2 date-select-small">
                  <div className="input-groupicon trail-balance">
                    <Calendar className="info-img" />
                    <DatePicker
                      className="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Select Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Approved
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Rejected
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
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
      <AddLeaveEmployee />
      <EditLeaveEmployee />

      {/* delete modal */}
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
                  Delete Leave
                </h4>
                <p className="text-gray-6 mb-0 fs-16">
                  Are you sure you want to delete leave?
                </p>
                <div className="modal-footer-btn mt-3 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    className="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
                  >
                    Yes Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /delete modal */}


    </div>
  );
};

export default LeavesEmployee;
