import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '../../core/pagination/datatable.jsx'
import AddLeaveType from '../../core/modals/hrm/addleavetype.jsx';
import EditLeaveType from '../../core/modals/hrm/editleavetype.jsx';
import TooltipIcons from '../../core/common/tooltip-content/tooltipIcons.jsx';
import RefreshIcon from '../../core/common/tooltip-content/refresh.jsx';
import CollapesIcon from '../../core/common/tooltip-content/collapes.jsx';
import CommonFooter from '../../core/common/footer/commonFooter.jsx';

const LeaveTypes = () => {

    const dataSource = useSelector((state) => state.rootReducer.leavetypes_data);

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "Leave Quota",
            dataIndex: "leavequota",
            sorter: (a, b) => a.leavequota.length - b.leavequota.length,
        },
        {
            title: "Created On",
            dataIndex: "createdon",
            sorter: (a, b) => a.createdon.length - b.createdon.length,
        },

        {
            title: "Status",
            dataIndex: "status",
            render: (text) => (
                <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                    <i className="ti ti-point-filled me-1" />
                    {text}
                </span>

            ),
            sorter: (a, b) => a.status.length - b.status.length,
        },

        {
            title: "Actions",
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
                        <Link className="confirm-text p-2" to="#">
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

    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4>Leave Type</h4>
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
                                Add Leave Type
                            </Link>
                        </div>
                    </div>

                    {/* /product list */}
                    <div className="card table-list-card">
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
            <AddLeaveType />
            <EditLeaveType />
            <>
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
                                        Delete Leave Type
                                    </h4>
                                    <p className="text-gray-6 mb-0 fs-16">
                                        Are you sure you want to delete leave type?
                                    </p>
                                    <div className="modal-footer-btn mt-3 d-flex justify-content-center">
                                        <button
                                            type="button"
                                            className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                                            data-bs-dismiss="modal"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
                                        >
                                            Yes Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /delete modal */}
            </>

        </div>
    )
}

export default LeaveTypes
