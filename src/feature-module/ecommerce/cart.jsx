import React from 'react'
import CommonFooter from '../../core/common/footer/commonFooter'
import TooltipIcons from '../../core/common/tooltip-content/tooltipIcons'
import RefreshIcon from '../../core/common/tooltip-content/refresh'
import CollapesIcon from '../../core/common/tooltip-content/collapes'
import ImageWithBasePath from '../../core/img/imagewithbasebath'
import { Link } from 'react-router-dom'
import CounterThree from '../../core/common/counter/counterThree'

const Cart = () => {
    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4 className="fw-bold">Cart</h4>
                                <h6>Manage your cart</h6>
                            </div>
                        </div>
                        <ul className="table-top-head">
                            <TooltipIcons />
                            <RefreshIcon />
                            <CollapesIcon />
                        </ul>
                    </div>
                    <table className="table mb-4">
                        <thead>
                            <tr>
                                <th className="no-sort">
                                    <label className="checkboxs">
                                        <input type="checkbox" id="select-all" />
                                        <span className="checkmarks" />
                                    </label>
                                </th>
                                <th>
                                    Code <i className="ti ti-arrows-up-down fs-11 fw-medium ms-1" />
                                </th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th className="no-sort" />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label className="checkboxs">
                                        <input type="checkbox" />
                                        <span className="checkmarks" />
                                    </label>
                                </td>
                                <td>CU001 </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <Link to="#" className="avatar avatar-md">
                                            <ImageWithBasePath src="assets/img/products/stock-img-01.png" alt="product" />
                                        </Link>
                                        <Link to="#">Lenovo IdeaPad 3</Link>
                                    </div>
                                </td>
                                <td>$600</td>
                                <td>
                                    <div className="product-quantity border-0 bg-secondary-transparent">
                                        <CounterThree />
                                    </div>
                                </td>
                                <td>$160</td>
                                <td>
                                    <div className="edit-delete-action d-flex align-items-center">
                                        <Link
                                            className="p-2 d-flex align-items-center border rounded"
                                            to="#"
                                            
                                        >
                                            <i data-feather="trash-2" className="feather-trash-2" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="checkboxs">
                                        <input type="checkbox" />
                                        <span className="checkmarks" />
                                    </label>
                                </td>
                                <td>CU002 </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <Link to="#" className="avatar avatar-md">
                                            <ImageWithBasePath src="assets/img/products/stock-img-06.png" alt="product" />
                                        </Link>
                                        <Link to="#">Beats Pro</Link>
                                    </div>
                                </td>
                                <td>$160</td>
                                <td>
                                    <div className="product-quantity border-0 bg-secondary-transparent">
                                    <CounterThree />
                                    </div>
                                </td>
                                <td>$1200</td>
                                <td>
                                    <div className="edit-delete-action d-flex align-items-center">
                                        <Link
                                            className="p-2 d-flex align-items-center border rounded"
                                            to="#"
                                            
                                        >
                                            <i data-feather="trash-2" className="feather-trash-2" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="checkboxs">
                                        <input type="checkbox" />
                                        <span className="checkmarks" />
                                    </label>
                                </td>
                                <td>CU003 </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <Link to="#" className="avatar avatar-md">
                                            <ImageWithBasePath src="assets/img/products/stock-img-02.png" alt="product" />
                                        </Link>
                                        <Link to="#">Nike Jordan</Link>
                                    </div>
                                </td>
                                <td>$110</td>
                                <td>
                                    <div className="product-quantity border-0 bg-secondary-transparent">
                                    <CounterThree />
                                    </div>
                                </td>
                                <td>$330</td>
                                <td>
                                    <div className="edit-delete-action d-flex align-items-center">
                                        <Link
                                            className="p-2 d-flex align-items-center border rounded"
                                            to="#"
                                            
                                        >
                                            <i data-feather="trash-2" className="feather-trash-2" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="checkboxs">
                                        <input type="checkbox" />
                                        <span className="checkmarks" />
                                    </label>
                                </td>
                                <td>CU004 </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <Link to="#" className="avatar avatar-md">
                                            <ImageWithBasePath src="assets/img/products/stock-img-03.png" alt="product" />
                                        </Link>
                                        <Link to="#">Apple Series 5 Watch</Link>
                                    </div>
                                </td>
                                <td>$120</td>
                                <td>
                                    <div className="product-quantity border-0 bg-secondary-transparent">
                                    <CounterThree />
                                    </div>
                                </td>
                                <td>$1420</td>
                                <td>
                                    <div className="edit-delete-action d-flex align-items-center">
                                        <Link
                                            className="p-2 d-flex align-items-center border rounded"
                                            to="#"
                                            
                                        >
                                            <i data-feather="trash-2" className="feather-trash-2" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="checkboxs">
                                        <input type="checkbox" />
                                        <span className="checkmarks" />
                                    </label>
                                </td>
                                <td>CU005 </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <Link to="#" className="avatar avatar-md">
                                            <ImageWithBasePath src="assets/img/products/stock-img-04.png" alt="product" />
                                        </Link>
                                        <Link to="#">Amazon Echo Dot</Link>
                                    </div>
                                </td>
                                <td>$80</td>
                                <td>
                                    <div className="product-quantity border-0 bg-secondary-transparent">
                                    <CounterThree />
                                    </div>
                                </td>
                                <td>$1200</td>
                                <td>
                                    <div className="edit-delete-action d-flex align-items-center">
                                        <Link
                                            className="p-2 d-flex align-items-center border rounded"
                                            to="#"
                                            
                                        >
                                            <i data-feather="trash-2" className="feather-trash-2" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex align-items-center justify-content-between bg-white rounded border-gray p-4 mb-4">
                        <div className="d-flex align-items-center">
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Enter Coupon Code"
                            />
                            <Link to="#" className="btn btn-primary">
                                Apply
                            </Link>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="mb-0 me-2">Total Price : </p>
                            <p className="text-gray-9">Total 2230</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end mb-4">
                        <Link to="#" className="btn btn-secondary me-2">
                            Checkout
                        </Link>
                        <Link to="#" className="btn btn-primary">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
                <CommonFooter />
            </div>

        </div>
    )
}

export default Cart
