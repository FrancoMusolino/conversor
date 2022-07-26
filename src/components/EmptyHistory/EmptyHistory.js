import React from 'react';

import { Flex, Stack, Center } from '@chakra-ui/react';
import { FaHistory } from 'react-icons/fa';

const EmptyHistory = () => {
  return (
    <Stack gap={2}>
      <Flex
        justifyContent='center'
        alignItems='center'
        width='150px'
        height='150px'
        borderRadius='full'
        boxShadow='dark-lg'
        color='brand.primary'
      >
        <FaHistory fontSize='68px' />
      </Flex>
      <Center>Historial vacío</Center>
    </Stack>
  );
};

export default EmptyHistory;
