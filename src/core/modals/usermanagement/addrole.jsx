import React from 'react'

const AddRole = () => {
    return (
        <>
  {/* Add Role */}
  <div className="modal fade" id="add-units">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <div className="page-title">
            <h4>Create Role</h4>
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
            <div className="mb-3">
              <label className="form-label">Role Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <label className="form-label">Status</label>
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider round" />
              </label>
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
            <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
              Create Role
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Role */}
 
  {/* Delete Product */}
  <div className="modal fade modal-default" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-0">
          <div className="success-wrap text-center">
            <form >
              <div className="icon-success bg-danger-transparent text-danger mb-2">
                <i className="ti ti-trash" />
              </div>
              <h3 className="mb-2">Delete Role</h3>
              <p className="fs-16 mb-3">
                Are you sure you want to delete role?
              </p>
              <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No, Cancel
                </button>
                <button type="button" data-bs-dismiss="modal" className="btn btn-md btn-primary">
                  Yes, Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Product */}
</>

    )
}

export default AddRole
