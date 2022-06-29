import React from 'react';
import { Container } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Container maxW='container.sm' centerContent>
      <header>SOY UN HEADER</header>
      {children}
      <footer>Hola pa</footer>
    </Container>
  );
};

export default Layout;
