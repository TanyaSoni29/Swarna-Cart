/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Table from '../../core/pagination/datatable.jsx';
import EditShift from '../../core/modals/hrm/editshift.jsx';
import TooltipIcons from '../../core/common/tooltip-content/tooltipIcons.jsx';
import RefreshIcon from '../../core/common/tooltip-content/refresh.jsx';
import CollapesIcon from '../../core/common/tooltip-content/collapes.jsx';
import AddShift from '../../core/modals/hrm/addshift.jsx';
import CommonFooter from '../../core/common/footer/commonFooter.jsx';

const Shift = () => {
	const dataSource = useSelector((state) => state.rootReducer.shiftlist_data);

	const columns = [
		{
			title: 'Shift Name',
			dataIndex: 'shiftname',
			sorter: (a, b) => a.shiftname.length - b.shiftname.length,
		},

		{
			title: 'Time',
			dataIndex: 'time',
			sorter: (a, b) => a.time.length - b.time.length,
		},
		{
			title: 'Week Off',
			dataIndex: 'weekoff',
			sorter: (a, b) => a.weekoff.length - b.weekoff.length,
		},
		{
			title: 'Created On',
			dataIndex: 'createdon',
			sorter: (a, b) => a.createdon.length - b.createdon.length,
		},
		{
			title: 'Status',
			dataIndex: 'status',
			render: (text) => (
				<span className='badge badge-success d-inline-flex align-items-center badge-xs'>
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
				<div className='action-table-data'>
					<div className='edit-delete-action'>
						<Link
							className='me-2 p-2'
							to='#'
							data-bs-toggle='modal'
							data-bs-target='#edit-units'
						>
							<i
								data-feather='edit'
								className='feather-edit'
							></i>
						</Link>
						<Link
							className='confirm-text p-2'
							to='#'
							data-bs-toggle='modal'
							data-bs-target='#delete-modal'
						>
							<i
								data-feather='trash-2'
								className='feather-trash-2'
							></i>
						</Link>
					</div>
				</div>
			),
		},
	];

	return (
		<div>
			<div className='page-wrapper'>
				<div className='content'>
					<div className='page-header'>
						<div className='add-item d-flex'>
							<div className='page-title'>
								<h4>Shifts</h4>
								<h6>Manage your shifts</h6>
							</div>
						</div>
						<ul className='table-top-head'>
							<TooltipIcons />
							<RefreshIcon />
							<CollapesIcon />
						</ul>
						<div className='page-btn'>
							<Link
								to='#'
								className='btn btn-primary'
								data-bs-toggle='modal'
								data-bs-target='#add-shift'
							>
								<i className='ti ti-circle-plus me-1'></i>
								Add Shift
							</Link>
						</div>
					</div>

					{/* /product list */}
					<div className='card table-list-card'>
						<div className='card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3'>
							<div className='search-set'></div>
							<div className='d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3'>
								<div className='dropdown me-2'>
									<Link
										to='#'
										className='dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center'
										data-bs-toggle='dropdown'
									>
										Select Status
									</Link>
									<ul className='dropdown-menu  dropdown-menu-end p-3'>
										<li>
											<Link
												to='#'
												className='dropdown-item rounded-1'
											>
												Active
											</Link>
										</li>
										<li>
											<Link
												to='#'
												className='dropdown-item rounded-1'
											>
												Inactive
											</Link>
										</li>
									</ul>
								</div>
								<div className='dropdown'>
									<Link
										to='#'
										className='dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center'
										data-bs-toggle='dropdown'
									>
										Sort By : Last 7 Days
									</Link>
									<ul className='dropdown-menu  dropdown-menu-end p-3'>
										<li>
											<Link
												to='#'
												className='dropdown-item rounded-1'
											>
												Recently Added
											</Link>
										</li>
										<li>
											<Link
												to='#'
												className='dropdown-item rounded-1'
											>
												Ascending
											</Link>
										</li>
										<li>
											<Link
												to='#'
												className='dropdown-item rounded-1'
											>
												Desending
											</Link>
										</li>
										<li>
											<Link
												to='#'
												className='dropdown-item rounded-1'
											>
												Last Month
											</Link>
										</li>
										<li>
											<Link
												to='#'
												className='dropdown-item rounded-1'
											>
												Last 7 Days
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='card-body'>
							<div className='table-responsive'>
								<Table
									columns={columns}
									dataSource={dataSource}
								/>
							</div>
						</div>
					</div>
					{/* /product list */}
				</div>
				<CommonFooter />
			</div>
			<AddShift />
			<EditShift />
			{/* delete modal */}
			<div
				className='modal fade'
				id='delete-modal'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content p-5 px-3 text-center'>
								<span className='rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2'>
									<i className='ti ti-trash fs-24 text-danger' />
								</span>
								<h4 className='fs-20 text-gray-9 fw-bold mb-2 mt-1'>
									Delete Shift
								</h4>
								<p className='text-gray-6 mb-0 fs-16'>
									Are you sure you want to delete shift?
								</p>
								<div className='modal-footer-btn mt-3 d-flex justify-content-center'>
									<button
										type='button'
										className='btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none'
										data-bs-dismiss='modal'
									>
										Cancel
									</button>
									<Link
										to='#'
										className='btn btn-submit fs-13 fw-medium p-2 px-3'
										data-bs-dismiss='modal'
									>
										Yes Delete
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /delete modal */}
		</div>
	);
};

export default Shift;
