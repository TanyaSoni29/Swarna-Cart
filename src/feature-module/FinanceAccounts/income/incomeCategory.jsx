import React from "react";
import {
  PlusCircle
} from "feather-icons-react/build/IconComponents";
import { Link } from "react-router-dom";
import TooltipIcons from "../../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../../core/common/tooltip-content/collapes";
import Table from "../../../core/pagination/datatable.jsx";
import { incomeCategoryList } from "../../../core/json/incomecategory.js";


const IncomeCategory = () => {
    const dataSource = incomeCategoryList;

    const columns = [
      {
        title: "Code",
        dataIndex: "Code",
       
        sorter: (a, b) => a.Code.length - b.Code.length,
      },
  
      {
        title: "Category",
        dataIndex: "Category",
        
        sorter: (a, b) => a.Category.length - b.Category.length,
      },
      {
        title: "Added Date",
        dataIndex: "Added_Date",
        sorter: (a, b) => a.Added_Date.length - b.Added_Date.length,
      },
      
      
  
      {
        title: "",
        dataIndex: "actions",
        key: "actions",
        className:"action-table-data",
        render: () => (
            <div className="edit-delete-action">
                <Link
                    to="#"
                    className="me-2 p-2 mb-0"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-units"
                >
                    <i data-feather="edit" className="feather-edit" />
                </Link>
                <Link
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                    className="me-0 p-2 mb-0"
                    to="#"
                >
                    <i data-feather="trash-2" className="feather-trash-2" />
                </Link>
            </div>

          
        ),
      },
    ];
  return (
    <>
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Income Category</h4>
              <h6>Manage your Income Category</h6>
            </div>
          </div>
          <ul className="table-top-head">
           
           <TooltipIcons/>
            <RefreshIcon/>
            <CollapesIcon/>
          </ul>
          <div className="page-btn">
            <Link to="#" data-bs-toggle="modal" data-bs-target="#add-units" className="btn btn-primary">
              <PlusCircle data-feather="plus-circle" className=" me-2" />
              Add New
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
                <a
                href="#"
                className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                >
                Category
                </a>
                <ul className="dropdown-menu  dropdown-menu-end p-3">
                <li>
                    <a href="#" className="dropdown-item rounded-1">
                    Foreign investment
                    </a>
                </li>
                <li>
                    <a href="#" className="dropdown-item rounded-1">
                    Product Export
                    </a>
                </li>
                </ul>
            </div>
            <div className="dropdown me-2">
                <a
                href="#"
                className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                >
                Status
                </a>
                <ul className="dropdown-menu  dropdown-menu-end p-3">
                <li>
                    <a href="#" className="dropdown-item rounded-1">
                    Active
                    </a>
                </li>
                <li>
                    <a href="#" className="dropdown-item rounded-1">
                    Inactive
                    </a>
                </li>
                </ul>
            </div>
            <div className="dropdown">
                <a
                href="#"
                className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                >
                Sort By : Last 7 Days
                </a>
                <ul className="dropdown-menu  dropdown-menu-end p-3">
                <li>
                    <a href="#" className="dropdown-item rounded-1">
                    Recently Added
                    </a>
                </li>
                <li>
                    <a href="#" className="dropdown-item rounded-1">
                    Ascending
                    </a>
                </li>
                <li>
                    <a href="#" className="dropdown-item rounded-1">
                    Desending
                    </a>
                </li>
                <li>
                    <a href="#" className="dropdown-item rounded-1">
                    Last Month
                    </a>
                </li>
                <li>
                    <a href="#" className="dropdown-item rounded-1">
                    Last 7 Days
                    </a>
                </li>
                </ul>
            </div>
                </div>
            </div>
            <div className="card-body pb-0">
                <div className="table-responsive">
                <Table columns={columns} dataSource={dataSource} />
                </div>
            </div>
        </div>

        {/* /product list */}
        
      </div>
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p className="mb-0">2025 © Swarna. All Right Reserved</p>
        <p>
          Designed &amp; Developed By{" "}
          <Link to="#" className="text-primary">
            Backend Coders
          </Link>
        </p>
      </div>
    </div>
    <>
  <div className="modal fade" id="add-units">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="page-wrapper-new p-0">
          <div className="content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Income Category</h4>
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
              <form >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3 position-relative">
                      <label className="form-label">
                        Code<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control list" />
                      <button
                        type="button" data-bs-dismiss="modal"
                        className="btn btn-primaryadd btn-generate"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <label className="form-label">
                      Enter Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Investment"
                    />
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
              <button
                type="button" data-bs-dismiss="modal"
                className="btn btn-primary fs-13 fw-medium p-2 px-3"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="edit-units">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="page-wrapper-new p-0">
          <div className="content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Edit Income Category</h4>
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
              <form >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3 position-relative">
                      <label className="form-label">
                        Code<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control list" />
                      <button
                        type="button" data-bs-dismiss="modal"
                        className="btn btn-primaryadd btn-generate"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <label className="form-label">
                      Enter Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Investment"
                    />
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
              <button
                type="button" data-bs-dismiss="modal"
                className="btn btn-primary fs-13 fw-medium p-2 px-3"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="delete-modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="page-wrapper-new p-0">
          <div className="content p-5 px-3 text-center">
            <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
              <i className="ti ti-trash fs-24 text-danger" />
            </span>
            <h4 className="fs-20 fw-bold mb-2 mt-1">Delete Income Category</h4>
            <p className="mb-0 fs-16">
              Are you sure you want to delete income category?
            </p>
            <div className="modal-footer-btn mt-3 d-flex justify-content-center">
              <button
                type="button"
                className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button" data-bs-dismiss="modal"
                className="btn btn-primary fs-13 fw-medium p-2 px-3"
              >
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

</>

  );
};

export default IncomeCategory;
