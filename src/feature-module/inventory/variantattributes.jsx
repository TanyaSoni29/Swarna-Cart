import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '../../core/pagination/datatable'
import CommonFooter from '../../core/common/footer/commonFooter';
import TooltipIcons from '../../core/common/tooltip-content/tooltipIcons';
import RefreshIcon from '../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../core/common/tooltip-content/collapes';
import ReactTagsInput from '../settings/reacttaginputs';

const VariantAttributes = () => {
  const dataSource = useSelector((state) => state.rootReducer.variantattributes_data);

  const columns = [
    {
      title: "Variant",
      dataIndex: "variant",
      sorter: (a, b) => a.variant.length - b.variant.length,
    },
    {
      title: "Values",
      dataIndex: "values",
      sorter: (a, b) => a.values.length - b.values.length,
    },


    {
      title: "Created On",
      dataIndex: "createdon",
      sorter: (a, b) => a.createdon.length - b.createdon.length,
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <span className="badge table-badge bg-success fw-medium fs-10">
          {text}
        </span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },

    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link className="me-2 p-2" to="#" data-bs-toggle="modal" data-bs-target="#edit-units">
              <i data-feather="edit" className="feather-edit"></i>
            </Link>
            <Link to="#" data-bs-toggle="modal" data-bs-target="#delete-modal" className="p-2"  >
              <i data-feather="trash-2" className="feather-trash-2" ></i>
            </Link>
          </div>
        </div>
      )
    },
  ]

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Variant Attributes</h4>
                <h6>Manage your variant attributes</h6>
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
                <i className='ti ti-circle-plus me-1'></i> Add Variant
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
                <Table columns={columns} dataSource={dataSource} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      <>
        {/* Add Unit */}
        <div className="modal fade" id="add-units">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Add Variant</h4>
                    </div>
                    <button
                      type="button"
                      className="close bg-danger text-white fs-16"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body custom-modal-bodys">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">
                          Variant<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Values<span className="text-danger ms-1">*</span>
                        </label>
                        <ReactTagsInput />
                        <span className="tag-text mt-2 d-flex">
                          Enter value separated by comma
                        </span>
                      </div>
                      <div className="mb-0 mt-4">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user2"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user2" className="checktoggle" />
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
                      className="btn btn-primary fs-13 fw-medium p-2 px-3"
                      data-bs-dismiss="modal"
                    >
                      Add Variant
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Unit */}
        {/* Edit Unit */}
        <div className="modal fade" id="edit-units">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Edit Variant </h4>
                    </div>
                    <button
                      type="button"
                      className="close bg-danger text-white fs-16"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">
                          Variant<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Size"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Values<span className="text-danger ms-1">*</span>
                        </label>
                        <ReactTagsInput />
                        <span className="tag-text mt-2 d-flex">
                          Enter value separated by comma
                        </span>
                      </div>
                      <div className="mb-0 mt-3">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user3"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user3" className="checktoggle" />
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
                      className="btn btn-primary fs-13 fw-medium p-2 px-3"
                      data-bs-dismiss="modal"
                    >
                      Save Changes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Unit */}
        <>
          {/* delete modal */}
          <div className="modal fade" id="delete-modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="page-wrapper-new p-0">
                  <div className="content p-5 px-3 text-center">
                    <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                      <i className="ti ti-trash fs-24 text-danger" />
                    </span>
                    <h4 className="fs-20 fw-bold mb-2 mt-1">Delete Variant</h4>
                    <p className="mb-0 fs-16">
                      Are you sure you want to delete variant?
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
                        type="button"
                        className="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal"
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

    </>
  )
}

export default VariantAttributes
