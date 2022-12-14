import React from 'react';
import { useDispatch } from 'react-redux';
import { clearConversionHistory } from '../../features/history/histoty-slice';
import { motion } from 'framer-motion';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Flex,
} from '@chakra-ui/react';

const ModalConfirmation = ({ open, onClose }) => {
  const dispatch = useDispatch();

  return (
    <AlertDialog isOpen={open} isCentered={true} onOverlayClick={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent
          gap={7}
          width='90%'
          padding={8}
          backgroundColor='brand.background'
          borderRadius={30}
        >
          <AlertDialogBody
            padding={0}
            color='white'
            fontSize='sm'
            textAlign='center'
          >
            ¿Seguro deseas eliminar todo el historial de conversiones?
          </AlertDialogBody>

          <Flex justifyContent='center' gap={8}>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onClose}
                backgroundColor='brand.primary'
                borderRadius={15}
                color='white'
                fontSize='sm'
                _hover={{ backgroundColor: 'brand.primary' }}
                _active={{ opacity: '0.8' }}
              >
                CANCELAR
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => {
                  dispatch(clearConversionHistory());
                  onClose();
                }}
                backgroundColor='status.success'
                borderRadius={15}
                color='white'
                fontSize='sm'
                _hover={{ background: 'status.success' }}
                _active={{ opacity: '0.8' }}
              >
                ACEPTAR
              </Button>
            </motion.div>
          </Flex>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ModalConfirmation;
