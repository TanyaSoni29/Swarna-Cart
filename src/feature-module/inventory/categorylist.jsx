/** @format */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditCategoryList from '../../core/modals/inventory/editcategorylist';
import Table from '../../core/pagination/datatable';
import TooltipIcons from '../../core/common/tooltip-content/tooltipIcons';
import RefreshIcon from '../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../core/common/tooltip-content/collapes';
import CommonFooter from '../../core/common/footer/commonFooter';
import CommonDeleteModal from '../../core/common/modal/commonDeleteModal';
import { useDispatch } from 'react-redux';
import { refreshCategories } from '../../core/redux/slices/categoriesSlice';
import AddCategoryList from '../../core/modals/inventory/addcategorylist';

const CategoryList = () => {
	const dispatch = useDispatch();
	const { categories } = useSelector((state) => state.category);
	console.log('----', categories);
	const columns = [
		{
			title: 'Category ID',
			dataIndex: 'categoryID',
			sorter: (a, b) => a.categoryID - b.categoryID,
		},
		{
			title: 'Name',
			dataIndex: 'categoryName',
			sorter: (a, b) => a.categoryName - b.categoryName,
		},
		{
			title: 'Parent Category',
			dataIndex: 'parentCategoryName',
			sorter: (a, b) => a.parentCategoryName - b.parentCategoryName,
			render: (text) => <div>{text ? text : '-'}</div>,
		},
		// {
		// 	title: 'Status',
		// 	dataIndex: 'status',
		// 	render: (text) => (
		// 		<span className='badge bg-success fw-medium fs-10'>{text}</span>
		// 	),
		// 	sorter: (a, b) => a.status.length - b.status.length,
		// },
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
							data-bs-target='#edit-category'
						>
							<i
								data-feather='edit'
								className='feather-edit'
							></i>
						</Link>
						<Link
							data-bs-toggle='modal'
							data-bs-target='#delete-modal'
							className='p-2'
							to='#'
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

	useEffect(() => {
		dispatch(refreshCategories());
	}, [dispatch]);

	return (
		<div>
			<div className='page-wrapper'>
				<div className='content'>
					<div className='page-header'>
						<div className='add-item d-flex'>
							<div className='page-title'>
								<h4 className='fw-bold'>Category</h4>
								<h6>Manage your categories</h6>
							</div>
						</div>
						<ul className='table-top-head'>
							<TooltipIcons
								columns={columns}
								dataSource={categories}
							/>
							<RefreshIcon />
							<CollapesIcon />
						</ul>
						<div className='page-btn'>
							<Link
								to='#'
								className='btn btn-primary'
								data-bs-toggle='modal'
								data-bs-target='#add-category'
							>
								<i className='ti ti-circle-plus me-1'></i>
								Add Category
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
										Status
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
							<div className='table-responsive category-table'>
								<Table
									columns={columns}
									dataSource={categories}
								/>
							</div>
						</div>
					</div>
					{/* /product list */}
				</div>
				<CommonFooter />
			</div>

			{/* Add Category */}
			<AddCategoryList />
			{/* /Add Category */}

			<EditCategoryList />
			<CommonDeleteModal />
		</div>
	);
};

export default CategoryList;
