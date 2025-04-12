import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ThemeSettings from '../InitialPage/themeSettings';
import { Outlet, useLocation } from 'react-router-dom';
import Header from "../InitialPage/Sidebar/Header";
import Sidebar from "../InitialPage/Sidebar/Sidebar";
import TwoColumnSidebar from '../InitialPage/Sidebar/two-column';
import HorizontalSidebar from '../InitialPage/Sidebar/horizontalSidebar';

const HeaderLayouts = () => {
  // const [showLoader, setShowLoader] = useState(true);
  const location = useLocation()
  const data = useSelector((state) => state.rootReducer.toggle_header);
  const dataWidth = useSelector((state) => state.themeSetting.dataWidth);
  const dataLayout = useSelector((state) => state.themeSetting.dataLayout);
  const dataSidebarAll = useSelector((state) => state.themeSetting.dataSidebarAll);
  const dataColorAll = useSelector((state) => state.themeSetting.dataColorAll);
  const dataTopBarColorAll = useSelector((state) => state.themeSetting.dataTopBarColorAll);
  const dataTopbarAll = useSelector((state) => state.themeSetting.dataTopbarAll);

  useEffect(() => {
      // Show the loader when navigating to a new route
      // setShowLoader(true);

      // Hide the loader after 2 seconds
      const timeoutId = setTimeout(() => {
        // setShowLoader(false);
      }, 2000);

      window.scrollTo(0, 0);
      return () => {
        clearTimeout(timeoutId); // Clear the timeout when component unmounts
      };
    
  }, [location.pathname]);
  // const Preloader = () => {
  //   return (
  //     <div id="global-loader">
  //       <div className="whirly-loader"> </div>
  //     </div>
  //   );
  // };


  return (
    <>
      <style>
        {`
     :root {
       --sidebar--rgb-picr: ${dataSidebarAll};
       --topbar--rgb-picr:${dataTopbarAll};
       --topbarcolor--rgb-picr:${dataTopBarColorAll};
       --primary-rgb-picr:${dataColorAll};
     }
   `}
      </style>

      <div className={`
      ${dataLayout === "mini" || dataLayout === 'layout-hovered' || dataWidth === 'box' ? "mini-sidebar" : ''}
      ${dataLayout === "horizontal" || dataLayout === "horizontal-single" || dataLayout === "horizontal-overlay" || dataLayout === "horizontal-box" ? 'menu-horizontal' : ''}
     ${dataWidth === 'box' ? 'layout-box-mode' : ''} 
   
     
     `}>
        <>
            <>
              {/* {showLoader && <Preloader />} */}
              <div className={`main-wrapper ${data ? "header-collapse" : ""}`}>
                {/* <Loader /> */}
                <Header />
                <Sidebar />
                <TwoColumnSidebar />
                <HorizontalSidebar />
                <Outlet />
                {location.pathname.includes('layout') ? <></> : <ThemeSettings />}

              </div>
            </> 



        </>

      </div>

    </>
  )
}

export default HeaderLayouts