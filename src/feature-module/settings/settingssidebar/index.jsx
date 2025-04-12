import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { all_routes } from "../../../Router/all_routes";
import { Link, useLocation } from "react-router-dom";

const SettingsSideBar = (props) => {
  const route = all_routes;
  const location = useLocation();

  const [isGeneralSettingsOpen, setIsGeneralSettingsOpen] = useState(false);
  const [isWebsiteSettingsOpen, setIsWebsiteSettingsOpen] = useState(false);


  const toggleGeneralSettings = () => {
    setIsGeneralSettingsOpen(!isGeneralSettingsOpen);
  };

  const toggleWebsiteSettings = () => {
    setIsWebsiteSettingsOpen(!isWebsiteSettingsOpen);
  };

  const [isAppSettingsOpen, setIsAppSettingsOpen] = useState(false);

  const toggleAppSettings = () => {
    setIsAppSettingsOpen((prev) => !prev);
  };
  const [isSystemSettingsOpen, setIsSystemSettingsOpen] = useState(false);
  const toggleSystemSettings = () => {
    setIsSystemSettingsOpen((prev) => !prev);
  };
  const [isFinancialSettingsOpen, setIsFinancialSettingsOpen] = useState(false);
  const toggleFinancialSettings = () => {
    setIsFinancialSettingsOpen((prev) => !prev);
  };

  const [isOtherSettingsOpen, setIsOtherSettingsOpen] = useState(false);

  const toggleOtherSettings = () => {
    setIsOtherSettingsOpen((prev) => !prev);
  };
  const [isSubmenutwo, setSubmenutwo] = useState(false);

  const toggleSubmenutwo = () => {
    setSubmenutwo((prev) => !prev);
  };
  const [isSms, setSms] = useState(false);

  const toggleSms = () => {
    setSms((prev) => !prev);
  };
  return (
    <div>
      <div className="settings-sidebar" id="sidebar2" >

        <div className="sidebar-inner slimscroll">
          <Scrollbars
            style={{ marginRight: -5, height: 800 }}
            autoHide
            autoHeight
            autoHeightMin={400} // Set a minimum height for the scrollbar
            {...props}
          // width={100}
          // autoHideTimeout={1000}
          // autoHideDuration={200}
          // autoHeight
          // autoHeightMin={0}
          // autoHeightMax="95vh"
          // thumbMinSize={30}
          // universal={false}
          // hideTracksWhenNotNeeded={true}
          >
            <div id="sidebar-menu5" className="sidebar-menu">
              <h4 className="fw-bold fs-18 mb-2 pb-2">Settings</h4>
              <ul>
                <li className="submenu-open">
                  <ul>
                    <li className="submenu">
                      <Link to="#" onClick={toggleGeneralSettings} className={location.pathname === route.generalsettings || location.pathname === route.securitysettings || location.pathname === route.notification || location.pathname == route.connectedapps ? 'active subdrop' : ''}>
                        <i className="ti ti-settings fs-18"></i>
                        <span className="fs-14 fw-medium ms-2">General Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul
                        style={{
                          display: isGeneralSettingsOpen ? "block" : "none",
                        }}
                      >
                        <li>
                          <Link
                            to={route.generalsettings}
                            className={
                              location.pathname === route.generalsettings
                                ? "active"
                                : ""
                            }
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.securitysettings}
                            className={
                              location.pathname === route.securitysettings
                                ? "active"
                                : ""
                            }
                          >
                            Security
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.notification}
                            className={
                              location.pathname === route.notification
                                ? "active"
                                : ""
                            }
                          >
                            Notifications
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.connectedapps}
                            className={
                              location.pathname === route.connectedapps
                                ? "active"
                                : ""
                            }
                          >
                            Connected Apps
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#" onClick={toggleWebsiteSettings} className={location.pathname === route.systemsettings || location.pathname === route.companysettings || location.pathname === route.localizationsettings || location.pathname == route.prefixes || location.pathname == route.preference || location.pathname == route.appearance || location.pathname == route.socialauthendication || location.pathname == route.languagesettings ? 'active subdrop' : ''}>
                        <i className="ti ti-world fs-18"></i>
                        <span className="fs-14 fw-medium ms-2">Website Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul
                        style={{
                          display: isWebsiteSettingsOpen ? "block" : "none",
                        }}
                      >
                        <li>
                          <Link
                            to={route.systemsettings}
                            className={
                              location.pathname === route.systemsettings
                                ? "active"
                                : ""
                            }
                          >
                            System Settings
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.companysettings}
                            className={
                              location.pathname === route.companysettings
                                ? "active"
                                : ""
                            }
                          >
                            Company Settings
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.localizationsettings}
                            className={
                              location.pathname === route.localizationsettings
                                ? "active"
                                : ""
                            }
                          >
                            Localization
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.prefixes}
                            className={
                              location.pathname === route.prefixes
                                ? "active"
                                : ""
                            }
                          >
                            Prefixes
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.preference}
                            className={
                              location.pathname === route.preference
                                ? "active"
                                : ""
                            }
                          >
                            Preference
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.appearance}
                            className={
                              location.pathname === route.appearance
                                ? "active"
                                : ""
                            }
                          >
                            Appearance
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.socialauthendication}
                            className={
                              location.pathname === route.socialauthendication
                                ? "active"
                                : ""
                            }
                          >
                            Social Authentication
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.languagesettings}
                            className={
                              location.pathname === route.languagesettings
                                ? "active"
                                : ""
                            }
                          >
                            Language
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#" onClick={toggleAppSettings} className={location.pathname === route.invoicesettings || location.pathname === route.invoicetemplate || location.pathname === route.printersettings || location.pathname == route.possettings || location.pathname == route.signatures || location.pathname == route.customfields ? 'active subdrop' : ''}>
                        <i className="ti ti-device-mobile fs-18"></i>
                        <span className="fs-14 fw-medium ms-2">App Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul
                        style={{
                          display: isAppSettingsOpen ? "block" : "none",
                        }}
                      >
                        <li>
                          <Link
                            to={route.invoicesettings}
                            className={
                              location.pathname === route.invoicesettings
                                ? "active"
                                : ""
                            }
                          >
                            Invoice
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.invoicetemplate}
                            className={
                              location.pathname === route.invoicetemplate
                                ? "active"
                                : ""
                            }
                          >
                            Invoice Templates
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.printersettings}
                            className={
                              location.pathname === route.printersettings
                                ? "active"
                                : ""
                            }
                          >
                            Printer
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.possettings}
                            className={
                              location.pathname === route.possettings
                                ? "active"
                                : ""
                            }
                          >
                            POS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.signatures}
                            className={
                              location.pathname === route.signatures
                                ? "active"
                                : ""
                            }
                          >
                            Signatures
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.customfields}
                            className={
                              location.pathname === route.customfields
                                ? "active"
                                : ""
                            }
                          >
                            Custom Fields
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#" onClick={toggleSystemSettings} className={location.pathname === route.invoicesettings || location.pathname === route.invoicetemplate || location.pathname === route.printersettings || location.pathname == route.possettings || location.pathname == route.signatures || location.pathname == route.customfields || location.pathname == route.emailsettings || location.pathname == route.emailtemplate || location.pathname == route.smssettings || location.pathname == route.smstemplate ? 'active subdrop' : ''}>
                        <i className="ti ti-device-desktop fs-18"></i>
                        <span className="fs-14 fw-medium ms-2">System Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul
                        style={{
                          display: isSystemSettingsOpen ? "block" : "none",
                        }}
                      >
                        <li>
                          <Link
                            to="#"
                            className={`submenu-two ${location.pathname === route.emailsettings || location.pathname === route.emailtemplate ? "active" : ""}`}
                            onClick={toggleSubmenutwo}
                          >
                            Email
                            <span className="menu-arrow inside-submenu"></span>
                          </Link>
                          <ul style={{ display: isSubmenutwo ? 'block' : 'none' }}>
                            <li>
                              <Link to={route.emailsettings} className={`${location.pathname === route.emailsettings ? "active" : ""}`}>Email Settings</Link>
                            </li>
                            <li>
                              <Link to={route.emailtemplate} className={`${location.pathname === route.emailtemplate ? "active" : ""}`}>Email Templates</Link>
                            </li>
                          </ul>

                        </li>
                        <li>
                          <Link
                            to="#"
                            className={`submenu-two ${location.pathname === route.smssettings || location.pathname == route.smstemplate ? "active" : ""}`}
                            onClick={toggleSms}
                          >
                            SMS Gateways
                            <span className="menu-arrow inside-submenu"></span>
                          </Link>
                          <ul style={{ display: isSms ? 'block' : 'none' }}>
                            <li>
                              <Link to={route.smssettings} className={`${location.pathname === route.smssettings ? "active" : ""}`}>SMS Settings</Link>
                            </li>
                            <li>
                              <Link to="sms-templates.html">SMS Templates</Link>
                            </li>
                          </ul>

                        </li>
                        <li>
                          <Link
                            to={route.otpsettings}
                            className={
                              location.pathname === route.otpsettings
                                ? "active"
                                : ""
                            }
                          >
                            OTP
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.gdbrsettings}
                            className={
                              location.pathname === route.gdbrsettings
                                ? "active"
                                : ""
                            }
                          >
                            GDPR Cookies
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu" >
                      <Link
                        to="#"
                        // className={`active ${
                        //   isFinancialSettingsOpen ? "subdrop" : ""
                        // }`}
                        onClick={toggleFinancialSettings} className={location.pathname === route.paymentgateway || location.pathname === route.banksettingslist || location.pathname === route.taxrates || location.pathname == route.currencysettings ? 'active subdrop' : ''}

                      >
                        <i className="ti ti-settings-dollar fs-18"></i>
                        <span className="fs-14 fw-medium ms-2">Financial Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul
                        style={{
                          display: isFinancialSettingsOpen ? "block" : "none",
                        }}
                      >
                        <li>
                          <Link
                            to={route.paymentgateway}
                            className={
                              location.pathname === route.paymentgateway
                                ? "active"
                                : ""
                            }
                          >
                            Payment Gateway
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.banksettingsgrid}
                            className={
                              location.pathname === route.banksettingsgrid
                                ? "active"
                                : ""
                            }
                          >
                            Bank Accounts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.taxrates}
                            className={
                              location.pathname === route.taxrates
                                ? "active"
                                : ""
                            }
                          >
                            Tax Rates
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.currencysettings}
                            className={
                              location.pathname === route.currencysettings
                                ? "active"
                                : ""
                            }
                          >
                            Currencies
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to="#" onClick={toggleOtherSettings} className={location.pathname === route.storagesettings || location.pathname === route.banipaddress ? 'active subdrop' : ''}>
                        <i className="ti ti-settings-2 fs-18"></i>
                        <span className="fs-14 fw-medium ms-2">Other Settings</span>
                        <span className="menu-arrow" />
                      </Link>
                      <ul
                        style={{
                          display: isOtherSettingsOpen ? "block" : "none",
                        }}
                      >
                        <li>
                          <Link
                            to={route.storagesettings}
                            className={
                              location.pathname === route.storagesettings
                                ? "active"
                                : ""
                            }
                          >
                            Storage
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={route.banipaddress}
                            className={
                              location.pathname === route.banipaddress
                                ? "active"
                                : ""
                            }
                          >
                            Ban IP Address
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Scrollbars>
        </div>

      </div>
    </div>
  );
};
export default SettingsSideBar;
