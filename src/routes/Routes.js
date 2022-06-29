import React from 'react';
import { Route, Routes as ReactDomRoutes } from 'react-router-dom';

import History from '../pages/History';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />} />
      <Route path='history' element={<History />} />
      <Route path='*' element={<h1>Que paso aca?</h1>} />
    </ReactDomRoutes>
  );
};

export default Routes;
