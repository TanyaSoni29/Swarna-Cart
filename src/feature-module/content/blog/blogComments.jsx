import React from 'react'
import { Link } from 'react-router-dom';
import RefreshIcon from '../../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../../core/common/tooltip-content/collapes';
import Table from "../../../core/pagination/datatable";
import Select from 'react-select';
const BlogComments = () => {
  const data = [
    {
      Comment: "Thanks for the detailed guide on POS System",
      Created_Date: "24 Dec 2024",
      Blog: "What is a POS System? A Beginner’s Guide",
      By: "Gertrude",
    },
    {
      Comment: "Thanks for sharing these insights!",
      Created_Date: "10 Dec 2024",
      Blog: "Best POS Systems for Retail Businesses",
      By: "Edward",
    },
    {
      Comment: "Helpful info on POS features - thank you!",
      Created_Date: "27 Nov 2024",
      Blog: "Key Features of a Modern POS",
      By: "Mark",
    },
    {
      Comment: "Fantastic content, thank you for sharing!",
      Created_Date: "18 Nov 2024",
      Blog: "Integrating POS with E-Commerce",
      By: "Nidia",
    },
    {
      Comment: "This really cleared things up, I appreciate it",
      Created_Date: "20 Jul 2024",
      Blog: "AI & the Future of POS Systems",
      By: "Rebecca",
    },
    {
      Comment: "Awesome post, thanks for sharing!",
      Created_Date: "25 Oct 2024",
      Blog: "Retail vs Restaurant POS: Key Differences",
      By: "Jimmy",
    },
    {
      Comment: "I learned a lot from thi - thanks!",
      Created_Date: "14 Oct 2024	",
      Blog: "Understanding PCI Compliance for POS",
      By: "Richard",
    },
  ];
  const option = [
    { value: "1", label: "Unpublish" },
    { value: "2", label: "Publish" },
  ];
    const columns = [
     
  
      {
        title: "Comment",
        dataIndex: "Comment",
        sorter: (a, b) => a.Comment.length - b.Comment.length,
      },
      {
        title: "Created Date",
        dataIndex: "Created_Date",
        sorter: (a, b) => a.Created_Date.length - b.Created_Date.length,
      },
  
      {
        title: "Ratings",
        dataIndex: "rate",
        render: () => (
          <>
            <i className="ti ti-star-filled text-warning" />
            <i className="ti ti-star-filled text-warning" />
            <i className="ti ti-star-filled text-warning" />
            <i className="ti ti-star-filled text-warning" />
            <i className="ti ti-star-filled text-warning" />
  
          </>
        ),
      },
      {
        title: "Blog",
        dataIndex: "Blog",
        sorter: (a, b) => a.Blog.length - b.Blog.length,
      },
      {
        title: "By",
        dataIndex: "By",
        sorter: (a, b) => a.By.length - b.By.length,
      },
      {
        title: "",
        dataIndex: "Status",
        render: () => (
          <>
            <Select
              classNamePrefix="react-select"
              options={option}
              defaultValue={option[0]}
              placeholder="Choose"
            />
          </>
        ),
        sorter: (a, b) => a.Status.length - b.Status.length,
      },
  
      {
        title: "",
        dataIndex: "action",
        render: () => (
          <div className="edit-delete-action d-flex align-items-center">
          <Link
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="confirm-text p-2 d-flex align-items-center border rounded"
            to="#"
          >
            <i data-feather="trash-2" className="feather-trash-2" />
          </Link>
        </div>
        
  
  
        ),
        sorter: (a, b) => a.action.length - b.action.length,
      },
    ];

  return (
    <>
  <div className="page-wrapper">
    <div className="content">
      <div className="page-header">
        <div className="add-item d-flex">
          <div className="page-title">
            <h4 className="fw-bold">Blog Comments</h4>
            <h6>Manage your blog tags</h6>
          </div>
        </div>
        <ul className="table-top-head">
          <RefreshIcon/>
          <CollapesIcon/>
        </ul>
      </div>
      {/* /product list */}
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
        <div className="card-body">
          <div className="table-responsive table-comments">
          <Table columns={columns} dataSource={data} />
           
          </div>
        </div>
      </div>
      {/* /product list */}
    </div>
    <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p className="mb-0 text-gray-9">
        2025 © Swarna. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed By{" "}
        <Link to="#" className="text-primary">
          Backend Coders
        </Link>
      </p>
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
            <h4 className="fs-20 fw-bold mb-2 mt-1">Delete Comment</h4>
            <p className="mb-0 fs-16">
              Are you sure you want to delete comment?
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

  )
}

export default BlogComments