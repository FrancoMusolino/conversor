import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Stack, Text, Flex, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { FaTrash } from 'react-icons/fa';
import { BiRightArrowAlt } from 'react-icons/bi';

import IconContainer from '../IconContainer/IconContainer';
import ModalConfirmation from './ModalConfirmation';

const DeleteHistory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isEmpty = useSelector(
    state => Object.keys(state.history.historyOfConversions).length
  );

  return (
    <>
      <Box
        position='fixed'
        bottom={0}
        width='100%'
        maxW='420px'
        padding={2}
        paddingInline={4}
        background='linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #1A1A1A'
        borderTop='1px'
        borderColor='brand.textGray'
        borderRadius={5}
      >
        <Flex
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Stack direction='row' alignItems='center' color='brand.primary'>
            <Text color='white' fontSize='sm'>
              ELIMINAR HISTORIAL
            </Text>
            <BiRightArrowAlt fontSize='30px' />
          </Stack>
          <motion.button
            disabled={!isEmpty}
            onClick={onOpen}
            whileTap={{ scale: 0.85 }}
          >
            <IconContainer
              args={{ width: '50px', height: '50px', color: 'brand.primary' }}
            >
              <FaTrash fontSize='18px' />
            </IconContainer>
          </motion.button>
        </Flex>
      </Box>
      <ModalConfirmation open={isOpen} onClose={onClose} />
    </>
  );
};

export default DeleteHistory;
