import React from 'react'
import TooltipIcons from '../../core/common/tooltip-content/tooltipIcons'
import RefreshIcon from '../../core/common/tooltip-content/refresh'
import CollapesIcon from '../../core/common/tooltip-content/collapes';
import Table from "../../core/pagination/datatable";
import { contact_data } from '../../core/json/contactsData';
import ImageWithBasePath from '../../core/img/imagewithbasebath';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { PlusCircle } from 'feather-icons-react/build/IconComponents';

const Contacts = () => {

    const data = contact_data;

    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            render: (text, record) => (
                <div className="d-flex align-items-center">
                    <Link to="#" className="avatar avatar-md me-2">
                        <ImageWithBasePath src={record.image} alt="product" />
                    </Link>
                    <Link to="#">{text}</Link>
                </div>

            ),
            sorter: (a, b) => a.Name.length - b.Name.length,
        },
        {
            title: "Email",
            dataIndex: "Email",
            sorter: (a, b) => a.Email.length - b.Email.length,
        },

        {
            title: "Phone",
            dataIndex: "Phone",
            sorter: (a, b) => a.Phone.length - b.Phone.length,
        },
        {
            title: "Role",
            dataIndex: "Role",
            sorter: (a, b) => a.Role.length - b.Role.length,
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (text) => (
                <>
                    <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white bg-success fs-10">
                        <i className="ti ti-point-filled me-1 fs-11" />
                        {text}
                    </span>

                </>
            ),
            sorter: (a, b) => a.Status.length - b.Status.length,
        },

        {
            title: "Action",
            dataIndex: "action",
            render: () => (
                <div className="edit-delete-action d-flex align-items-center">
                    <Link
                        className="me-2 p-2 d-flex align-items-center border rounded"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-contact"
                    >
                        <i data-feather="edit" className="feather-edit" />
                    </Link>
                    <Link
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        className="p-2 d-flex align-items-center border rounded"
                        to="#"
                    >
                        <i data-feather="trash-2" className="feather-trash-2" />
                    </Link>
                </div>

            ),
            sorter: (a, b) => a.createdby.length - b.createdby.length,
        },
    ];

    const contactType = [
        { label: 'Admin', value: '1' },
        { label: 'Salesman', value: '2' },
    ]

    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4 className="fw-bold">Contacts</h4>
                                <h6>Manage your contacts</h6>
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
                                data-bs-target="#add-contact"
                            >
                                <i className="ti ti-circle-plus me-1" />
                                Add Contact
                            </Link>
                        </div>
                    </div>
                    {/* /product list */}
                    <div className="card">
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
                                        Status
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Active
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
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
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>
                    {/* /product list */}
                </div>
                <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
                    <p className="mb-0 text-gray-9">
                        2025 © Swarna. All Right Reserved
                    </p>
                    <p>
                        Designed &amp; Developed by{" "}
                        <Link to="#" className="text-primary">
                            Backend Coders
                        </Link>
                    </p>
                </div>
            </div>
            <>
                {/* Add Customer */}
                <div className="modal fade" id="add-contact">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="page-title">
                                    <h4>Add Contact</h4>
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
                            <form action="contacts.html">
                                <div className="modal-body">
                                    <div className="new-employee-field">
                                        <div className="profile-pic-upload">
                                            <div className="profile-pic">
                                                <span>
                                                    <PlusCircle className="plus-down-add" />
                                                    Add Image
                                                </span>
                                            </div>
                                            <div className="mb-3">
                                                <div className="image-upload mb-0">
                                                    <input type="file" />
                                                    <div className="image-uploads">
                                                        <h4>Upload Image</h4>
                                                    </div>
                                                </div>
                                                <p className="mt-2">JPEG, PNG up to 2 MB</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <label className="form-label">
                                                First Name<span className="text-danger ms-1">*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <label className="form-label">
                                                Last Name<span className="text-danger ms-1">*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <label className="form-label">
                                                Email<span className="text-danger ms-1">*</span>
                                            </label>
                                            <input type="email" className="form-control" />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <label className="form-label">
                                                Phone<span className="text-danger ms-1">*</span>
                                            </label>
                                            <input type="tel" className="form-control" />
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Contact Type <span className="text-danger">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    options={contactType}
                                                    placeholder="Choose"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                                <span className="status-label">Status</span>
                                                <input
                                                    type="checkbox"
                                                    id="user2"
                                                    className="check"
                                                    defaultChecked=""
                                                />
                                                <label htmlFor="user2" className="checktoggle">
                                                    {" "}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary fs-13 fw-medium p-2 px-3"
                                    >
                                        Add Contact
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* /Add Customer */}
                {/* Edit Customer */}
                <div className="modal fade" id="edit-contact">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="page-title">
                                    <h4>Edit Contact</h4>
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
                            <form action="contacts.html">
                                <div className="modal-body">
                                    <div className="new-employee-field">
                                        <div className="profile-pic-upload image-field">
                                            <div className="profile-pic p-2">
                                                <img
                                                    src="./assets/img/users/user-41.jpg"
                                                    className="object-fit-cover h-100 rounded-1"
                                                    alt="user"
                                                />
                                                <button type="button" className="close rounded-1">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="mb-3">
                                                <div className="image-upload mb-0">
                                                    <input type="file" />
                                                    <div className="image-uploads">
                                                        <h4>Change Image</h4>
                                                    </div>
                                                </div>
                                                <p className="mt-2">JPEG, PNG up to 2 MB</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <label className="form-label">
                                                First Name<span className="text-danger ms-1">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="Carl"
                                            />
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <label className="form-label">
                                                Last Name<span className="text-danger ms-1">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="Evans"
                                            />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <label className="form-label">
                                                Email<span className="text-danger ms-1">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                defaultValue="carlevans@example.com"
                                            />
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <label className="form-label">
                                                Phone<span className="text-danger ms-1">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                defaultValue={+12163547758}
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Contact Type <span className="text-danger">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    options={contactType}
                                                    placeholder="Choose"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                                <span className="status-label">Status</span>
                                                <input
                                                    type="checkbox"
                                                    id="user1"
                                                    className="check"
                                                    defaultChecked=""
                                                />
                                                <label htmlFor="user1" className="checktoggle">
                                                    {" "}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* /Edit Customer */}
                {/* delete modal */}
                <div className="modal fade" id="delete-modal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="page-wrapper-new p-0">
                                <div className="content p-5 px-3 text-center">
                                    <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                                        <i className="ti ti-trash fs-24 text-danger" />
                                    </span>
                                    <h4 className="fs-20 fw-bold mb-2 mt-1">Delete Contact</h4>
                                    <p className="mb-0 fs-16">
                                        Are you sure you want to delete contact?
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
                                            className="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
                                        >
                                            Yes Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default Contacts
