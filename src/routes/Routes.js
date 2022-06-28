import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from "react-router-dom";

import History from "../pages/History";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
      </ReactDomRoutes>
    </BrowserRouter>
  );
};

export default Routes;
