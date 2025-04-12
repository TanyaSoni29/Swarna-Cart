import React from 'react'
import CommonFooter from '../../core/common/footer/commonFooter';
import Table from "../../core/pagination/datatable";
import { ReviewsData } from '../../core/json/reviewsdata';
import TooltipIcons from '../../core/common/tooltip-content/tooltipIcons';
import RefreshIcon from '../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../core/common/tooltip-content/collapes';
import { PlusCircle } from 'feather-icons-react/build/IconComponents';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../core/img/imagewithbasebath';

const Reviews = () => {



    const data = ReviewsData;


    const columns = [
        {
            title: "Product Name",
            dataIndex: "Product_Name",
            render: (text, render) => (
                <div className="d-flex align-items-center">
                    <Link to="#" className="avatar avatar-md">
                        <ImageWithBasePath src={render.image} alt="product" />
                    </Link>
                    <Link to="#">{text}</Link>
                </div>

            ),
            sorter: (a, b) => a.Product_Name.length - b.Product_Name.length,
        },
        {
            title: "Author",
            dataIndex: "Author",
            render: (text, render) => (
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-sm">
                        <Link to="#" className="avatar avatar-md me-2">
                            <ImageWithBasePath src={render.User_image} alt="product" />
                        </Link>
                    </span>
                    <Link to="#">{text}</Link>
                </div>
            ),
            sorter: (a, b) => a.Author.length - b.Author.length,
        },

        {
            title: "Review",
            dataIndex: "Review",
            sorter: (a, b) => a.Review.length - b.Review.length,
        },

        {
            title: "Ratings",
            dataIndex: "Ratings",
            render: () => (
                <>
                    <div className="d-flex align-items-center">
                        <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                        </span>
                        <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                        </span>
                        <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                        </span>
                        <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                        </span>
                        <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                        </span>
                    </div>

                </>
            ),
            sorter: (a, b) => a.Email.length - b.Email.length,
        },

        {
            title: "Date",
            dataIndex: "Date",
            sorter: (a, b) => a.Date.length - b.Date.length,
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (text) => (
                <>
                    <span className={`badge ${text === 'Published' ? 'badge-success' : 'badge-danger'}`}>
                        <i className="ti ti-point-filled" />
                        {text}
                    </span>

                </>
            ),
            sorter: (a, b) => a.Unit.length - b.Unit.length,
        },

        {
            title: "",
            dataIndex: "action",
            render: () => (
                <div className="edit-delete-action">
                    <Link
                        className="me-2 p-2"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-review"
                    >
                        <i data-feather="edit" className="feather-edit" />
                    </Link>
                    <Link
                        className="p-2"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_review"
                    >
                        <i data-feather="trash-2" className="feather-trash-2" />
                    </Link>
                </div>

            ),
            sorter: (a, b) => a.action.length - b.action.length,
        },
    ];


    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4 className="fw-bold">Review</h4>
                                <h6>Manage your reviews</h6>
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
                                data-bs-target="#add-review"
                            >
                                <PlusCircle  className="me-2"/>
                                Add Product
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
                                        Rating
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                5{" "}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                4
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                3
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                1{" "}
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
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Published
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Pending
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
                        <div className="card-body">
                            <div className=" table-responsive">
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>
                    {/* /product list */}
                </div>
                <CommonFooter />
            </div>

            {/* Add Review */}
            <div className="modal fade" id="add-review">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="page-title">
                                <h4>Add Review</h4>
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
                        <form>
                            <div className="modal-body">
                                <div className="new-employee-field">
                                    <div className="profile-pic-upload">
                                        <div className="profile-pic">
                                            <span>
                                                <i data-feather="plus-circle" className="plus-down-add" />{" "}
                                                Add Image
                                            </span>
                                        </div>
                                        <div className="mb-3">
                                            <div className="image-upload mb-0">
                                                <input type="file" />
                                                <div className="image-uploads">
                                                    <h4>Upload Image</h4>
                                                </div>
                                                <p className="mb-0 mt-1 fs-13">JPEG, PNG up to 2 MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Author <i className="text-danger ms-1">*</i>
                                        </label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Product <i className="text-danger ms-1">*</i>
                                        </label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Ratings <i className="text-danger ms-1">*</i>
                                        </label>
                                        <div className="d-flex align-items-center">
                                            <span>
                                                <i className="ti ti-star-filled text-light-transparent" />
                                            </span>
                                            <span>
                                                <i className="ti ti-star-filled text-light-transparent" />
                                            </span>
                                            <span>
                                                <i className="ti ti-star-filled text-light-transparent" />
                                            </span>
                                            <span>
                                                <i className="ti ti-star-filled text-light-transparent" />
                                            </span>
                                            <span>
                                                <i className="ti ti-star-filled text-light-transparent" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Review <i className="text-danger ms-1">*</i>
                                        </label>
                                        <textarea className="form-control" defaultValue={""} />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <label className="form-label">Status</label>
                                        <label className="switch">
                                            <input type="checkbox" checked />
                                            <span className="slider round" />
                                        </label>
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
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Review */}
            {/* Edit Review */}
            <div className="modal fade" id="edit-review">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="page-title">
                                <h4>Edit Review</h4>
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
                                <div className="new-employee-field">
                                    <div className="profile-pic-upload">
                                        <div className="profile-pic edit-review people-profile-pic p-2 border rounded">
                                            <img src="assets/img/users/user-08.jpg" alt="Img" />
                                            <a href="#">
                                                <i data-feather="x-square" className="x-square-add" />
                                            </a>
                                        </div>
                                        <div className="mb-3">
                                            <div className="image-upload mb-0">
                                                <input type="file" />
                                                <div className="image-uploads">
                                                    <h4>Change Image</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Author <i className="text-danger ms-1">*</i>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Carl Evans"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Product <i className="text-danger ms-1">*</i>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Lenovo IdeaPad 3"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Ratings <i className="text-danger ms-1">*</i>
                                    </label>
                                    <div className="d-flex align-items-center">
                                        <span>
                                            <i className="ti ti-star-filled text-warning me-1" />
                                        </span>
                                        <span>
                                            <i className="ti ti-star-filled text-warning me-1" />
                                        </span>
                                        <span>
                                            <i className="ti ti-star-filled text-warning me-1" />
                                        </span>
                                        <span>
                                            <i className="ti ti-star-filled text-warning me-1" />
                                        </span>
                                        <span>
                                            <i className="ti ti-star-filled text-warning me-1" />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Review <i className="text-danger ms-1">*</i>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        defaultValue={"Sleek design and excellent battery life"}
                                    />
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <label className="form-label">Status</label>
                                    <label className="switch">
                                        <input type="checkbox" checked />
                                        <span className="slider round" />
                                    </label>
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
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Review */}
            {/* Delete Review */}
            <div className="modal fade modal-default" id="delete_review">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div className="success-wrap text-center">
                                <form>
                                    <div className="icon-success bg-danger-transparent text-danger mb-2">
                                        <i className="ti ti-trash" />
                                    </div>
                                    <h3 className="mb-2">Delete Review</h3>
                                    <p className="fs-16 mb-3">
                                        Are you sure you want to delete review?
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                                        <button
                                            type="button"
                                            className="btn btn-md btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            No, Cancel
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
            {/* /Delete Review */}


        </div>
    )
}

export default Reviews
