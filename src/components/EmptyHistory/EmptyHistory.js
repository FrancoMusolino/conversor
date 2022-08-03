import React from 'react';
import { Stack, Center } from '@chakra-ui/react';

import { FaHistory } from 'react-icons/fa';
import IconContainer from '../IconContainer/IconContainer';

const EmptyHistory = () => {
  return (
    <Stack margin='auto' gap={3}>
      <IconContainer
        args={{ width: '150px', height: '150px', color: 'brand.primary' }}
      >
        <FaHistory fontSize='68px' />
      </IconContainer>
      <Center>Historial vacío</Center>
    </Stack>
  );
};

export default EmptyHistory;
