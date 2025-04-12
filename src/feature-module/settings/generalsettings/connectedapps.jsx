import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/img/imagewithbasebath'
import CommonFooter from '../../../core/common/footer/commonFooter';
import RefreshIcon from '../../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../../core/common/tooltip-content/collapes';
import SettingsSideBar from '../settingssidebar';

const ConnectedApps = () => {


    return (
        <div>
            <div className="page-wrapper">
                <div className="content settings-content">
                    <div className="page-header settings-pg-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4>Settings</h4>
                                <h6>Manage your settings on portal</h6>
                            </div>
                        </div>
                        <ul className="table-top-head">
                            <RefreshIcon />
                            <CollapesIcon />
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="settings-wrapper d-flex">
                                <SettingsSideBar />
                                <div className="card flex-fill mb-0">
                                    <div className="card-header">
                                        <h4 className="fs-18 fw-bold">Connected Apps</h4>
                                    </div>
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                                            <div className="app-icon">
                                                                <ImageWithBasePath
                                                                    src="assets/img/icons/app-icon-01.svg"
                                                                    alt="Img"
                                                                />
                                                            </div>
                                                            <div className="connect-btn">
                                                                <Link
                                                                    to="#"
                                                                    className="badge bg-outline-success"
                                                                >
                                                                    Connected
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5 className="fs-16 fw-medium">Calendar</h5>
                                                            </div>
                                                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                                                <input
                                                                    type="checkbox"
                                                                    id="user1"
                                                                    className="check"
                                                                    defaultChecked
                                                                />
                                                                <label htmlFor="user1" className="checktoggle">
                                                                    {" "}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                                            <div className="app-icon">
                                                                <ImageWithBasePath
                                                                    src="assets/img/icons/app-icon-02.svg"
                                                                    alt="Img"
                                                                />
                                                            </div>
                                                            <div className="connect-btn">
                                                                <Link
                                                                    to="#"
                                                                    className="badge bg-outline-success"
                                                                >
                                                                    Connected
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5 className="fs-16 fw-medium">Figma</h5>
                                                            </div>
                                                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                                                <input
                                                                    type="checkbox"
                                                                    id="user2"
                                                                    className="check"
                                                                    defaultChecked
                                                                />
                                                                <label htmlFor="user2" className="checktoggle">
                                                                    {" "}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                                            <div className="app-icon">
                                                                <ImageWithBasePath
                                                                    src="assets/img/icons/app-icon-03.svg"
                                                                    alt="Img"
                                                                />
                                                            </div>
                                                            <div className="connect-btn">
                                                                <Link
                                                                    to="#"
                                                                    className="badge bg-outline-success"
                                                                >
                                                                    Connected
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5 className="fs-16 fw-medium">Dropbox</h5>
                                                            </div>
                                                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                                                <input
                                                                    type="checkbox"
                                                                    id="user3"
                                                                    className="check"
                                                                    defaultChecked
                                                                />
                                                                <label htmlFor="user3" className="checktoggle">
                                                                    {" "}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                                            <div className="app-icon">
                                                                <ImageWithBasePath
                                                                    src="assets/img/icons/app-icon-04.svg"
                                                                    alt="Img"
                                                                />
                                                            </div>
                                                            <div className="connect-btn">
                                                                <Link
                                                                    to="#"
                                                                    className="badge bg-outline-success"
                                                                >
                                                                    Connected
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5 className="fs-16 fw-medium">Slack</h5>
                                                            </div>
                                                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                                                <input
                                                                    type="checkbox"
                                                                    id="user4"
                                                                    className="check"
                                                                    defaultChecked
                                                                />
                                                                <label htmlFor="user4" className="checktoggle">
                                                                    {" "}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                                            <div className="app-icon">
                                                                <ImageWithBasePath
                                                                    src="assets/img/icons/app-icon-05.svg"
                                                                    alt="Img"
                                                                />
                                                            </div>
                                                            <div className="connect-btn">
                                                                <Link
                                                                    to="#"
                                                                    className="badge bg-outline-success"
                                                                >
                                                                    Connected
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5 className="fs-16 fw-medium">Github</h5>
                                                            </div>
                                                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                                                <input
                                                                    type="checkbox"
                                                                    id="user5"
                                                                    className="check"
                                                                    defaultChecked
                                                                />
                                                                <label htmlFor="user5" className="checktoggle">
                                                                    {" "}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                                            <div className="app-icon">
                                                                <ImageWithBasePath
                                                                    src="assets/img/icons/app-icon-06.svg"
                                                                    alt="Img"
                                                                />
                                                            </div>
                                                            <div className="connect-btn">
                                                                <Link
                                                                    to="#"
                                                                    className="badge bg-outline-success"
                                                                >
                                                                    Connected
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5 className="fs-16 fw-medium">Figma</h5>
                                                            </div>
                                                            <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                                                <input
                                                                    type="checkbox"
                                                                    id="user6"
                                                                    className="check"
                                                                    defaultChecked
                                                                />
                                                                <label htmlFor="user6" className="checktoggle">
                                                                    {" "}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CommonFooter />
            </div>
        </div>
    )
}

export default ConnectedApps
