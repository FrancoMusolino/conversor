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
      <Stack as='main' width='full' alignItems='center'>
        {children}
      </Stack>
      <Footer />
    </Container>
  );
};

export default Layout;
