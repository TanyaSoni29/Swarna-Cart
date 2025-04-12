import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/img/imagewithbasebath'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ChevronUp, RotateCcw } from 'feather-icons-react/build/IconComponents'
import { setToogleHeader } from '../../../core/redux/action'
import { useDispatch, useSelector } from 'react-redux'
import SettingsSideBar from '../settingssidebar'
import CommonFooter from '../../../core/common/footer/commonFooter'
import { City, Country, State } from '../../../core/common/selectOption/selectOption'
import Select from 'react-select';

const CompanySettings = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.rootReducer.toggle_header);

    const renderRefreshTooltip = (props) => (
        <Tooltip id="refresh-tooltip" {...props}>
            Refresh
        </Tooltip>
    );
    const renderCollapseTooltip = (props) => (
        <Tooltip id="refresh-tooltip" {...props}>
            Collapse
        </Tooltip>
    )
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
                            <li>
                                <OverlayTrigger placement="top" overlay={renderRefreshTooltip}>

                                    <Link data-bs-toggle="tooltip" data-bs-placement="top">
                                        <RotateCcw />
                                    </Link>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger placement="top" overlay={renderCollapseTooltip}>

                                    <Link
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        id="collapse-header"
                                        className={data ? "active" : ""}
                                        onClick={() => { dispatch(setToogleHeader(!data)) }}
                                    >
                                        <ChevronUp />
                                    </Link>
                                </OverlayTrigger>
                            </li>

                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="settings-wrapper d-flex">
                                <SettingsSideBar />
                                <div className="card flex-fill mb-0">
                                    <div className="card-header">
                                        <h4 className="fs-18 fw-bold">Company Settings</h4>
                                    </div>
                                    <div className="card-body">
                                        <form action="company-settings.html">
                                            <div className="border-bottom mb-3">
                                                <div className="card-title-head">
                                                    <h6 className="fs-16 fw-bold mb-2">
                                                        <span className="fs-16 me-2">
                                                            <i className="ti ti-building" />
                                                        </span>
                                                        Company Information
                                                    </h6>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-4 col-lg-6 col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Company Name <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Company Email Address <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="email" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Phone Number <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Fax <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Website <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-bottom mb-3 pb-3">
                                                <div className="card-title-head">
                                                    <h6 className="fs-16 fw-bold mb-2">
                                                        <span className="fs-16 me-2">
                                                            <i className="ti ti-photo" />
                                                        </span>
                                                        Company Images
                                                    </h6>
                                                </div>
                                                <div className="row align-items-center gy-3">
                                                    <div className="col-xl-9">
                                                        <div className="row gy-3 align-items-center">
                                                            <div className="col-lg-4">
                                                                <div className="logo-info">
                                                                    <h6 className="fw-medium">Company Icon</h6>
                                                                    <p>Upload Icon of your Company</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="profile-pic-upload mb-0 justify-content-lg-end">
                                                                    <div className="new-employee-field">
                                                                        <div className="mb-0">
                                                                            <div className="image-upload mb-0">
                                                                                <input type="file" />
                                                                                <div className="image-uploads">
                                                                                    <h4>
                                                                                        <i className="ti ti-upload me-1" />
                                                                                        Upload Image
                                                                                    </h4>
                                                                                </div>
                                                                            </div>
                                                                            <span className="mt-1">
                                                                                Recommended size is 450px x 450px. Max size 5mb.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="new-logo ms-xl-auto">
                                                            <Link to="#">
                                                                <ImageWithBasePath src="assets/img/logo-small.png" alt="Logo" />
                                                                <span>
                                                                    <i className="ti ti-x" />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-9">
                                                        <div className="row gy-3 align-items-center">
                                                            <div className="col-lg-4">
                                                                <div className="logo-info">
                                                                    <h6 className="fw-medium">Favicon</h6>
                                                                    <p>Upload Favicon of your Company</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="profile-pic-upload mb-0 justify-content-lg-end">
                                                                    <div className="new-employee-field">
                                                                        <div className="mb-0">
                                                                            <div className="image-upload mb-0">
                                                                                <input type="file" />
                                                                                <div className="image-uploads">
                                                                                    <h4>
                                                                                        <i className="ti ti-upload me-1" />
                                                                                        Upload Image
                                                                                    </h4>
                                                                                </div>
                                                                            </div>
                                                                            <span className="mt-1">
                                                                                Recommended size is 450px x 450px. Max size 5mb.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="new-logo ms-xl-auto">
                                                            <Link to="#">
                                                                <ImageWithBasePath src="assets/img/logo-small.png" alt="Logo" />
                                                                <span>
                                                                    <i className="ti ti-x" />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-9">
                                                        <div className="row gy-3 align-items-center">
                                                            <div className="col-lg-4">
                                                                <div className="logo-info">
                                                                    <h6 className="fw-medium">Company Logo</h6>
                                                                    <p>Upload Logo of your Company</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="profile-pic-upload mb-0 justify-content-lg-end">
                                                                    <div className="new-employee-field">
                                                                        <div className="mb-0">
                                                                            <div className="image-upload mb-0">
                                                                                <input type="file" />
                                                                                <div className="image-uploads">
                                                                                    <h4>
                                                                                        <i className="ti ti-upload me-1" />
                                                                                        Upload Image
                                                                                    </h4>
                                                                                </div>
                                                                            </div>
                                                                            <span className="mt-1">
                                                                                Recommended size is 450px x 450px. Max size 5mb.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="new-logo ms-xl-auto">
                                                            <Link to="#">
                                                                <ImageWithBasePath src="assets/img/products/company-logo.svg" alt="Logo" />
                                                                <span>
                                                                    <i className="ti ti-x" />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-9">
                                                        <div className="row gy-3 align-items-center">
                                                            <div className="col-lg-4">
                                                                <div className="logo-info">
                                                                    <h6 className="fw-medium">Company Dark Logo</h6>
                                                                    <p>Upload Logo of your Company</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="profile-pic-upload mb-0 justify-content-lg-end">
                                                                    <div className="new-employee-field">
                                                                        <div className="mb-0">
                                                                            <div className="image-upload mb-0">
                                                                                <input type="file" />
                                                                                <div className="image-uploads">
                                                                                    <h4>
                                                                                        <i className="ti ti-upload me-1" />
                                                                                        Upload Image
                                                                                    </h4>
                                                                                </div>
                                                                            </div>
                                                                            <span className="mt-1">
                                                                                Recommended size is 450px x 450px. Max size 5mb.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="new-logo ms-xl-auto">
                                                            <Link to="#" className="bg-secondary">
                                                                <ImageWithBasePath src="assets/img/products/white-logo.svg" alt="Logo" />
                                                                <span>
                                                                    <i className="ti ti-x" />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="company-address">
                                                <div className="card-title-head">
                                                    <h6 className="fs-16 fw-bold mb-2">
                                                        <span className="fs-16 me-2">
                                                            <i className="ti ti-map-pin" />
                                                        </span>
                                                        Address Information
                                                    </h6>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Address <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Country <span className="text-danger">*</span>
                                                            </label>
                                                            <Select
                                                                classNamePrefix="react-select"
                                                                options={Country}
                                                                placeholder="Choose"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                State <span className="text-danger">*</span>
                                                            </label>
                                                            <Select
                                                                classNamePrefix="react-select"
                                                                options={State}
                                                                placeholder="Choose"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                City <span className="text-danger">*</span>
                                                            </label>
                                                            <Select
                                                                classNamePrefix="react-select"
                                                                options={City}
                                                                placeholder="Choose"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Postal Code <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-end settings-bottom-btn mt-0">
                                                <button type="button" className="btn btn-secondary me-2">
                                                    Cancel
                                                </button>
                                                <Link to="#" className="btn btn-primary">
                                                    Save Changes
                                                </Link>
                                            </div>
                                        </form>
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

export default CompanySettings
