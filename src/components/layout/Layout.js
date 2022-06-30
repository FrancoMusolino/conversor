import React from 'react';
import { Container, Stack } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <Container
      height='100vh'
      justifyContent='space-between'
      maxW='container.sm'
      centerContent
    >
      <Header />
      <Stack as='main' height='86vh' justifyContent='space-around'>
        {children}
      </Stack>
      <Footer />
    </Container>
  );
};

export default Layout;
