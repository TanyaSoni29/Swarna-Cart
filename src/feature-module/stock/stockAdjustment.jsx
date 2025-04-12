import React, { useState } from "react";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Edit, Trash2 } from "react-feather";
import Table from "../../core/pagination/datatable";
import { useSelector } from "react-redux";
import CommonFooter from "../../core/common/footer/commonFooter";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import { FileText, MinusCircle, PlusCircle, Search } from "feather-icons-react/build/IconComponents";
import { Addition, ResponsiblePerson, Store, WareHouse } from "../../core/common/selectOption/selectOption";

const StockAdjustment = () => {
  const dataSource = useSelector((state) => state.rootReducer.managestockdata);


  const columns = [
    {
      title: "Warehouse",
      dataIndex: "Warehouse",
      sorter: (a, b) => a.Warehouse.length - b.Warehouse.length,
    },
    {
      title: "Shop",
      dataIndex: "Shop",
      sorter: (a, b) => a.Shop.length - b.Shop.length,
    },
    {
      title: "Product",
      dataIndex: "Product",
      render: (text, record) => (
        <span className="userimgname">
          <Link to="#" className="product-img">
            <ImageWithBasePath alt="img" src={record.Product.Image} />
          </Link>
          <Link to="#">{record.Product.Name}</Link>
        </span>
      ),
      sorter: (a, b) => a.Product.Name.length - b.Product.Name.length,
    },

    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },

    {
      title: "Person",
      dataIndex: "Person",
      render: (text, record) => (
        <span className="userimgname">
          <Link to="#" className="product-img">
            <ImageWithBasePath alt="img" src={record.Person.Image} />
          </Link>
          <Link to="#">{record.Person.Name}</Link>
        </span>
      ),
      sorter: (a, b) => a.Person.Name.length - b.Person.Name.length,
    },

    {
      title: "Qty",
      dataIndex: "Quantity",
      sorter: (a, b) => a.Quantity.length - b.Quantity.length,
    },

    {
      title: "",
      dataIndex: "action",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <div className="input-block add-lists"></div>

            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal" data-bs-target="#view-notes"
            >
              <FileText className="feather-file-text" />
            </Link>
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

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Stock Adjustment</h4>
                <h6>Manage your stock adjustment</h6>
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
                Add Adjustment
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
                    Warehouse
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
                        Quaint Warehouse{" "}
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
      <>
        {/* Add Adjustment */}
        <div className="modal fade" id="add-units">
          <div className="modal-dialog modal-dialog-centered stock-adjust-modal">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Adjustment</h4>
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
                  <div className="search-form mb-3">
                    <label className="form-label">
                      Product<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Product"
                    />
                    <Search className="feather-search" />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Warehouse<span className="text-danger ms-1">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={WareHouse}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Reference Number<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
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
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Responsible Person
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={ResponsiblePerson}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="summer-description-box">
                      <label className="form-label">
                        Notes<span className="text-danger ms-1">*</span>
                      </label>
                      <textarea className="form-control" defaultValue={""} />
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
                    Create Adjustment
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Adjustment */}
        {/* Edit Adjustment */}
        <div className="modal fade" id="edit-units">
          <div className="modal-dialog modal-dialog-centered stock-adjust-modal">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Edit Adjustment</h4>
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
              <form action="stock-adjustment.html">
                <div className="modal-body">
                  <div className="mb-3 search-form">
                    <label className="form-label">
                      Product<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Nike Jordan"
                    />
                    <i data-feather="search" className="feather-search" />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Warehouse<span className="text-danger ms-1">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={WareHouse}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Reference Number<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="PT002"
                        />
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
                                <th>Type</th>
                                <th />
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
                                  <div className="product-quantity border-0 bg-gray-transparent">
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
                                  <Select
                                    classNamePrefix="react-select"
                                    options={Addition}
                                    placeholder="Choose"
                                  />
                                </td>
                                <td>
                                  <div className="edit-delete-action d-flex align-items-center">
                                    <Link
                                      className="p-2 border rounded d-flex align-items-center"
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
                      <div className="mb-3">
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
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Responsible Person
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={ResponsiblePerson}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3 summer-description-box">
                        <label className="form-label">
                          Notes<span className="text-danger ms-1">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          defaultValue={
                            "The Jordan brand is owned by Nike (owned by the Knight family), as, at the time, the company was building its strategy to work with athletes to launch shows that could inspire consumers.Although Jordan preferred Converse and Adidas, they simply could not match the offer Nike made. "
                          }
                        />
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
                  <Link to="#" className="btn btn-primary">
                    Save Changes
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Adjustment */}
        {/* View Notes */}
        <div className="modal fade" id="view-notes">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Notes</h4>
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
              <div className="modal-body">
                <p>
                  The Jordan brand is owned by Nike (owned by the Knight family), as,
                  at the time, the company was building its strategy to work with
                  athletes to launch shows that could inspire consumers.Although
                  Jordan preferred Converse and Adidas, they simply could not match
                  the offer Nike made. Jordan also signed with Nike because he loved
                  the way they wanted to market him with the banned colored shoes.
                  Nike promised to cover the fine Jordan would receive from the NBA.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /View Notes */}
      </>

    </>
  );
};

export default StockAdjustment;
