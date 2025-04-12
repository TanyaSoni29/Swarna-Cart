import React, { useState } from "react";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Trash2, Edit } from "react-feather";
import { useSelector } from "react-redux";
import Table from "../../core/pagination/datatable";
import CommonFooter from "../../core/common/footer/commonFooter";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import { Download, MinusCircle, PlusCircle } from "feather-icons-react/build/IconComponents";
import { From, Status, To, WarehouseFrom, WarehouseTo } from "../../core/common/selectOption/selectOption";
import DefaultEditor from "react-simple-wysiwyg";
import CommonDeleteModal from "../../core/common/modal/commonDeleteModal";

const StockTransfer = () => {
  const dataSource = useSelector((state) => state.rootReducer.stocktransferdata);

  const columns = [
    {
      title: "From Warehouse",
      dataIndex: "fromWarehouse",
      sorter: (a, b) => a.fromWarehouse.length - b.fromWarehouse.length,
    },
    {
      title: "To Warehouse",
      dataIndex: "toWarehouse",
      sorter: (a, b) => a.toWarehouse.length - b.toWarehouse.length,
    },
    {
      title: "No Of Products",
      dataIndex: "noOfProducts",
      sorter: (a, b) => a.noOfProducts.length - b.noOfProducts.length,
    },

    {
      title: "Quantity Transferred",
      dataIndex: "quantityTransferred",
      sorter: (a, b) =>
        a.quantityTransferred.length - b.quantityTransferred.length,
    },

    {
      title: "Ref Number",
      dataIndex: "refNumber",
      sorter: (a, b) => a.refNumber.length - b.refNumber.length,
    },

    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },

    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <div className="input-block add-lists"></div>

            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-units"
            >
              <Edit className="feather-edit" />
            </Link>

            <Link
              className="confirm-text p-2"
              to="#" data-bs-toggle="modal" data-bs-target="#delete-modal"
            >
              <Trash2 className="feather-trash-2" />
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.createdby.length - b.createdby.length,
    },
  ];


  const [quantity, setQuantity] = useState(4);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const [values, setValue] = useState();
  function onChange(e) {
    setValue(e.target.value);
  }


  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Stock Transfer</h4>
                <h6>Manage your stock transfer</h6>
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
                data-bs-target="#add-units"
              >
               <i className='ti ti-circle-plus me-1'></i>
                Add New
              </Link>
            </div>
            <div className="page-btn import">
              <Link
                to="#"
                className="btn btn-secondary color"
                data-bs-toggle="modal"
                data-bs-target="#view-notes"
              >
                <Download className="me-2" />
                Import Transfer
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
                    From Warehouse
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Lavish Warehouse
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Quaint Warehouse
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Traditional Warehouse
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Cool Warehouse
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
                    To Warehouse
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        North Zone Warehouse
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Nova Storage Hub
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Cool Warehouse
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Retail Supply Hub
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

      {/* Add Stock */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Transfer</h4>
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
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse From <span className="text-danger ms-1">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={WarehouseFrom}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse To <span className="text-danger ms-1">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={WarehouseTo}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Reference Number <span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3 search-form mb-3">
                      <label className="form-label">
                        Product <span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select Product"
                      />
                      <i data-feather="search" className="feather-search" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="search-form mb-0">
                      <label className="form-label">
                        Notes <span className="text-danger ms-1">*</span>
                      </label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
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
                <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                  Create
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Stock */}
      {/* Edit Stock */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Edit Transfer</h4>
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
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse From<span className="text-danger ms-1">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={WarehouseFrom}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse To<span className="text-danger ms-1">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={WarehouseTo}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Reference No<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={32434545}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="search-form mb-3">
                      <label className="form-label">
                        Product<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select Product"
                        defaultValue="Nike Jordan"
                      />
                      <i data-feather="search" className="feather-search" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="modal-body-table">
                      <div className="table-responsive">
                        <table className="table  datanew">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>SKU</th>
                              <th>Category</th>
                              <th>Qty</th>
                              <th>Action</th>
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
                              <td>Nike</td>
                              <td>
                                <div className="product-quantity bg-gray-transparent border-0">
                                  <span className="quantity-btn">
                                    <MinusCircle />
                                    onClick={handleDecrement}
                                  </span>
                                  <input
                                    type="text"
                                    className="quntity-input bg-transparent"
                                    defaultValue={2}
                                  />
                                  <span className="quantity-btn">
                                    +
                                    <PlusCircle className="plus-circle" />
                                    onClick={handleIncrement}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="edit-delete-action d-flex align-items-center justify-content-center">
                                  <Link
                                    className="p-2 d-flex align-items-center justify-content-center border rounded"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    <i
                                      data-feather="trash-2"
                                      className="feather-trash-2"
                                    />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3 search-form mb-0">
                      <label className="form-label">
                        Notes<span className="text-danger ms-1">*</span>
                      </label>
                      <DefaultEditor value={values} onChange={onChange} />
                    </div>
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
                <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                  Save Changes
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Stock */}
      {/* Import Transfer */}
      <div className="modal fade" id="view-notes">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Import Transfer</h4>
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
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        From<span className="text-danger ms-1">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={From}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        To<span className="text-danger ms-1">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={To}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Satus<span className="text-danger ms-1">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={Status}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6 col-12">
                    <div className="row">
                      <div>
                        <div className="modal-footer-btn download-file">
                          <Link to="javascript:void(0)" className="btn btn-submit">
                            Download Sample File
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3 image-upload-down">
                      <label className="form-label"> Upload CSV File</label>
                      <div className="image-upload download">
                        <input type="file" />
                        <div className="image-uploads">
                          <ImageWithBasePath src="assets/img/download-img.png" alt="img" />
                          <h4>
                            Drag and drop a <span>file to upload</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Shipping<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3 summer-description-box transfer">
                    <label className="form-label">Description</label>
                    <div id="summernote3"></div>
                    <p>Maximum 60 Characters</p>
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
                <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                  Submit
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Import Transfer */}
      <CommonDeleteModal />
    </>

  );
};

export default StockTransfer;
