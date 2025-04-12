import React from 'react'
import TooltipIcons from '../../../core/common/tooltip-content/tooltipIcons'
import RefreshIcon from '../../../core/common/tooltip-content/refresh'
import CollapesIcon from '../../../core/common/tooltip-content/collapes'
import { DollarSign, Download, Edit, Eye, PlusCircle, Trash2 } from 'feather-icons-react/build/IconComponents'
import Table from "../../../core/pagination/datatable";
import { onlineOrderData } from '../../../core/json/onlineOrderData'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/img/imagewithbasebath'
import OnlineorderModal from '../online-order/onlineorderModal'
import CommonDeleteModal from '../../../core/common/modal/commonDeleteModal'
import CommonFooter from '../../../core/common/footer/commonFooter'

const PosOrder = () => {

    const dataSource = onlineOrderData;

    const columns = [
        {
            title: "Customer Name",
            dataIndex: "customer",
            render: (text, render) => (
                <div className="d-flex align-items-center">
                    <Link to="#" className="avatar avatar-md me-2">
                        <ImageWithBasePath src={`assets/img/users/${render.image}`} alt="product" />
                    </Link>
                    <Link to="#">{text}</Link>
                </div>

            ),
            sorter: (a, b) => a.customer.length - b.customer.length,
        },
        {
            title: "Reference",
            dataIndex: "reference",
            sorter: (a, b) => a.reference.length - b.reference.length,
        },
        {
            title: "Date",
            dataIndex: "date",
            sorter: (a, b) => a.date.length - b.date.length,
        },

        {
            title: "Status",
            dataIndex: "status",
            render: (render) => (
                <span className={`badge ${render === 'Pending' ? 'badge-cyan' : render === 'Completed' ? 'badge-success' : ''} `}>{render}</span>
            ),
            sorter: (a, b) =>
                a.status.length - b.status.length,
        },
        {
            title: "Grand Total",
            dataIndex: "total",

            sorter: (a, b) => a.total.length - b.total.length,
        },
        {
            title: "Paid",
            dataIndex: "paid",
            sorter: (a, b) => a.paid.length - b.paid.length,
        },
        {
            title: "Due",
            dataIndex: "due",
            sorter: (a, b) => a.due.length - b.due.length,
        },
        {
            title: "Payment Status",
            dataIndex: "paymentstatus",
            render: (render) => (
                <span className={`badge badge-xs shadow-none ${render === 'Unpaid' ? 'badge-soft-danger' : render === 'Paid' ? 'badge-soft-success' : 'badge-soft-warning'} `}><i className="ti ti-point-filled me-1"></i>{render}</span>
            ),
            sorter: (a, b) => a.paymentstatus.length - b.paymentstatus.length,
        },
        {
            title: "Biller",
            dataIndex: "biller",
            sorter: (a, b) => a.biller.length - b.biller.length,
        },

        {
            title: "",
            dataIndex: "action",
            render: () => (
                <>
                    <Link
                        className="action-set"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                    >
                        <i className="fa fa-ellipsis-v" aria-hidden="true" />

                    </Link>
                    <ul className="dropdown-menu">
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#sales-details-new"
                            >
                                <Eye className="info-img" />
                                Sale Detail
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="edit-sales.html"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-sales-new"
                            >
                                <Edit className="info-img" />
                                Edit Sale
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#showpayment"
                            >
                                <DollarSign className="info-img" />
                                Show Payments
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#createpayment"
                            >
                                <PlusCircle className="info-img" />
                                Create Payment
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="dropdown-item">
                                <Download className="info-img" />
                                Download pdf
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item mb-0"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                            >
                                <Trash2 className="info-img" />
                                Delete Sale
                            </Link>
                        </li>
                    </ul>
                </>

            ),
            sorter: (a, b) => a.createdby.length - b.createdby.length,
        },
    ];

    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4>POS Orders</h4>
                                <h6>Manage Your pos orders</h6>
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
                                data-bs-target="#add-sales-new"
                            >
                              <i className='ti ti-circle-plus me-1'></i> Add Sales
                            </Link>
                        </div>
                    </div>
                    {/* /product list */}
                    <div className="card table-list-card manage-stock">
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
                                        Customer
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Carl Evans
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Minerva Rameriz
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Robert Lamon
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Patricia Lewis
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
                                        Staus
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Completed
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
                                <div className="dropdown me-2">
                                    <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                    >
                                        Payment Status
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Paid
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Unpaid
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Overdue
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
                            <div className="custom-datatable-filter table-responsive">
                                <Table columns={columns} dataSource={dataSource} />
                            </div>
                        </div>
                    </div>
                    {/* /product list */}
                </div>
                <CommonFooter />
            </div>
            <OnlineorderModal />
            <CommonDeleteModal />
        </div>
    )
}

export default PosOrder
