/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const AddCategoryList = () => {
	return (
		<div>
			{/* Add Category */}
			{/* <div className="modal fade" id="add-category">
                <div className="modal-dialog modal-dialog-centered custom-modal-two">
                    <div className="modal-content">
                        <div className="page-wrapper-new p-0">
                            <div className="content">
                                <div className="modal-header border-0 custom-modal-header">
                                    <div className="page-title">
                                        <h4>Create Category</h4>
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
                                <div className="modal-body custom-modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Category</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Category Slug</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-0">
                                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                                <span className="status-label">Status</span>
                                                <input
                                                    type="checkbox"
                                                    id="user2"
                                                    className="check"
                                                    defaultChecked="true"
                                                />
                                                <label htmlFor="user2" className="checktoggle" />
                                            </div>
                                        </div>
                                        <div className="modal-footer-btn">
                                            <button
                                                type="button"
                                                className="btn btn-cancel me-2"
                                                data-bs-dismiss="modal"
                                            >
                                                Cancel
                                            </button>
                                            <Link to="#" className="btn btn-submit">
                                                Create Category
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
			<div
				className='modal fade'
				id='add-category'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content'>
								<div className='modal-header'>
									<div className='page-title'>
										<h4>Add Category</h4>
									</div>
									<button
										type='button'
										className='close bg-danger text-white fs-16'
										data-bs-dismiss='modal'
										aria-label='Close'
									>
										<span aria-hidden='true'>×</span>
									</button>
								</div>
								<div className='modal-body'>
									<form>
										<div className='mb-3'>
											<label className='form-label'>
												Category<span className='text-danger ms-1'>*</span>
											</label>
											<input
												type='text'
												className='form-control'
											/>
										</div>
										<div className='mb-3'>
											<label className='form-label'>
												Category Slug<span className='text-danger ms-1'>*</span>
											</label>
											<input
												type='text'
												className='form-control'
											/>
										</div>
										<div className='mb-0'>
											<div className='status-toggle modal-status d-flex justify-content-between align-items-center'>
												<span className='status-label'>
													Status<span className='text-danger ms-1'>*</span>
												</span>
												<input
													type='checkbox'
													id='user2'
													className='check'
													defaultChecked
												/>
												<label
													htmlFor='user2'
													className='checktoggle'
												/>
											</div>
										</div>
									</form>
								</div>
								<div className='modal-footer'>
									<button
										type='button'
										className='btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none'
										data-bs-dismiss='modal'
									>
										Cancel
									</button>
									<Link
										to='#'
										data-bs-dismiss='modal'
										className='btn btn-primary fs-13 fw-medium p-2 px-3'
									>
										Add Category
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /Add Category */}
		</div>
	);
};

export default AddCategoryList;
