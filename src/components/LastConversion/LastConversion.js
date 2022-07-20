import React from 'react';
import { useSelector } from 'react-redux';
import { Center } from '@chakra-ui/react';

const LastConversion = () => {
  const lastConversion = useSelector(state => state.history.lastConversion);

  return (
    <Center fontSize='sm' color='brand.textDarkGray'>
      {lastConversion
        ? `Última conversión: ${lastConversion}`
        : 'Empezá a realizar conversiones!!'}
    </Center>
  );
};

export default LastConversion;
