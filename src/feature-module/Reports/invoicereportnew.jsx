import React from 'react'
import CommonFooter from '../../core/common/footer/commonFooter';
import Table from "../../core/pagination/datatable";
import RefreshIcon from '../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../core/common/tooltip-content/collapes';
import { DatePicker } from 'antd';
import { CustomerName, Status } from '../../core/common/selectOption/selectOption';
import TooltipIcons from '../../core/common/tooltip-content/tooltipIcons';
import Select from "react-select";
import { Link } from 'react-router-dom';
import { invoicereportsdata } from '../../core/json/invoicereportsdata';

const Invoicereportnew = () => {


    // const route = all_routes;

    const data = invoicereportsdata;

    const columns = [
        {
            title: "Invoice Number",
            dataIndex: "invoiceNo",
            render: (text) => (
                <>
                    <Link to="#" className="text-primary">{text}</Link>
                </>
            ),
            sorter: (a, b) => a.invoiceNo.length - b.invoiceNo.length,
        },
        {
            title: "Customer",
            dataIndex: "customer",
            sorter: (a, b) => a.customer.length - b.customer.length,
        },


        {
            title: "Due Date",
            dataIndex: "dueDate",
            sorter: (a, b) => a.dueDate.length - b.dueDate.length,
        },

        {
            title: "Amount",
            dataIndex: "amount",
            sorter: (a, b) => a.amount.length - b.amount.length,
        },
        {
            title: "Paid",
            dataIndex: "paid",
            sorter: (a, b) => a.paid.length - b.paid.length,
        },

        {
            title: "Amount Due",
            dataIndex: "amountDue",
            sorter: (a, b) => a.amountDue.length - b.amountDue.length,
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text) => (
                <>
                    <span className={`badge ${text === 'Paid' ? 'badge-success ' : 'badge-danger'} d-inline-flex align-items-center badge-xs`}>
                        <i className="ti ti-point-filled me-1" />
                        {text}
                    </span>
                </>
            ),
            sorter: (a, b) => a.status.length - b.status.length,
        },

    ];


    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4>Invoice Report </h4>
                                <h6>Manage Your Invoice Report</h6>
                            </div>
                        </div>
                        <ul className="table-top-head">
                            <RefreshIcon />
                            <CollapesIcon />
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                            <div className="card border border-success sale-widget flex-fill">
                                <div className="card-body d-flex align-items-center">
                                    <span className="sale-icon bg-success text-white">
                                        <i className="ti ti-align-box-bottom-left-filled fs-24" />
                                    </span>
                                    <div className="ms-2">
                                        <p className="fw-medium mb-1">Total Amount</p>
                                        <div>
                                            <h3>$4,56,000</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                            <div className="card border border-info sale-widget flex-fill">
                                <div className="card-body d-flex align-items-center">
                                    <span className="sale-icon bg-info text-white">
                                        <i className="ti ti-align-box-bottom-left-filled fs-24" />
                                    </span>
                                    <div className="ms-2">
                                        <p className="fw-medium mb-1">Total Paid</p>
                                        <div>
                                            <h3>$2,56,42</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                            <div className="card border border-orange sale-widget flex-fill">
                                <div className="card-body d-flex align-items-center">
                                    <span className="sale-icon bg-orange text-white">
                                        <i className="ti ti-moneybag fs-24" />
                                    </span>
                                    <div className="ms-2">
                                        <p className="fw-medium mb-1">Total Unpaid</p>
                                        <div>
                                            <h3>$1,52,45</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                            <div className="card border border-danger sale-widget flex-fill">
                                <div className="card-body d-flex align-items-center">
                                    <span className="sale-icon bg-danger text-white">
                                        <i className="ti ti-alert-circle-filled fs-24" />
                                    </span>
                                    <div className="ms-2">
                                        <p className="fw-medium mb-1">Overdue</p>
                                        <div>
                                            <h3>$2,56,12</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body pb-1">
                            <form>
                                <div className="row align-items-end">
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label className="form-label">Choose Date&nbsp;</label>
                                                    <div className="input-icon-start position-relative">
                                                        <DatePicker
                                                            className="form-control datetimepicker"
                                                            placeholder="dd/mm/yyyy"
                                                        />
                                                        <span className="input-icon-left">
                                                            <i className="ti ti-calendar" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label className="form-label">Customer</label>
                                                    <Select
                                                        classNamePrefix="react-select"
                                                        options={CustomerName}
                                                        placeholder="Choose"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label className="form-label">Status</label>
                                                    <Select
                                                        classNamePrefix="react-select"
                                                        options={Status}
                                                        placeholder="Choose"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="mb-3">
                                            <button className="btn btn-primary w-100" type="submit">
                                                Generate Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* /product list */}
                    <div className="card table-list-card no-search">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <div>
                                <h4>Invoice Report</h4>
                            </div>
                            <ul className="table-top-head">
                                <TooltipIcons />
                                <li>
                                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print">
                                        <i className="ti ti-printer" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>
                    {/* /product list */}
                </div>
                <CommonFooter />
            </div>

        </div>
    )
}

export default Invoicereportnew
