import React from "react";
import { Route, Routes } from "react-router-dom";

import { pagesRoute, posRoutes, publicRoutes } from "./router.link";

import PosLayout from "./posLayout";
import AuthPages from "./authPages";
import HeaderLayouts from "./headerLayout";

const AllRoutes = () => {
 

  return (
    <div>
      <Routes>
        
        <Route element={<HeaderLayouts />}>
          {publicRoutes.map((route, id) => (
            <Route path={route.path} element={route.element} key={id} />
          ))}
        </Route>
        <Route element={<PosLayout />}>
          {posRoutes.map((route, id) => (
            <Route path={route.path} element={route.element} key={id} />
          ))}
        </Route>
        <Route element={<AuthPages />}>
          {pagesRoute.map((route, id) => (
            <Route path={route.path} element={route.element} key={id} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};
export default AllRoutes;
