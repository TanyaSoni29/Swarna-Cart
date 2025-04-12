import React from 'react'
import CommonFooter from '../../../core/common/footer/commonFooter'
import { Link } from 'react-router-dom';
import Table from "../../../core/pagination/datatable";
import TooltipIcons from '../../../core/common/tooltip-content/tooltipIcons';
import RefreshIcon from '../../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../../core/common/tooltip-content/collapes';
import { BalanceSheetData } from '../../../core/json/balancesheetData';

const Balancesheet = () => {

    const dataSource = BalanceSheetData;

    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            sorter: (a, b) => a.Name.length - b.Name.length,
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
            title: "Debit",
            dataIndex: "Debit",
            sorter: (a, b) => a.Debit.length - b.Debit.length,
        },
        {
            title: "Balance",
            dataIndex: "Balance",
            sorter: (a, b) => a.Balance.length - b.Balance.length,
        },
    ];


    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="add-item d-flex">
                        <div className="page-title">
                            <h4 className="fw-bold">Balance Sheet</h4>
                            <h6>View Your Balance Sheet </h6>
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
                                    Select Store
                                </Link>
                                <ul className="dropdown-menu  dropdown-menu-end p-3">
                                    <li>
                                        <Link
                                            to="#"
                                            className="dropdown-item rounded-1"
                                        >
                                            Zephyr Indira
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="dropdown-item rounded-1"
                                        >
                                            Quillon Elysia
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
            <CommonFooter />
        </div>

    )
}

export default Balancesheet
