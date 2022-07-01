import React from 'react';
import { Stack } from '@chakra-ui/react';
import LinkItem from './LinkItem';

const Header = () => {
  return (
    <Stack
      as='header'
      height='80px'
      width='255px'
      direction='row'
      justifyContent='space-between'
      alignItems='end'
    >
      <LinkItem toRight path='/' text='Exchange Rate' />
      <LinkItem path='history' text='Historial' />
    </Stack>
  );
};

export default Header;
