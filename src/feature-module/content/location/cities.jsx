import React from 'react'
import { Link } from 'react-router-dom';
import TooltipIcons from '../../../core/common/tooltip-content/tooltipIcons';
import RefreshIcon from '../../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../../core/common/tooltip-content/collapes';
import { PlusCircle } from 'feather-icons-react/build/IconComponents';
import Table from "../../../core/pagination/datatable";
import Select from 'react-select';

const Cities = () => {
    const data = [
        {
          CityName: "Los Angles",
          StateName: "California",
          CountryName: "United States",
        },
        {
          CityName: "New York City",
          StateName: "New York",
          CountryName: "United States",
        },
        {
          CityName: "Houston",
          StateName: "Texas",
          CountryName: "United States",
        },
        {
          CityName: "Munich",
          StateName: "Bavaria",
          CountryName: "Germany",
        },
        {
          CityName: "Montreal",
          StateName: "Quebec",
          CountryName: "Canada",
        },
        {
          CityName: "Montreal",
          StateName: "Ontario",
          CountryName: "Canada",
        },
        {
          CityName: "Miami",
          StateName: "Florida",
          CountryName: "United States",
        },
        {
          CityName: "Calgary",
          StateName: "Berlin",
          CountryName: "Germany",
        },
        {
          CityName: "Melbourne",
          StateName: "Victoria",
          CountryName: "Australia",
        },
        {
          CityName: "Johannesburg",
          StateName: "Gauteng",
          CountryName: "Egypt",
        },
      ];
      const columns = [
        {
            title: "CityName",
            dataIndex: "CityName",
            className:"text-gray-9",
            sorter: (a, b) => a.CityName.length - b.CityName.length,
        },
        {
            title: "StateName",
            dataIndex: "StateName",
            sorter: (a, b) => a.StateName.length - b.StateName.length,
        },
        {
            title: "CountryName",
            dataIndex: "CountryName",
            sorter: (a, b) => a.CountryName.length - b.CountryName.length,
        },
       
        
        {
            title: "Status",
            dataIndex: "Status",
            render: () => (
            <>
                <span className={` badge badge-success d-inline-flex align-items-center badge-xs`}>
                <i className="ti ti-point-filled me-1" />
                Active
                </span>

            </>
            ),
            sorter: (a, b) => a.Status.length - b.Status.length,
        },

        {
            title: "",
            dataIndex: "action",
            className:"action-table-data",
            render: () => (
                <div className="edit-delete-action">
                <Link
                className="me-2 p-2"
                data-bs-toggle="modal"
                data-bs-target="#edit-city"
                to="#"
                >
                <i data-feather="edit" className="feather-edit" />
                </Link>
                <Link
                data-bs-toggle="modal"
                data-bs-target="#delete-modal"
                className="p-2"
                to="#"
                >
                <i data-feather="trash-2" className="feather-trash-2" />
                </Link>
            </div>


            ),
            sorter: (a, b) => a.action.length - b.action.length,
        },
        ];
        const option = [
            { value: "1", label: "California" },
            { value: "2", label: "New York" },
            { value: "2", label: "Texas" },
          ];
          const option2 = [
            { value: "1", label: "United States" },
            { value: "2", label: "Canada" },
            { value: "3", label: "United Kingdom" },
          ];
  return (
    <>
  <div className="page-wrapper">
    <div className="content">
      <div className="page-header">
        <div className="add-item d-flex">
          <div className="page-title">
            <h4>Cities</h4>
            <h6>Manage Your Cities</h6>
          </div>
        </div>
        <ul className="table-top-head">
          <TooltipIcons/>
          <RefreshIcon/>
          <CollapesIcon/>
        </ul>
        <div className="page-btn">
          <Link
            to="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-city"
          >
            <PlusCircle data-feather="plus-circle" className="me-1" />
            Add City
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
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    New Joiners
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
        <div className="card-body pb-0">
          <div className=" table-responsive">
          <Table columns={columns} dataSource={data} />
            
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
  {/* Add cities */}
  <div className="modal fade" id="add-city">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <div className="page-title">
            <h4>Add City</h4>
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
        <form >
          <div className="modal-body">
            <div className="row">
              <div className="mb-3">
                <label className="form-label">
                  City Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  State Name <span className="text-danger">*</span>
                </label>
                
                <Select
              classNamePrefix="react-select"
              options={option}
              placeholder="Choose"
            />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Country Name <span className="text-danger">*</span>
                </label>
                
                <Select
              classNamePrefix="react-select"
              options={option2}
              placeholder="Choose"
            />
              </div>
              <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                <span className="status-label">Status</span>
                <input
                  type="checkbox"
                  id="users5"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="users5" className="checktoggle mb-0" />
              </div>
            </div>
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
              Add City
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add cities */}
  {/* Edit cities */}
  <div className="modal fade" id="edit-city">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <div className="page-title">
            <h4>Edit City</h4>
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
        <form >
          <div className="modal-body">
            <div className="row">
              <div className="mb-3">
                <label className="form-label">
                  City Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Los Angels"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  State Name <span className="text-danger">*</span>
                </label>
                <Select
              classNamePrefix="react-select"
              options={option}
              defaultValue={option[0]}
              placeholder="Choose"
            />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Country Name <span className="text-danger">*</span>
                </label>
                <Select
              classNamePrefix="react-select"
              options={option2}
              defaultValue={option2[0]}
              placeholder="Choose"
            />
              </div>
              <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                <span className="status-label">Status</span>
                <input
                  type="checkbox"
                  id="users6"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="users6" className="checktoggle mb-0" />
              </div>
            </div>
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
        </form>
      </div>
    </div>
  </div>
  {/* /Edit cities */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete-modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content p-5">
        <div className="modal-body text-center p-0">
          <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
            <i className="ti ti-trash fs-24 text-danger" />
          </span>
          <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete City</h4>
          <p className="text-gray-6 mb-0 fs-16">
            Are you sure you want to delete city?
          </p>
          <div className="d-flex justify-content-center mt-3">
            <Link
              className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link
              to="#"
              className="btn btn-primary fs-13 fw-medium p-2 px-3"
            >
              Yes Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Modal */}
</>

  )
}

export default Cities