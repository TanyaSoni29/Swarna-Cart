import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "feather-icons-react/build/IconComponents";
import Table from "../../core/pagination/datatable";
import { DatePicker } from "antd";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import TextEditor from "../inventory/texteditor";
import Select from "react-select"
import { leavesadmindata } from "../../core/json/leavesadmin";
import CommonFooter from "../../core/common/footer/commonFooter";

const LeavesAdmin = () => {

  const dataSource = leavesadmindata;

  // const [isFilterVisible, setIsFilterVisible] = useState(false);
  // const toggleFilterVisibility = () => {
  //     setIsFilterVisible((prevVisibility) => !prevVisibility);
  // };

  // const oldandlatestvalue = [
  //     { value: 'date', label: 'Sort by Date' },
  //     { value: 'newest', label: 'Newest' },
  //     { value: 'oldest', label: 'Oldest' },
  // ];

  const employee = [
    { value: 'Choose Employee', label: 'Choose Employee' },
    { value: 'Mitchum Daniel', label: 'Mitchum Daniel' },
    { value: 'Susan Lopez', label: 'Susan Lopez' },
    { value: 'Robert Grossman', label: 'Robert Grossman' },
    { value: 'Janet Hembre', label: 'Janet Hembre' },
  ];
  const leavetype = [
    { value: 'Choose Type', label: 'Choose Type' },
    { value: 'Sick Leave', label: 'Sick Leave' },
    { value: 'Maternity', label: 'Maternity' },
    { value: 'Vacation', label: 'Vacation' },
  ];
  const leavetype2 = [
    { value: 'Full Day', label: 'Full Day' },
    { value: 'Half Day', label: 'Half Day' },
  ];
  // const leavestatus = [
  //     { value: 'Choose Status', label: 'Choose Status' },
  //     { value: 'Approved', label: 'Approved' },
  //     { value: 'Rejected', label: 'Rejected' },
  // ];


  const columns = [
    {
      title: "Emp Name",
      dataIndex: "empname",
      sorter: (a, b) => a.empname.length - b.empname.length,
    },
    {
      title: "Emp Id",
      dataIndex: "empid",
      sorter: (a, b) => a.empid.length - b.empid.length,
    },
    {
      title: "Type",
      dataIndex: "type",
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "From Date",
      dataIndex: "fromdate",
      sorter: (a, b) => a.fromdate.length - b.fromdate.length,
    },
    {
      title: "To Date",
      dataIndex: "todate",
      sorter: (a, b) => a.todate.length - b.todate.length,
    },
    {
      title: "Days/Hours",
      dataIndex: "days/hours",
      sorter: (a, b) => a.days.length - b.days.length,
    },
    {
      title: "Shift",
      dataIndex: "shift",
      sorter: (a, b) => a.shift.length - b.shift.length,
    },
    {
      title: "Applied On",
      dataIndex: "appliedon",
      sorter: (a, b) => a.appliedon.length - b.appliedon.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <span className={`badge  ${ text === 'Approved' ? 'badge-success' : 'badge-danger'} d-inline-flex align-items-center badge-xs`}>
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <td className="action-table-data justify-content-end">
          <div className="edit-delete-action">
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
                  <div className="input-addon-right position-relative">

                    <DatePicker
                      className="form-control datetimepicker"
                    // placeholder="dd/mm/yyyy"
                    />
                    <Calendar className="info-img" />
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

            <div className="card-body pb-0">
              <div className="table-responsive">
                <Table columns={columns} dataSource={dataSource} />
              </div>
            </div>
            {/* /Filter */}
          </div>
        </div>
        <CommonFooter />
        {/* /product list */}
      </div>
      <>
        {/* Add Leave */}
        <div className="modal fade" id="add-leave">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Apply Leave</h4>
                </div>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form >
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Employee <span className="text-danger">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={employee}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Leave Type <span className="text-danger">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={leavetype}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              From <span className="text-danger"> *</span>
                            </label>
                            <div className="input-addon-right position-relative">
                              <DatePicker
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <Calendar className="info-img" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              To <span className="text-danger"> *</span>
                            </label>
                            <div className="input-addon-right position-relative">
                              <DatePicker
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <Calendar className="info-img" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <div className="input-addon-right position-relative">
                              <DatePicker
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <Calendar className="info-img" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <Select
                              classNamePrefix="react-select"
                              options={leavetype2}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="bg-light rounded p-3 pb-0">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">No of Days</label>
                              <input
                                type="text"
                                className="form-control bg-light "
                                readOnly=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">Remaining Leaves</label>
                              <input
                                type="text"
                                className="form-control bg-light "
                                readOnly=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="summer-description-box mb-0">
                        <label className="form-label">Reason</label>
                        <TextEditor />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                    Submit
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Leave */}
        {/* Edit Leave */}
        <div className="modal fade" id="edit-leave">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Edit Leave</h4>
                </div>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form >
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Employee <span className="text-danger">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={employee}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Leave Type <span className="text-danger">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={leavetype}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              From <span className="text-danger"> *</span>
                            </label>
                            <div className="input-addon-right position-relative">
                              <DatePicker
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <Calendar className="info-img" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              To <span className="text-danger"> *</span>
                            </label>
                            <div className="input-addon-right position-relative">
                              <DatePicker
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <Calendar className="info-img" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <div className="input-addon-right position-relative">
                              <DatePicker
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <Calendar className="info-img" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <Select
                              classNamePrefix="react-select"
                              options={leavetype2}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="bg-light rounded p-3 pb-0">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">No of Days</label>
                              <input
                                type="text"
                                className="form-control bg-light "
                                defaultValue={"01"}
                                readOnly=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">Remaining Leaves</label>
                              <input
                                type="text"
                                className="form-control bg-light "
                                defaultValue={"08"}
                                readOnly=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="summer-description-box mb-0">
                        <label className="form-label">Reason</label>
                        <TextEditor />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                    Save Changes
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Leave */}
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
      </>

    </div>
  );
};

export default LeavesAdmin;
