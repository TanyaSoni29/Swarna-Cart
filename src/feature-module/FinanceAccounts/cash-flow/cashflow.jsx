import React from 'react'
import TooltipIcons from '../../../core/common/tooltip-content/tooltipIcons'
import RefreshIcon from '../../../core/common/tooltip-content/refresh'
import CollapesIcon from '../../../core/common/tooltip-content/collapes'
import { Link } from 'react-router-dom'
import { CashFlowData } from '../../../core/json/cashFlowData'
import Table from "../../../core/pagination/datatable";

const Cashflow = () => {

    const dataSource = CashFlowData;
    const columns = [
        {
            title: "Date",
            dataIndex: "Date",
            sorter: (a, b) => a.Date.length - b.Date.length,
        },
        {
            title: "Bank & Account Number",
            dataIndex: "Bank_Account",
            sorter: (a, b) => a.Bank_Account.length - b.Bank_Account.length,
        },
        {
            title: "Credit",
            dataIndex: "Credit",
            sorter: (a, b) => a.Credit.length - b.Credit.length,
        },
        {
            title: "Description",
            dataIndex: "Description",
            sorter: (a, b) => a.Description.length - b.Description.length,
        },
        {
            title: "Credit",
            dataIndex: "Credit",
            sorter: (a, b) => a.Credit.length - b.Credit.length,
        },
        {
            title: "Debit",
            dataIndex: "Debit",
            sorter: (a, b) => a.Debit.length - b.Debit.length,
        },
        {
            title: "Account balance",
            dataIndex: "Account_balance",
            sorter: (a, b) => a.Account_balance.length - b.Account_balance.length,
        },
        {
            title: "Total Balance ",
            dataIndex: "Total_Balance",
            sorter: (a, b) => a.Total_Balance.length - b.Total_Balance.length,
        },
        {
            title: "Payment Method",
            dataIndex: "Payment_Method",
            sorter: (a, b) => a.Payment_Method.length - b.Payment_Method.length,
        },
    ];

    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="add-item d-flex">
                        <div className="page-title">
                            <h4 className="fw-bold">Cash Flow</h4>
                            <h6>View Your Cashflows </h6>
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
                            <div className="dropdown">
                                <Link
                                    to="#"
                                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                >
                                    Payment Method
                                </Link>
                                <ul className="dropdown-menu  dropdown-menu-end p-3">
                                    <li>
                                        <Link
                                            to="#"
                                            className="dropdown-item rounded-1"
                                        >
                                            Stripe
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="dropdown-item rounded-1"
                                        >
                                            Cash
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="dropdown-item rounded-1"
                                        >
                                            Paypal
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
            <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
                <p className="mb-0 text-gray-9">
                    2025 © Swarna. All Right Reserved
                </p>
                <p>
                    Designed &amp; Developed By{" "}
                    <Link to="#" className="text-primary">
                        Backend Coders
                    </Link>
                </p>
            </div>
        </div>

    )
}

export default Cashflow
