import React from 'react'
import TooltipIcons from '../../../core/common/tooltip-content/tooltipIcons'
import RefreshIcon from '../../../core/common/tooltip-content/refresh'
import CollapesIcon from '../../../core/common/tooltip-content/collapes'
import { AccountType } from '../../../core/common/selectOption/selectOption'
import { MoneyTransferData } from '../../../core/json/moneytransferData'
import { Link } from 'react-router-dom';
import Table from "../../../core/pagination/datatable";
import Select from "react-select";
import CommonFooter from '../../../core/common/footer/commonFooter'
import { PlusCircle } from 'feather-icons-react/build/IconComponents'

const Moneytransfer = () => {

    const dataSource = MoneyTransferData;

    const columns = [
        {
            title: "Date",
            dataIndex: "Date",
            sorter: (a, b) => a.Date.length - b.Date.length,
        },
        {
            title: "Reference Number",
            dataIndex: "Reference_Number",
            sorter: (a, b) => a.Reference_Number.length - b.Reference_Number.length,
        },
        {
            title: "From Account",
            dataIndex: "From_Account",
            sorter: (a, b) => a.From_Account.length - b.From_Account.length,
        },
        {
            title: "To Account",
            dataIndex: "To_Account",
            sorter: (a, b) => a.To_Account.length - b.To_Account.length,
        },
        {
            title: "Amount",
            dataIndex: "Amount",
            sorter: (a, b) => a.Amount.length - b.Amount.length,
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
                        <Link
                            className="confirm-text p-2"
                            to="#" data-bs-toggle="modal" data-bs-target="#delete-modal"
                        >
                            <i data-feather="trash-2" className="feather-trash-2"></i>
                        </Link>
                    </div>
                </div>
            ),
        },
    ];


    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4 className="fw-bold">Money Transfer</h4>
                                <h6>Manage Money Transfer List</h6>
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
                                className="btn btn-primary text-white"
                                data-bs-toggle="modal"
                                data-bs-target="#add-units"
                            >
                                <PlusCircle className="me-2" />
                                Add Money Transfer
                            </Link>
                        </div>
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
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Recently Added
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Ascending
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Desending
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Last Month
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
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
            {/* Add account*/}
            <div className="modal fade" id="add-units">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="page-wrapper-new p-0">
                            <div className="content">
                                <div className="modal-header">
                                    <div className="page-title">
                                        <h4>Create Account</h4>
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
                                <div className="modal-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12 mb-3">
                                                <label className="form-label">
                                                    Account Type<span className="text-danger ms-1">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    options={AccountType}
                                                    placeholder="Choose"
                                                />
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <label className="form-label">
                                                    Account Type<span className="text-danger ms-1">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    options={AccountType}
                                                    placeholder="Choose"
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-2 amount position-relative">
                                                    <label className="form-label">
                                                        Amount<span className="text-danger ms-1">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue={1800}
                                                    />
                                                    <i className="ti ti-currency-dollar" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <Link
                                        to="#"
                                        className="btn btn-primary fs-13 fw-medium p-2 px-3"
                                    >
                                        Submit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add account*/}

            {/* Edit ac*/}
            <div className="modal fade" id="edit-units">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="page-wrapper-new p-0">
                            <div className="content">
                                <div className="modal-header">
                                    <div className="page-title">
                                        <h4>Edit Account</h4>
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
                                <div className="modal-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12 mb-3">
                                                <label className="form-label">
                                                    Account Type<span className="text-danger ms-1">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    options={AccountType}
                                                    placeholder="Choose"
                                                />
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <label className="form-label">
                                                    Account Type<span className="text-danger ms-1">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    options={AccountType}
                                                    placeholder="Choose"
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-2 amount position-relative">
                                                    <label className="form-label">
                                                        Amount<span className="text-danger ms-1">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue={1800}
                                                    />
                                                    <i className="ti ti-currency-dollar" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <Link
                                        to="#"
                                        className="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
                                    >
                                        Save Changes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Edit ac */}
            {/* delete modal */}
            <div className="modal fade" id="delete-modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="page-wrapper-new p-0">
                            <div className="content p-5 px-3 text-center">
                                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                                    <i className="ti ti-trash fs-24 text-danger" />
                                </span>
                                <h4 className="fs-20 fw-bold mb-2 mt-1">Delete Account</h4>
                                <p className="mb-0 fs-16">
                                    Are you sure you want to delete account?
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
                                        className="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
                                    >
                                        Yes Delete
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Moneytransfer
