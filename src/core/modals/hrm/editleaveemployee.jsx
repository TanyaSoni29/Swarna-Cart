import React from 'react'
import { Link } from 'react-router-dom'
import TextEditor from '../../../feature-module/inventory/texteditor'
import Select from 'react-select'
import { DatePicker } from 'antd'
import { Calendar } from 'react-feather'

const EditLeaveEmployee = () => {
    const leavetype = [
        { value: 'Choose Status', label: 'Choose Status' },
        { value: 'Full Day', label: 'Full Day' },
        { value: 'Half Day', label: 'Half Day' },
    ];
    const leavetype1 = [
        { value: 'Choose Status', label: 'Choose Status' },
        { value: 'Full Day', label: 'Full Day' },
        { value: 'Half Day', label: 'Half Day' },
    ];

    const Employee = [
        { value: 'Choose', label: 'Choose' },
        { value: 'Carl Evans', label: 'Carl Evans' },
        { value: 'Minerva Rameriz', label: 'Minerva Rameriz' },
        { value: 'Robert Lamon', label: 'Robert Lamon' },
    ];

    return (
        <div>
            {/* Add Leave */}
            <div className="modal fade" id="edit-leave">
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
                        <form action="leaves-admin.html">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Employee <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                classNamePrefix="react-select"
                                                options={Employee}
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
                                                        options={leavetype1}
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
        </div>
    )
}

export default EditLeaveEmployee