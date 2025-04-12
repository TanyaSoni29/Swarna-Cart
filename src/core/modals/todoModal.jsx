import React from "react";
import { Eye, Star, Trash2 } from "react-feather/dist";
import { Link } from "react-router-dom";
import Select from "react-select";
import TextEditor from "../../feature-module/inventory/texteditor";
import { DatePicker } from "antd";
import { Calendar } from "feather-icons-react/build/IconComponents";
import ImageWithBasePath from "../img/imagewithbasebath";

const TodoModal = () => {

  const optionsPriority = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];
  const Assignee = [
    { value: "Sophie", label: "Sophie" },
    { value: "Cameron", label: "Cameron" },
    { value: "Doris", label: "Doris" },
    { value: "Rufana", label: "Rufana" },
  ];
  const Tag = [
    { value: "Internal", label: "Internal" },
    { value: "Projects", label: "Projects" },
    { value: "Meetings", label: "Meetings" },
    { value: "Reminder", label: "Reminder" },
  ];
  const Status = [
    { value: "Completed", label: "Completed" },
    { value: "Pending", label: "Pending" },
    { value: "Onhold", label: "Onhold" },
    { value: "Inprogress", label: "Inprogress" },
  ]
  return (
    <div>
      <>
        {/* Add Note */}
        <div className="modal fade" id="note-units">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Todo</h4>
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
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Todo Title</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Assignee</label>
                        <Select
                          classNamePrefix="react-select"
                          options={Assignee}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Tag</label>
                        <Select
                          classNamePrefix="react-select"
                          options={Tag}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Priority</label>
                        <Select
                          classNamePrefix="react-select"
                          options={optionsPriority}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-blocks todo-calendar">
                        <label className="form-label">Due Date</label>
                        <div className="input-groupicon calender-input">
                          <DatePicker
                            className="form-control datetimepicker"
                            placeholder="dd/mm/yyyy"
                          />
                          <Calendar className="info-img" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <Select
                          classNamePrefix="react-select"
                          options={Status}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3 summer-description-box notes-summernote">
                        <label className="form-label">Descriptions</label>
                        <TextEditor />
                        <p>Maximum 60 Characters</p>
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
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Note */}
        {/* Edit Note */}
        <div className="modal fade" id="edit-note-units">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Todo Title</h4>
                </div>
                <div className=" edit-note-head d-flex align-items-center">
                  <Link to="#" className="me-2">
                    <span>
                      <Trash2 />
                    </span>
                  </Link>
                  <Link to="#" className="me-2">
                    <span>
                      <Star />
                    </span>
                  </Link>
                  <Link to="#" className="me-2">
                    <span>
                      <Eye />
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <form >
                <div className="modal-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="input-blocks">
                        <label className="form-label">Note Title</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Meet Lisa to discuss project details"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-blocks">
                        <label className="form-label">Assignee</label>
                        <Select
                          classNamePrefix="react-select"
                          options={Assignee}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-blocks">
                        <label className="form-label">Tag</label>
                        <Select
                          classNamePrefix="react-select"
                          options={Tag}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-blocks">
                        <label className="form-label">Priority</label>
                        <Select
                          classNamePrefix="react-select"
                          options={optionsPriority}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-blocks todo-calendar">
                        <label className="form-label">Due Date</label>
                        <div className="input-groupicon calender-input">
                          <DatePicker
                            className="form-control datetimepicker"
                            placeholder="dd/mm/yyyy"
                          />
                          <Calendar className="info-img" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-blocks">
                        <label className="form-label">Status</label>
                        <Select
                          classNamePrefix="react-select"
                          options={Status}
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-blocks summer-description-box notes-summernote">
                        <label className="form-label">Descriptions</label>
                        <TextEditor />
                        <p>Maximum 60 Characters</p>
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
                  <button type="btton" className="btn btn-primary" data-bs-dismiss="modal">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Note */}
        {/* Delete Note */}
        <div className="modal fade" id="delete-note-units">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="delete-popup text-center">
                    <div className="icon-success bg-danger-transparent text-danger mb-2">
                      <i className="ti ti-trash" />
                    </div>
                    <div className="delete-heads">
                      <h4>Are You Sure?</h4>
                      <p>
                        Do you really want to delete this item, This process cannot be
                        undone.
                      </p>
                    </div>
                    <div className="modal-footer-btn delete-footer">
                      <Link
                        to="#"
                        className="btn btn-secondary me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </Link>
                      <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Note */}
        {/* View Note */}
        <div className="modal fade" id="view-note-units">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title edit-page-title">
                  <h4>Todo</h4>
                  <span className="badge badge-soft-success shadow-none">
                    Personal
                  </span>
                </div>
                <div className=" edit-noted-head d-flex align-items-center">
                  <Link to="#">
                    <span className="me-2">
                      <Trash2 />
                    </span>
                  </Link>
                  <Link to="#" className="me-2">
                    <span className="me-2">
                      <Star />
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="edit-head-view">
                      <h6>Meet Lisa to discuss project details</h6>
                      <p>
                        Hiking is a long, vigorous walk, usually on trails or
                        footpaths in the countryside. Walking for pleasure developed
                        in Europe during the eighteenth century. Religious pilgrimages
                        have existed much longer but they involve walking long
                        distances for a spiritual purpose associated with specific
                        religions and also we achieve inner peace while we hike at a
                        local park.
                      </p>
                      <p className="badged high">
                        <i className="fas fa-circle" /> High
                      </p>
                    </div>
                    <div className="modal-footer edit-footer-menu">
                      <Link
                        to="#"
                        className="btn btn-primary me-2"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /View Note */}

        <>
          {/* Add Todo */}
          <div className="modal fade" id="add_todo">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Add New Todo</h4>
                  <button
                    type="button"
                    className="btn-close custom-btn-close p-0 p-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="ti ti-x" />
                  </button>
                </div>
                <form>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Todo Title<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Tag<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={Tag}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Priority<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={optionsPriority}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3 summer-description-box notes-summernote">
                          <label className="form-label">
                            Descriptions<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="summernote" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Add Assignee<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={Assignee}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-0">
                          <label className="form-label">
                            Status<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={Status}
                            placeholder="Choose"
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
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                      Add New Todo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Add Todo */}
          {/* Edit Todo */}
          <div className="modal fade" id="edit_todo">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Edit Todo</h4>
                  <button
                    type="button"
                    className="btn-close custom-btn-close p-0 p-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="ti ti-x" />
                  </button>
                </div>
                <form >
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Todo Title<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Update calendar and schedule"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Tag<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={Tag}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Priority<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={optionsPriority}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3 summer-description-box notes-summernote">
                          <label className="form-label">
                            Descriptions<span className="text-danger ms-1">*</span>
                          </label>
                          <TextEditor />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Add Assignee<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={Assignee}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-0">
                          <label className="form-label">
                            Status<span className="text-danger ms-1">*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={Status}
                            placeholder="Choose"
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
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Edit Todo */}
          {/* Todo Details */}
          <div className="modal fade" id="view_todo">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0">
                <div className="modal-header bg-dark">
                  <h4 className="modal-title text-white">
                    Respond to any pending messages
                  </h4>
                  <span className="badge badge-danger d-inline-flex align-items-center">
                    <i className="ti ti-square me-1" />
                    Urgent
                  </span>
                  <span>
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                  <Link to="#">
                    <i className="ti ti-trash text-white" />
                  </Link>
                  <button
                    type="button"
                    className="btn-close custom-btn-close p-0 bg-transparent fs-16 text-white position-static"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="ti ti-x" />
                  </button>
                </div>
                <div className="modal-body">
                  <h5 className="mb-2">Task Details</h5>
                  <div className="border rounded mb-3 p-2">
                    <div className="row row-gap-3">
                      <div className="col-md-4">
                        <div className="text-center">
                          <span className="d-block mb-1">Created On</span>
                          <p className="text-dark">22 July 2025</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center">
                          <span className="d-block mb-1">Due Date</span>
                          <p className="text-dark">22 July 2025</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center">
                          <span className="d-block mb-1">Status</span>
                          <span className="badge badge-soft-success align-items-center justify-content-center">
                            <i className="fas fa-circle fs-6 me-1" />
                            Completed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h5 className="mb-2">Description</h5>
                    <p>
                      Hiking is a long, vigorous walk, usually on trails or footpaths in
                      the countryside. Walking for pleasure developed in Europe during
                      the eighteenth century. Religious pilgrimages have existed much
                      longer but they involve walking long distances for a spiritual
                      purpose associated with specific religions and also we achieve
                      inner peace while we hike at a local park.
                    </p>
                  </div>
                  <div className="mb-3">
                    <h5 className="mb-2">Tags</h5>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-danger me-2">Internal</span>
                      <span className="badge badge-success me-2">Projects</span>
                      <span className="badge badge-secondary">Reminder</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-2">Assignee</h5>
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <ImageWithBasePath
                          className="border border-white"
                          src="assets/img/profiles/avatar-23.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <ImageWithBasePath
                          className="border border-white"
                          src="assets/img/profiles/avatar-24.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <ImageWithBasePath
                          className="border border-white"
                          src="assets/img/profiles/avatar-25.jpg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Todo Details */}
          {/* Delete Modal */}
          <div className="modal fade" id="delete_modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <span className="avatar avatar-xl bg-transparent-danger text-danger mb-3">
                    <i className="ti ti-trash-x fs-36" />
                  </span>
                  <h4 className="mb-1">Confirm Delete</h4>
                  <p className="mb-3">
                    You want to delete all the marked items, this cant be undone once
                    you delete.
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-secondary me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </Link>
                    <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                      Yes, Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Delete Modal */}
        </>

      </>

    </div>
  );
};

export default TodoModal;
