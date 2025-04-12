
import React from 'react'
import { Link } from 'react-router-dom'
import NexmoConfig from '../../../core/modals/settings/nexmoconfig'
import TwilioConfig from '../../../core/modals/settings/twilioconfig'
import TwoFactorConfig from '../../../core/modals/settings/twofactorconfig'
import SettingsSideBar from '../settingssidebar'
import ImageWithBasePath from '../../../core/img/imagewithbasebath'
import CommonFooter from '../../../core/common/footer/commonFooter'
import RefreshIcon from '../../../core/common/tooltip-content/refresh'
import CollapesIcon from '../../../core/common/tooltip-content/collapes'

const SmsGateway = () => {

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
                                        <h4>SMS Settings</h4>
                                    </div>
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
                                                <div className="card flex-fill">
                                                    <div className="card-body">
                                                        <div className="w-100 d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <ImageWithBasePath
                                                                    src="assets/img/icons/sms-icon-01.svg"
                                                                    alt="Img"
                                                                />
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <Link
                                                                    to="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#nexmo-config"
                                                                >
                                                                    <i data-feather="settings" className="me-2" />
                                                                </Link>
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
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
                                                <div className="card flex-fill">
                                                    <div className="card-body">
                                                        <div className="w-100 d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <ImageWithBasePath
                                                                    src="assets/img/icons/sms-icon-02.svg"
                                                                    alt="Img"
                                                                />
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <Link
                                                                    to="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#factor-config"
                                                                >
                                                                    <i data-feather="settings" className="me-2" />
                                                                </Link>
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
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
                                                <div className="card flex-fill">
                                                    <div className="card-body">
                                                        <div className="w-100 d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <ImageWithBasePath
                                                                    src="assets/img/icons/sms-icon-03.svg"
                                                                    alt="Img"
                                                                />
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <Link
                                                                    to="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#twilio-config"
                                                                >
                                                                    <i data-feather="settings" className="me-2" />
                                                                </Link>
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

            <NexmoConfig />
            <TwoFactorConfig />
            <TwilioConfig />
        </div>
    )
}

export default SmsGateway