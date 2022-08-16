import React from 'react';
import { Route, Routes as ReactDomRoutes } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

import History from '../pages/History';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />} />
      <Route path='history' element={<History />} />
      <Route
        path='*'
        element={
          <Text textAlign='center'>
            Upsss.... Se ve que la página que está buscando no existe 😢
          </Text>
        }
      />
    </ReactDomRoutes>
  );
};

export default Routes;
