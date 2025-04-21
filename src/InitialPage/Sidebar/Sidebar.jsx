/** @format */

import React, { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from '../../core/json/siderbar_data';
import HorizontalSidebar from './horizontalSidebar';
import { useTranslation } from 'react-i18next';
import { all_routes } from '../../Router/all_routes';
import ImageWithBasePath from '../../core/img/imagewithbasebath';
import { ChevronsLeft } from 'feather-icons-react/build/IconComponents';
import { useSelector } from 'react-redux';
const Sidebar = () => {
	const { user } = useSelector((state) => state.auth);

	console.log('sidebar user console', user);

	const route = all_routes;

	const Location = useLocation();
	const { t } = useTranslation();

	const [subOpen, setSubopen] = useState('');
	const [subsidebar, setSubsidebar] = useState('');

	const toggleSidebar = (title) => {
		if (title == subOpen) {
			setSubopen('');
		} else {
			setSubopen(title);
		}
	};

	const toggleSubsidebar = (subitem) => {
		if (subitem == subsidebar) {
			setSubsidebar('');
		} else {
			setSubsidebar(subitem);
		}
	};

	const [toggle, SetToggle] = useState(false);
	const handlesidebar = () => {
		document.body.classList.toggle('mini-sidebar');
		SetToggle((current) => !current);
	};

	const { expandMenus } = useSelector(
		(state) => state.themeSetting.expandMenus
	);
	const dataLayout = useSelector((state) => state.themeSetting.dataLayout);

	const expandMenu = () => {
		document.body.classList.remove('expand-menu');
	};
	const expandMenuOpen = () => {
		document.body.classList.add('expand-menu');
	};

	return (
		<div>
			<div
				className={`sidebar ${toggle ? '' : 'active'} ${
					expandMenus || dataLayout === 'layout-hovered' ? 'expand-menu' : ''
				}`}
				id='sidebar'
				onMouseLeave={expandMenu}
				onMouseOver={expandMenuOpen}
			>
				<>
					{/* Logo */}
					<div className='sidebar-logo'>
						<Link
							to={route.newdashboard}
							className='logo logo-normal'
						>
							<ImageWithBasePath
								src='assets/img/logo.svg'
								alt='Img'
							/>
						</Link>
						<Link
							to={route.newdashboard}
							className='logo logo-white'
						>
							<ImageWithBasePath
								src='assets/img/logo-white.svg'
								alt='Img'
							/>
						</Link>
						<Link
							to={route.newdashboard}
							className='logo-small'
						>
							<ImageWithBasePath
								src='assets/img/logo-small.png'
								alt='Img'
							/>
						</Link>
						<Link
							id='toggle_btn'
							to='#'
							onClick={handlesidebar}
						>
							<i data-feather='chevrons-left' />
							<ChevronsLeft className='feather-16' />
						</Link>
					</div>
					{/* /Logo */}
					{/* <div className='modern-profile p-3 pb-0'>
						<div className='text-center rounded bg-light p-3 mb-4 border'>
							<div className='avatar avatar-lg online mb-3'>
								<ImageWithBasePath
									src='assets/img/profiles/avatar-25.jpg'
									alt='Img'
									className='img-fluid rounded-circle'
								/>
							</div>
							<h6 className='fs-14 fw-bold mb-1'>
								{user?.fullname || 'Username'}
							</h6>
							<p className='fs-12 mb-0'>{user?.role}</p>
						</div>
						<div className='sidebar-nav mb-3'>
							<ul
								className='nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified bg-transparent'
								role='tablist'
							>
								<li className='nav-item'>
									<Link
										className='nav-link active border-0'
										to='#'
									>
										Menu
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link border-0'
										to={route.chat}
									>
										Chats
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link border-0'
										to={route.email}
									>
										Inbox
									</Link>
								</li>
							</ul>
						</div>
					</div> */}
					<div className='sidebar-header p-3 pb-0 pt-2'>
						<div className='text-center rounded bg-light p-2 mb-4 sidebar-profile d-flex align-items-center'>
							<div className='avatar avatar-md onlin'>
								<ImageWithBasePath
									src='assets/img/profiles/avatar-25.jpg'
									alt='Img'
									className='img-fluid rounded-circle'
								/>
							</div>
							<div className='text-start sidebar-profile-info ms-2'>
								<h6 className='fs-14 fw-bold mb-1'>
									{user?.fullname || 'Username'}
								</h6>
								<p className='fs-12'>{user?.role}</p>
							</div>
						</div>
						<div className='d-flex align-items-center justify-content-between menu-item mb-3'>
							<div>
								<Link
									to={route.newdashboard}
									className='btn btn-sm btn-icon bg-light'
								>
									<i className='ti ti-layout-grid-remove' />
								</Link>
							</div>
							{/* <div>
								<Link
									to={route.chat}
									className='btn btn-sm btn-icon bg-light'
								>
									<i className='ti ti-brand-hipchat' />
								</Link>
							</div> */}
							{/* <div>
								<Link
									to={route.email}
									className='btn btn-sm btn-icon bg-light position-relative'
								>
									<i className='ti ti-message' />
								</Link>
							</div> */}
							<div className='notification-item'>
								<Link
									to={route.activities}
									className='btn btn-sm btn-icon bg-light position-relative'
								>
									<i className='ti ti-bell' />
									<span className='notification-status-dot' />
								</Link>
							</div>
							<div className='me-0'>
								<Link
									to={route.generalsettings}
									className='btn btn-sm btn-icon bg-light'
								>
									<i className='ti ti-settings' />
								</Link>
							</div>
						</div>
					</div>
				</>
				<Scrollbars>
					<div className='sidebar-inner slimscroll'>
						<div
							id='sidebar-menu'
							className='sidebar-menu'
						>
							<ul>
								{SidebarData?.filter(
									(mainLabel) =>
										!mainLabel.roles || mainLabel.roles.includes(user?.role) // Filter main labels by role
								).map((mainLabel, index) => (
									<li
										className='submenu-open'
										key={index}
									>
										<h6 className='submenu-hdr'>{mainLabel?.label}</h6>
										<ul>
											{mainLabel?.submenuItems
												?.filter(
													(item) =>
														!item.roles || item.roles.includes(user?.role) // Filter submenu items by role
												)
												.map((title, i) => {
													let link_array = [];
													title?.submenuItems?.map((link) => {
														link_array.push(link?.link);
														if (link?.submenu) {
															link?.submenuItems?.map((item) => {
																link_array.push(item?.link);
															});
														}
														return link_array;
													});
													title.links = link_array;
													return (
														<React.Fragment key={i}>
															{' '}
															<li
																className={`submenu ${
																	!title?.submenu &&
																	Location.pathname === title?.link
																		? 'custom-active-hassubroute-false'
																		: ''
																}`}
															>
																<Link
																	to={title?.link}
																	onClick={() => toggleSidebar(title?.label)}
																	className={`${
																		subOpen === title?.label ? 'subdrop' : ''
																	} ${
																		title?.links?.includes(Location.pathname)
																			? 'active'
																			: ''
																	}`}
																>
																	<i className={`ti ti-${title.icon} me-2`}></i>
																	<span className='custom-active-span'>
																		{t(title?.label)}
																	</span>
																	{title?.submenu && (
																		<span className='menu-arrow' />
																	)}
																</Link>
																<ul
																	style={{
																		display:
																			subOpen === title?.label
																				? 'block'
																				: 'none',
																	}}
																>
																	{title?.submenuItems
																		?.filter(
																			(item) =>
																				!item.roles ||
																				item.roles.includes(user?.role) // Filter sub-submenu items by role
																		)
																		.map((item, titleIndex) => (
																			<li
																				className='submenu submenu-two'
																				key={titleIndex}
																			>
																				<Link
																					to={item?.link}
																					className={`${
																						item?.submenuItems
																							?.map((link) => link.link)
																							.includes(Location.pathname) ||
																						item?.link === Location.pathname
																							? 'active'
																							: ''
																					} ${
																						subsidebar === item?.label
																							? 'subdrop'
																							: ''
																					}`}
																					onClick={() =>
																						toggleSubsidebar(item?.label)
																					}
																				>
																					{item?.label}
																					{item?.submenu && (
																						<span className='menu-arrow inside-submenu' />
																					)}
																				</Link>
																				<ul
																					style={{
																						display:
																							subsidebar === item?.label
																								? 'block'
																								: 'none',
																					}}
																				>
																					{item?.submenuItems
																						?.filter(
																							(subItem) =>
																								!subItem.roles ||
																								subItem.roles.includes(
																									user?.role
																								) // Filter deepest level items
																						)
																						.map((items, subIndex) => (
																							<li key={subIndex}>
																								<Link
																									to={items?.link}
																									className={`${
																										subsidebar === items?.label
																											? 'submenu-two subdrop'
																											: 'submenu-two'
																									} ${
																										items?.submenuItems
																											?.map((link) => link.link)
																											.includes(
																												Location.pathname
																											) ||
																										items?.link ===
																											Location.pathname
																											? 'active'
																											: ''
																									}`}
																								>
																									{items?.label}
																								</Link>
																							</li>
																						))}
																				</ul>
																			</li>
																		))}
																</ul>
															</li>
														</React.Fragment>
													);
												})}
										</ul>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Scrollbars>
			</div>
			<HorizontalSidebar />
			{/* <CollapsedSidebar /> */}
		</div>
	);
};

export default Sidebar;
