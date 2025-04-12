import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import CommonFooter from "../../core/common/footer/commonFooter";
import { PaperSize, Store, WareHouse } from "../../core/common/selectOption/selectOption";
import { MinusCircle, PlusCircle } from "feather-icons-react/build/IconComponents";
import CommonDeleteModal from "../../core/common/modal/commonDeleteModal";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
const PrintBarcode = () => {

  const [quantity, setQuantity] = useState(4);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="page-wrapper notes-page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Print Barcode</h4>
                <h6>Manage your barcodes</h6>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <ul className="table-top-head">
                <RefreshIcon />
                <CollapesIcon />
              </ul>
            </div>
          </div>
          <div className="barcode-content-list">
            <form>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="row seacrh-barcode-item mb-1">
                    <div className="col-sm-6 mb-3 seacrh-barcode-item-one">
                      <label className="form-label">
                        Warehouse<span className="text-danger ms-1">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={WareHouse}
                        placeholder="Choose"
                      />
                    </div>
                    <div className="col-sm-6 mb-3 seacrh-barcode-item-one">
                      <label className="form-label">
                        Store<span className="text-danger ms-1">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={Store}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3 search-form seacrh-barcode-item">
                    <div className="searchInput">
                      <label className="form-label">
                        Product<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="dropdownsearchClickable"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        className="form-control text-gray-3"
                        placeholder="Search Product by Code"
                      />
                      <div className="resultBox"></div>
                      <div className="icon">
                        <i className="fas fa-search" />
                      </div>
                      <div
                        className="dropdown-menu search-dropdown w-100 h-auto rounded-1 mt-2"
                        aria-labelledby="dropdownsearchClickable"
                      >
                        <ul>
                          <li className="fs-14 text-gray-9 mb-2">Amazon Echo Dot</li>
                          <li className="fs-14 text-gray-9 mb-2">Armani Belt</li>
                          <li className="fs-14 text-gray-9 mb-2">Apple Watch</li>
                          <li className="fs-14 text-gray-9">Apple Iphone 14 Pro</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="col-lg-12">
              <div className="modal-body-table search-modal-header bg-light p-2 p-sm-4">
                <div className="table-responsive border rounded-1 barcode-table">
                  <table className="table  datatable mb-0">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>SKU</th>
                        <th>Code</th>
                        <th>Qty</th>
                        <th className="text-center no-sort bg-secondary-transparent" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="avatar avatar-md me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/products/stock-img-02.png"
                                alt="product"
                              />
                            </Link>
                            <Link to="#">Nike Jordan</Link>
                          </div>
                        </td>
                        <td>PT002</td>
                        <td>HG3FK</td>
                        <td>
                          <div className="product-quantity border-secondary-transparent">
                            <span className="quantity-btn">
                              <MinusCircle className="feather-search" />
                              onClick={handleDecrement}
                            </span>
                            <input
                              type="text"
                              className="quntity-input"
                              defaultValue={4}
                            />
                            <span className="quantity-btn">
                              +
                              <PlusCircle className="plus-circle" />
                              onClick={handleIncrement}
                            </span>
                          </div>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action">
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                              className="barcode-delete-icon"
                              to="#"
                            >
                              <i data-feather="trash-2" className="feather-trash-2" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="avatar avatar-md me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/products/stock-img-03.png"
                                alt="product"
                              />
                            </Link>
                            <Link to="#">Apple Series 5 Watch</Link>
                          </div>
                        </td>
                        <td>PT003</td>
                        <td>TEUIU7</td>
                        <td>
                          <div className="product-quantity border-secondary-transparent">
                            <span className="quantity-btn">
                              <MinusCircle className="feather-search" />
                              onClick={handleDecrement}
                            </span>
                            <input
                              type="text"
                              className="quntity-input"
                              defaultValue={4}
                            />
                            <span className="quantity-btn">
                              +
                              <PlusCircle className="plus-circle" />
                              onClick={handleIncrement}
                            </span>
                          </div>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action">
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                              className="barcode-delete-icon"
                              to="#"
                            >
                              <i data-feather="trash-2" className="feather-trash-2" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="paper-search-size">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <form className="mb-0">
                    <label className="form-label">
                      Paper Size<span className="text-danger ms-1">*</span>
                    </label>
                    <Select
                      classNamePrefix="react-select"
                      options={PaperSize}
                      placeholder="Choose"
                    />
                  </form>
                </div>
                <div className="col-lg-6 pt-3">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="search-toggle-list">
                        <p>Show Store Name</p>
                        <div className="m-0">
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input
                              type="checkbox"
                              id="user7"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user7" className="checktoggle mb-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="search-toggle-list">
                        <p>Show Product Name</p>
                        <div className="m-0">
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input
                              type="checkbox"
                              id="user8"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user8" className="checktoggle mb-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="search-toggle-list">
                        <p>Show Price</p>
                        <div className="m-0">
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input
                              type="checkbox"
                              id="user9"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user9" className="checktoggle mb-0">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-barcode-button">
              <Link
                to="#"
                className="btn btn-submit btn-primary me-2 mt-0"
                data-bs-toggle="modal"
                data-bs-target="#prints-barcode"
              >
                <span>
                  <i className="fas fa-eye me-2" />
                </span>
                Generate Barcode
              </Link>
              <Link
                to="#"
                className="btn btn-cancel btn-secondary fs-13 me-2"
              >
                <span>
                  <i className="fas fa-power-off me-2" />
                </span>
                Reset Barcode
              </Link>
              <Link
                to="#"
                className="btn btn-cancel btn-danger close-btn"
              >
                <span>
                  <i className="fas fa-print me-2" />
                </span>
                Print Barcode
              </Link>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>


      {/* Print Barcode */}
      <div className="modal fade" id="prints-barcode">
        <div className="modal-dialog modal-dialog-centered stock-adjust-modal barcode-modal">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Barcode</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16 shadow-none"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="d-flex justify-content-end">
                    <Link
                      to="#"
                      className="btn btn-cancel close-btn btn-danger shadow-none"
                    >
                      <span>
                        <i className="fas fa-print me-2" />
                      </span>
                      Print Barcode
                    </Link>
                  </div>
                  <div className="barcode-scan-header">
                    <h5>Nike Jordan</h5>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="barcode-scanner-link text-center">
                        <h6>Grocery Alpha</h6>
                        <p>Nike Jordan</p>
                        <p>Price: $400</p>
                        <div className="barscaner-img">
                          <ImageWithBasePath
                            src="./assets/img/barcode/barcode-01.png"
                            alt="Barcode"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="barcode-scanner-link text-center">
                        <h6>Grocery Alpha</h6>
                        <p>Nike Jordan</p>
                        <p>Price: $400</p>
                        <div className="barscaner-img">
                          <ImageWithBasePath
                            src="./assets/img/barcode/barcode-01.png"
                            alt="Barcode"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="barcode-scanner-link text-center">
                        <h6>Grocery Alpha</h6>
                        <p>Nike Jordan</p>
                        <p>Price: $400</p>
                        <div className="barscaner-img">
                          <ImageWithBasePath
                            src="./assets/img/barcode/barcode-01.png"
                            alt="Barcode"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="barcode-scan-header">
                    <h5>Apple Series 5 Watch</h5>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="barcode-scanner-link text-center">
                        <h6>Grocery Alpha</h6>
                        <p>Apple Series 5 Watch</p>
                        <p>Price: $300</p>
                        <div className="barscaner-img">
                          <ImageWithBasePath
                            src="./assets/img/barcode/barcode-02.png"
                            alt="Barcode"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Print Barcode */}


      <CommonDeleteModal />
    </>

  );
};

export default PrintBarcode;
