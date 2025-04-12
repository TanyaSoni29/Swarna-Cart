import React from 'react'
import CommonFooter from '../../../core/common/footer/commonFooter'
import { DatePicker, Table } from 'antd';
import TooltipIcons from '../../../core/common/tooltip-content/tooltipIcons';
import RefreshIcon from '../../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../../core/common/tooltip-content/collapes';
import { all_routes } from '../../../Router/all_routes';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import ImageWithBasePath from '../../../core/img/imagewithbasebath';
import { productexpireddata } from '../../../core/json/productreportdata';

const ProductExpiredreport = () => {


    const data = productexpireddata;

    const route = all_routes

    const columns = [
        {
            title: "SKU",
            dataIndex: "SKU",
            render: (text) => (
                <Link to="#" className="text-orange">
                    {text}
                </Link>

            ),
            sorter: (a, b) => a.SKU.length - b.SKU.length,
        },
        {
            title: "Serial No",
            dataIndex: "Serial_No",
            sorter: (a, b) => a.Serial_No.length - b.Serial_No.length,
        },
        {
            title: "Product Name",
            dataIndex: "Product_Name",
            render: (text, record) => (
                <div className="d-flex align-items-center">
                    <Link to="#" className="avatar avatar-md">
                        <ImageWithBasePath
                            src={record.image}
                            className="img-fluid"
                            alt="img"
                        />
                    </Link>
                    <div className="ms-2">
                        <p className="text-dark mb-0">
                            <Link to="#">{text}</Link>
                        </p>
                    </div>
                </div>

            ),
            sorter: (a, b) => a.Product_Name.length - b.Product_Name.length,
        },

        {
            title: "Manufactured Date",
            dataIndex: "Manufactured_Date",
            sorter: (a, b) => a.Manufactured_Date.length - b.Manufactured_Date.length,
        },

        {
            title: "Expired Date",
            dataIndex: "Expired_Date",
            sorter: (a, b) => a.Expired_Date.length - b.Expired_Date.length,
        },
    ];


    const Store = [
        { value: "All", label: "All" },
        { value: "Electro Mart", label: "Electro Mart" },
        { value: "Quantum Gadgets", label: "Quantum Gadgets" },
        { value: "Prime Bazaar", label: "Prime Bazaar" },
    ];
    const Category = [
        { value: "All", label: "All" },
        { value: "Computers", label: "Computers" },
        { value: "Electronics", label: "Electronics" },
        { value: "Shoe", label: "Shoe" },
    ];
    const Brand = [
        { value: "All", label: "All" },
        { value: "Lenovo", label: "Lenovo" },
        { value: "Beats", label: "Beats" },
        { value: "Nike", label: "Nike" },
    ];
    const Product = [
        { value: "All", label: "All" },
        { value: "Lenovo IdeaPad 3", label: "Lenovo IdeaPad 3" },
        { value: "Beats Pro", label: "Beats Pro" },
        { value: "Nike Jordan", label: "Nike Jordan" },
    ];

    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="table-tab">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link className="nav-link " to={route.productreport}>
                                    Product Report
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={route.productexpiredreport}>
                                    Product Expiry Report
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={route.productquantityreport}>
                                    Product Quantity Alert
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="page-header">
                            <div className="add-item d-flex">
                                <div className="page-title">
                                    <h4>Product Expiry Report</h4>
                                    <h6>View Reports of Products</h6>
                                </div>
                            </div>
                            <ul className="table-top-head">
                                <RefreshIcon />
                                <CollapesIcon />
                            </ul>
                        </div>
                        <div className="card border-0">
                            <div className="card-body pb-1">
                                <form>
                                    <div className="row align-items-end">
                                        <div className="col-lg-10">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <label className="form-label">Choose Date</label>
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
                                                <div className="col-lg-9">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Store</label>
                                                                <Select
                                                                    classNamePrefix="react-select"
                                                                    options={Store}
                                                                    placeholder="Choose"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Category</label>
                                                                <Select
                                                                    classNamePrefix="react-select"
                                                                    options={Category}
                                                                    placeholder="Choose"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Brand</label>
                                                                <Select
                                                                    classNamePrefix="react-select"
                                                                    options={Brand}
                                                                    placeholder="Choose"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Product</label>
                                                                <Select
                                                                    classNamePrefix="react-select"
                                                                    options={Product}
                                                                    placeholder="Choose"
                                                                />
                                                            </div>
                                                        </div>
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
                                    <h4>Product Report</h4>
                                </div>
                                <ul className="table-top-head">
                                    <TooltipIcons />
                                    <li>
                                        <Link data-bs-toggle="tooltip" data-bs-placement="top" title="Print">
                                            <i className="ti ti-printer" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <Table
                                        columns={columns}
                                        dataSource={data}
                                       
                                    />
                                </div>
                            </div>
                        </div>
                        {/* /product list */}
                    </div>
                </div>
                <CommonFooter />
            </div>

        </div>
    )
}

export default ProductExpiredreport
