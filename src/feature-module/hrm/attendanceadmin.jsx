import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { useSelector } from "react-redux";
import Table from "../../core/pagination/datatable.jsx";
import AddAttendance from "../../core/modals/hrm/addattendance.jsx";
import EditAttendance from "../../core/modals/hrm/editattendance.jsx";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons.jsx";
import RefreshIcon from "../../core/common/tooltip-content/refresh.jsx";
import CollapesIcon from "../../core/common/tooltip-content/collapes.jsx";
import { DatePicker } from "antd";
import { Calendar } from "feather-icons-react/build/IconComponents/index.js";

const AttendanceAdmin = () => {
  const dataSource = useSelector((state) => state.rootReducer.attendanceadmin_data);

  const columns = [
    {
      title: "Employee",
      dataIndex: "Employee",
      render: (text, record) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            <ImageWithBasePath src={`assets/img/users/${record.image}`} alt="product" />
          </Link>
          <div>
            <h6>
              <Link to="#">{text}</Link>
            </h6>
            <span>{record.Role}</span>
          </div>
        </div>

      ),
      sorter: (a, b) => a.Employee.length - b.Employee.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <span className={`badge ${text === 'Present' ? "badge-success" : 'badge-danger'} d-inline-flex align-items-center badge-xs`}>
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>

      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Clock In",
      dataIndex: "Clock_In",
      sorter: (a, b) => a.Clock_In.length - b.Clock_In.length,
    },
    {
      title: "Clock Out",
      dataIndex: "Clock_Out",
      sorter: (a, b) => a.Clock_Out.length - b.Clock_Out.length,
    },
    {
      title: "Production",
      dataIndex: "Production",
      sorter: (a, b) => a.Production.length - b.Production.length,
    },
    {
      title: "Break",
      dataIndex: "Break",
      sorter: (a, b) => a.Break.length - b.Break.length,
    },
    {
      title: "Overtime",
      dataIndex: "Overtime",
      sorter: (a, b) => a.Overtime.length - b.Overtime.length,
    },
    {
      title: "Total Hours",
      dataIndex: "Total_Hours",
      sorter: (a, b) => a.Total_Hours.length - b.Total_Hours.length,
    },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Attendance</h4>
                <h6>Manage your Attendance</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="search-set">
              </div>
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="me-2 date-select-small">
                  <div className="input-addon-left position-relative">
                    <DatePicker
                      className="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                    />
                    <span className="cus-icon">
                     <Calendar />
                    </span>
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
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Present
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Absent
                      </Link>
                    </li>
                  </ul>
                </div>
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
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2025 © Swarna. All Right Reserved</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              BAckend Coders
            </Link>
          </p>
        </div>
      </div>

      <AddAttendance />
      <EditAttendance />
    </div>
  );
};

export default AttendanceAdmin;
