import React from 'react'
import CommonFooter from '../../../core/common/footer/commonFooter'
import TooltipIcons from '../../../core/common/tooltip-content/tooltipIcons'
import RefreshIcon from '../../../core/common/tooltip-content/refresh'
import CollapesIcon from '../../../core/common/tooltip-content/collapes'
import { Calendar } from 'feather-icons-react/build/IconComponents'
import { DatePicker, Table } from 'antd';
import { Link } from 'react-router-dom'
import { AccountStatementData } from '../../../core/json/accountstatementData'

const Accountstatement = () => {

    const dataSource = AccountStatementData;

    const columns = [
        {
            title: "Reference Number",
            dataIndex: "Reference_Number",
            sorter: (a, b) => a.Reference_Number.length - b.Reference_Number.length,
        },
        {
            title: "Date",
            dataIndex: "Date",
            sorter: (a, b) => a.Date.length - b.Date.length,
        },
        {
            title: "Category",
            dataIndex: "Category",
            sorter: (a, b) => a.Category.length - b.Category.length,
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
            title: "Amount",
            dataIndex: "Amount",
            sorter: (a, b) => a.Amount.length - b.Amount.length,
        },
        {
            title: "Transaction Type",
            dataIndex: "Transaction_Type",
            render: (text) => (
                <span className={`d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white ${text === 'Debit' ? 'bg-danger' : 'bg-success'} fs-10`}>
                    <i className="ti ti-point-filled me-1 fs-11" />
                    {text}
                </span>

            ),
            sorter: (a, b) => a.Transaction_Type.length - b.Transaction_Type.length,
        },
        {
            title: "Balance",
            dataIndex: "Balance",
            sorter: (a, b) => a.Balance.length - b.Balance.length,
        },
    ];

    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4 className="fw-bold">Account Statement</h4>
                                <h6>View Your Statement</h6>
                            </div>
                        </div>
                        <ul className="table-top-head">
                            <TooltipIcons />
                            <RefreshIcon />
                            <CollapesIcon />
                        </ul>
                    </div>
                    {/* /product list */}
                    <div className="card">
                        <div className="card-body">
                            <div className="row row-gap-2 align-items-end">
                                <div className="col-md-4">
                                    <div className="dropdown me-2">
                                        <label className="form-label">Choose Your Date</label>
                                        <div className="input-groupicon trail-balance">
                                            <Calendar className="info-img" />
                                            <DatePicker
                                                className="form-control datetimepicker"
                                                placeholder="dd/mm/yyyy"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="dropdown">
                                        <label className="form-label">Account</label>
                                        <Link
                                            to="#"
                                            className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center w-100"
                                            data-bs-toggle="dropdown"
                                        >
                                            Select
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
                                <div className="col-md-2">
                                    <button className="btn btn-primary shadow-none w-100">
                                        Submit
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h4>
                                Statement of Account :{" "}
                                <span className="badge bg-soft-primary">HBSC - 3298784309485</span>
                            </h4>
                        </div>
                        <div className="table-responsive">
                            <Table columns={columns} dataSource={dataSource} footer={() => <>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h5>Total</h5>
                                    <h5>$33268.53</h5>
                                </div>
                            </>} />
                        </div>
                    </div>
                    {/* /product list */}
                </div>
                <CommonFooter />
            </div>

        </div>
    )
}

export default Accountstatement
