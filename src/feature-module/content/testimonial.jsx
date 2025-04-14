import React from 'react'
import { Link } from 'react-router-dom';
import TooltipIcons from '../../core/common/tooltip-content/tooltipIcons';
import RefreshIcon from '../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../core/common/tooltip-content/collapes';
import ImageWithBasePath from '../../core/img/imagewithbasebath';
import { PlusCircle } from 'feather-icons-react/build/IconComponents';
import Table from "../../core/pagination/datatable";
import Select from 'react-select';

const Testimonial = () => {
    const data = [
        {
          Author: "Carl Evans",
          Image: "user-32.jpg",
          Role: "Manager",
          Content: "This POS system has streamlined our operations and improved efficiency!",
          CreatedDate: "24 Dec 2024",
        },
        {
          Author: "Minerva Rameriz",
          Image: "user-02.jpg",
          Role: "Salesman",
          Content: "The POS system makes processing sales fast and effortless",
          CreatedDate: "25 Dec 2024",
        },
        {
          Author: "Robert Lamon",
          Image: "user-01.jpg",
          Role: "Supervisor",
          Content: "Easy to track sales and team performance in real-time",
          CreatedDate: "24 Dec 2024",
        },
        {
          Author: "Patricia Lewis",
          Image: "user-04.jpg",
          Role: "Store Keeper",
          Content: "This system saves me time by automating many inventory tasks",
          CreatedDate: "27 Dec 2024",
        },
        {
          Author: "Mark Joslyn",
          Image: "user-08.jpg",
          Role: "Manager",
          Content: "It’s easy to manage sales, inventory, and staff with this POS system!",
          CreatedDate: "28 Dec 2024",
        },
        {
          Author: "Marsha Betts",
          Image: "user-10.jpg",
          Role: "Inventory Manager",
          Content: "Real-time inventory updates make stock management a breeze",
          CreatedDate: "30 Dec 2024",
        },
        {
          Author: "Daniel Jude",
          Image: "user-28.jpg",
          Role: "Delivery Biker",
          Content: "POS integration makes tracking deliveries easy!",
          CreatedDate: "14 Dec 2024",
        },
        {
          Author: "Emma Bates",
          Image: "user-17.jpg",
          Role: "Cashier",
          Content: "Quick and easy to use - checkouts have never been faster!",
          CreatedDate: "24 Dec 2024",
        },
        {
          Author: "Richard Fralick",
          Image: "user-20.jpg",
          Role: "Accountant",
          Content: "Transaction tracking is simplified, making reconciliation faster.",
          CreatedDate: "10 Dec 2024",
        },
        {
          Author: "Michelle Robison",
          Image: "user-29.jpg",
          Role: "Manager",
          Content: "Our team is more organized, and customer checkouts are faster than ever.",
          CreatedDate: "16 Dec 2024",
        },
      ];
    const columns = [
   

      {
        title: "Author",
        dataIndex: "Author",
        render: (text,data) => (
          <>
            <div className="d-flex align-items-center">
              <Link to="#" className="avatar avatar-md">
                <ImageWithBasePath
                  src={`assets/img/users/${data.Image}`}
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
  
          </>
        ),
        sorter: (a, b) => a.Author.length - b.Author.length,
      },
      {
        title: "Role",
        dataIndex: "Role",
        sorter: (a, b) => a.Role.length - b.Role.length,
      },
      {
        title: "Content",
        dataIndex: "Content",
        sorter: (a, b) => a.Content.length - b.Content.length,
      },
        
      {
        title: "Rating",
        dataIndex: "Status",
        render: () => (
          <>
            <div>
                        <span>
                          <i className="ti ti-star-filled text-warning" />
                        </span>
                        <span>
                          <i className="ti ti-star-filled text-warning" />
                        </span>
                        <span>
                          <i className="ti ti-star-filled text-warning" />
                        </span>
                        <span>
                          <i className="ti ti-star-filled text-warning" />
                        </span>
                        <span>
                          <i className="ti ti-star-filled text-warning" />
                        </span>
                      </div>
  
          </>
        ),
        sorter: (a, b) => a.Status.length - b.Status.length,
      },
      {
        title: "Created Date",
        dataIndex: "CreatedDate",
        sorter: (a, b) => a.CreatedDate.length - b.CreatedDate.length,
      },
  
   
  
      {
        title: "",
        dataIndex: "action",
        className:"action-table-data",
        render: () => (
          <div className="edit-delete-action">
            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-testimonial"
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
      },
    ];
    const option = [
      { value: "1", label: "Manager" },
      { value: "2", label: "Supervisor" },
    ];
    const option2 = [
      { value: "1", label: "5 Star" },
      { value: "2", label: "4 Star" },
    ];
  return (
    <>
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Testimonials</h4>
              <h6>Manage your testimonials</h6>
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
              data-bs-target="#add-testimonial"
            >
              <PlusCircle  data-feather="plus-circle" className="me-1" />
              Add Testimonial
            </Link>
          </div>
        </div>
        {/* product list */}
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
    {/* Add Testimonial */}
    <div className="modal fade" id="add-testimonial">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="page-title">
              <h4>Add Testimonial</h4>
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
              <div className="new-employee-field">
                <div className="profile-pic-upload">
                  <div className="profile-pic">
                    <span>
                      <PlusCircle data-feather="plus-circle" className="plus-down-add" />{" "}
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
                <div className="col-lg-12 mb-3">
                  <label className="form-label">
                    Author <span className="text-danger ms-1">*</span>
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="col-lg-12 mb-3">
                  <label className="form-label">
                    Role <span className="text-danger ms-1">*</span>
                  </label>
                 
                  <Select
                    classNamePrefix="react-select"
                    options={option}
                    placeholder="Choose"
                  />
                </div>
                <div className="col-lg-12">
                  <label className="form-label">
                    Ratings <span className="text-danger ms-1">*</span>
                  </label>
                  
                  <Select
              classNamePrefix="react-select"
              options={option2}
              placeholder="Choose"
            />
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
                Add Testimonial
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* /Add Testimonial */}
    {/* Edit Testimonial */}
    <div className="modal fade" id="edit-testimonial">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="page-title">
              <h4>Edit Testimonial</h4>
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
              <div className="new-employee-field">
                <div className="profile-pic-upload">
                  <div className="profile-pic">
                    <span>
                      <PlusCircle  data-feather="plus-circle" className="plus-down-add" />{" "}
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
                <div className="col-lg-12 mb-3">
                  <label className="form-label">
                    Author <span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    defaultValue="Carl Evans"
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <label className="form-label">
                    Role <span className="text-danger ms-1">*</span>
                  </label>
                  <Select
              classNamePrefix="react-select"
              options={option}
              defaultValue={option[0]}
              placeholder="Choose"
            />
                </div>
                <div className="col-lg-12">
                  <label className="form-label">
                    Ratings <span className="text-danger ms-1">*</span>
                  </label>
                  <Select
              classNamePrefix="react-select"
              options={option2}
              defaultValue={option2[0]}
              placeholder="Choose"
            />
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
    {/* /Edit Testimonial */}
    {/* delete modal */}
    <div className="modal fade" id="delete-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="page-wrapper-new p-0">
            <div className="content p-5 px-3 text-center">
              <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                <i className="ti ti-trash fs-24 text-danger" />
              </span>
              <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
                Delete Employee
              </h4>
              <p className="text-gray-6 mb-0 fs-16">
                Are you sure you want to delete employee?
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
                  className="btn btn-submit fs-13 fw-medium p-2 px-3"
                >
                  Yes Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /delete modal */}
  </>
  
  )
}

export default Testimonial