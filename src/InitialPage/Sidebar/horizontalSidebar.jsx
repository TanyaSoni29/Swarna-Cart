import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { SidebarData1 } from "../../core/json/sidebar_dataone";

const HorizontalSidebar = () => {
  const [opendSubMenu, setOpendSubMenu] = useState([null, null]);
  const sidebarRef = useRef(null);
  const location = useLocation();

  const showMenu = (title) => {
    setOpendSubMenu((prevState) => (
      prevState[0] === title ? [null, null] : [title, null]
    ));
  };

  const showSubMenu = (title) => {
    setOpendSubMenu((prevState) => (
      prevState[1] === title ? [prevState[0], null] : [prevState[0], title]
    ));
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpendSubMenu([null, null]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActiveMainMenu = (mainMenus) => {
    const currentPath = location.pathname || ''; // Handle case where location.pathname is undefined

    // Check if mainMenus has route and compare with currentPath
    return mainMenus.route && currentPath.split('/')[1] === mainMenus.route.split('/')[1] ||
      mainMenus.subRoutes?.some(subMenu => subMenu.route && currentPath.split('/')[1] === subMenu.route.split('/')[1]);
  };

  const isActiveSubMenu = (mainMenus) => {
    const currentPath = location.pathname || ''; // Handle case where location.pathname is undefined
    return mainMenus.route && currentPath.split('/')[1] === mainMenus.route.split('/')[1] ||
      mainMenus.subRoutes?.some(subMenu => subMenu.route && currentPath.split('/')[1] === subMenu.route.split('/')[1]);
  };

  return (
    <div className="sidebar sidebar-horizontal" id="horizontal-menu" ref={sidebarRef}>
      <div className="sidebar-menu" id="sidebar-menu-3">
        <div className="main-menu">
          <ul className="nav">
            {SidebarData1.map((mainTittle, mainIndex) => (
              <li className="submenu" key={mainIndex}>
                <a
                  className={`${opendSubMenu[0] === mainTittle.tittle || isActiveMainMenu(mainTittle) ? 'active' : ''}`}
                  onClick={() => showMenu(mainTittle.tittle)}
                >
                  {mainTittle.tittle === 'Components' ? (
                    <i className="feather icon-layers"></i>
                  ) : (
                    <i className={`ti ti-${mainTittle.icon} me-2`}></i>
                  )}
                  <span>{mainTittle.tittle}</span>
                  <span className="menu-arrow"></span>
                </a>
                <ul className={`submenus-two ${opendSubMenu[0] === mainTittle.tittle ? 'd-block' : 'd-none'}`}>
                  {mainTittle.subRoutes.map((mainMenus, menuIndex) => (
                    <React.Fragment key={menuIndex}>
                      {!mainMenus.hasSubRoute && (
                        <li>
                          <NavLink
                            to={mainMenus.route}
                            className={({ isActive }) => isActive ? 'active' : ''}
                          >
                            {/* <img
                              src={mainMenus.icon}
                              alt="icon"
                              hidden={
                                mainTittle.tittle === 'Inventory' ||
                                mainTittle.tittle === 'Profile' ||
                                mainTittle.tittle === 'Reports' ||
                                mainTittle.tittle === 'Settings'
                              }
                            /> */}
                            <span>{mainMenus.tittle}</span>
                          </NavLink>
                        </li>
                      )}
                      {mainMenus.hasSubRoute && (
                        <li className="submenu">
                          <a
                            className={`${isActiveSubMenu(mainMenus) ? 'active' : ''}`}
                            onClick={() => showSubMenu(mainMenus.tittle)}
                          >
                            <span>{mainMenus.tittle}</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <ul
                            className={`submenus-two ${opendSubMenu[1] === mainMenus.tittle ? 'd-block' : 'd-none'}`}
                          >
                            {mainMenus.subRoutes.map((subDropMenus, subIndex) => (
                              <li key={subIndex}>
                              
                                <NavLink to={subDropMenus.route} className={({ isActive }) => isActive ? 'active' : ''}>
                                  {subDropMenus.tittle}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HorizontalSidebar;