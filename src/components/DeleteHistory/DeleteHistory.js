import React from 'react';
import { Box, Stack, Text, Flex, useDisclosure } from '@chakra-ui/react';

import { FaTrash } from 'react-icons/fa';
import IconContainer from '../IconContainer/IconContainer';
import ModalConfirmation from './ModalConfirmation';

const DeleteHistory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        maxW='600px'
        margin='auto'
        position='fixed'
        bottom={0}
        left={0}
        right={0}
        zIndex={1000}
        padding={3}
      >
        <Flex
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Stack>
            <Text>ELIMINAR HISTORIAL</Text>
          </Stack>
          <IconContainer args={{ width: '50px', height: '50px' }}>
            <FaTrash onClick={onOpen} fontSize='18px' />
          </IconContainer>
        </Flex>
      </Box>
      <ModalConfirmation open={isOpen} onClose={onClose} />
    </>
  );
};

export default DeleteHistory;
