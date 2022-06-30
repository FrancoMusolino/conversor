import React from 'react';
import { Container, Stack } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <Container maxW='container.sm' centerContent>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
