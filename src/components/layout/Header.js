import React from 'react';
import { Stack } from '@chakra-ui/react';
import LinkItem from './LinkItem';

const Header = () => {
  return (
    <header>
      <Stack width='225px' direction='row' justifyContent='space-between'>
        <LinkItem path='/' text='Exchange Rate' />
        <LinkItem path='history' text='Historial' />
      </Stack>
    </header>
  );
};

export default Header;
