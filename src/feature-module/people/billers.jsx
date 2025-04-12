import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import Select from "react-select";
import { Edit, Eye, Trash2 } from "react-feather";
import Table from "../../core/pagination/datatable";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import CommonFooter from "../../core/common/footer/commonFooter";
import { BillerData } from "../../core/json/billerData";


const Biller = () => {
  const data = BillerData;


  const countries = [
    { label: "Choose Country", value: "" },
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
  ];
  const city = [
    { label: "Choose Country", value: "" },
    { label: "United Kingdom", value: "United Kingdom" },
    { label: "United State", value: "United State" },
  ];
  const state = [
    { label: "Choose Country", value: "" },
    { label: "United Kingdom", value: "United Kingdom" },
    { label: "United State", value: "United State" },
  ];

  const columns = [
    {
      title: "Code",
      dataIndex: "Code",
      sorter: (a, b) => a.Code.length - b.Code.length,
    },
    {
      title: "Biller",
      dataIndex: "Biller",
      render: (text, render) => (
        <>
          <div className="d-flex align-items-center">
            <Link to="#" className="avatar avatar-md me-2">
              <ImageWithBasePath src={`assets/img/users/${render.image}`} alt="product" />
            </Link>
            <Link to="#">{text}</Link>
          </div>
        </>
      ),
      sorter: (a, b) => a.Biller.length - b.Biller.length,
    },

    {
      title: "Company Name",
      dataIndex: "Company_Name",
      sorter: (a, b) => a.Company_Name.length - b.Company_Name.length,
    },

    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },

    {
      title: "Phone",
      dataIndex: "Phone",
      sorter: (a, b) => a.Phone.length - b.Phone.length,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      sorter: (a, b) => a.Phone_2.length - b.Phone_2.length,
    },

    {
      title: "Country",
      dataIndex: "Country",
      render: (text) => (
        <>
          <span className={`d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white  fs-10 ${text === 'Active' ? 'bg-success' : 'bg-danger'}`}>
            <i className="ti ti-point-filled me-1 fs-11" />
            {text}
          </span>

        </>
      ),
      sorter: (a, b) => a.Country.length - b.Country.length,
    },

    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <div className="input-block add-lists"></div>

            <Link className="me-2 p-2" to="#">
              <Eye className="feather-view" />
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
              to="#"
              data-bs-toggle="modal" data-bs-target="#delete-modal"
            >
              <Trash2 className="feather-trash-2" />
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.createdby.length - b.createdby.length,
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Billers</h4>
                <h6>Manage your billers</h6>
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
                className="btn btn-primary text-white"
                data-bs-toggle="modal"
                data-bs-target="#add-units"
              >
              <i className='ti ti-circle-plus me-1'></i>
                Add Biller
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card table-list-card">
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
                    Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Inactive
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
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

      {/* Add biller */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Add Biller</h4>
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
                  <form>
                    <div className="new-employee-field">
                      <div className="profile-pic-upload">
                        <div className="profile-pic">
                          <span>
                            <i
                              data-feather="plus-circle"
                              className="plus-down-add"
                            />{" "}
                            Add Image
                          </span>
                        </div>
                        <div className="mb-3">
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Upload Image</h4>
                            </div>
                          </div>
                          <p className="mt-2">JPEG, PNG up to 2 MB</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          First Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Last Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Company Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Email<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Phone<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="tel" className="form-control" />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Address<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          City<span className="text-danger ms-1">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={city}
                          placeholder="Choose"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          State<span className="text-danger ms-1">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={state}
                          placeholder="Choose"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Country<span className="text-danger ms-1">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={countries}
                          placeholder="Choose"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Postal Code<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-12">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user1"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user1" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
                  >
                    Add Biller
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add biller */}
      {/* Edit biller */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Biller</h4>
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
                  <form action="billers.html">
                    <div className="new-employee-field">
                      <div className="profile-pic-upload image-field">
                        <div className="profile-pic p-2">
                          <ImageWithBasePath
                            src="./assets/img/users/user-46.png"
                            className="object-fit-cover h-100 rounded-1"
                            alt="user"
                          />
                          <button type="button" className="close rounded-1">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="mb-3">
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Change Image</h4>
                            </div>
                          </div>
                          <p className="mt-2">JPEG, PNG up to 2 MB</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          First Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Shaun"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Last Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Farley"
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Company Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="GreenTech Industries"
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Email<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          defaultValue="shaun@example.com"
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Phone<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          defaultValue={+18647961254}
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Address<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="87 Griffin Street"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          City<span className="text-danger ms-1">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={city}
                          placeholder="Choose"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          State<span className="text-danger ms-1">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={state}
                          placeholder="Choose"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Country<span className="text-danger ms-1">*</span>
                        </label>
                        <Select
                          classNamePrefix="react-select"
                          options={countries}
                          placeholder="Choose"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Postal Code<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={90001}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user2"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user2" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
                  >
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit biller */}
      {/* delete modal */}
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 fw-bold mb-2 mt-1">Delete Biller</h4>
                <p className="mb-0 fs-16">
                  Are you sure you want to delete biller?
                </p>
                <div className="modal-footer-btn mt-3 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
                  >
                    Yes Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>


  );
};

export default Biller;
