import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as formActions from '../../redux/form/form-actions';
import { Container, Stack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(formActions.resetValues());
  }, [pathname, dispatch]);

  return (
    <Container
      height='100vh'
      justifyContent='space-between'
      maxW='container.sm'
      centerContent
    >
      <Header />
      <Stack as='main' width='full' alignItems='center'>
        {children}
      </Stack>
      <Footer args={{ visibility: pathname.match(/history/i) && 'hidden' }} />
    </Container>
  );
};

export default Layout;
