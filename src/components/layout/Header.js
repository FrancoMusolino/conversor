import React from 'react';
import { Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LinkItem from './LinkItem';

const Header = () => {
  return (
    <Stack
      height='90px'
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
