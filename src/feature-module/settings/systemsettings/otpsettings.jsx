
import React from 'react'
import Select from 'react-select'
import SettingsSideBar from '../settingssidebar';
import RefreshIcon from '../../../core/common/tooltip-content/refresh';
import CollapesIcon from '../../../core/common/tooltip-content/collapes';
import CommonFooter from '../../../core/common/footer/commonFooter';

const OtpSettings = () => {

    const duration = [
        { value: '5mins', label: '5 Mins' },
        { value: '10mins', label: '10 Mins' },
    ];
    const numbers = [
        { value: '4', label: '4' },
        { value: '5', label: '5' },
    ];
    const sms = [
        { value: 'SMS', label: 'SMS' },
        { value: 'EMail', label: 'EMail' },
    ];

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
                                    <form>
                                        <div className="card-header">
                                            <h4>OTP</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="localization-info">
                                                <div className="row align-items-center">
                                                    <div className="col-sm-4">
                                                        <div className="setting-info">
                                                            <h6>OTP Type</h6>
                                                            <p>Your can configure the type</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="localization-select">
                                                            <Select
                                                                classNamePrefix="react-select"
                                                                options={sms}
                                                                placeholder="Choose"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-sm-4">
                                                        <div className="setting-info">
                                                            <h6>OTP Digit Limit</h6>
                                                            <p>Select size of the format </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="localization-select">
                                                            <Select
                                                                classNamePrefix="react-select"
                                                                options={numbers}
                                                                placeholder="Choose"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-sm-4">
                                                        <div className="setting-info">
                                                            <h6>OTP Expire Time</h6>
                                                            <p>Select expire time of OTP </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="localization-select">
                                                            <Select
                                                                classNamePrefix="react-select"
                                                                options={duration}
                                                                placeholder="Choose"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-end">
                                                <button type="button" className="btn btn-secondary me-2">
                                                    Cancel
                                                </button>
                                                <button type="submit" className="btn btn-primary">
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>
                                    </form>
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

export default OtpSettings
