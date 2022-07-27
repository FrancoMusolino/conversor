import React from 'react';
import { useDispatch } from 'react-redux';
import * as historyActions from '../../redux/history/history-actions';
import * as formActions from '../../redux/form/form-actions';

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
            <Button
              onClick={onClose}
              backgroundColor='brand.primary'
              borderRadius={15}
              color='white'
              fontSize='sm'
            >
              CANCELAR
            </Button>
            <Button
              onClick={() => {
                dispatch(historyActions.clearConversionHistory());
                dispatch(formActions.resetValues());
                onClose();
              }}
              backgroundColor='status.success'
              borderRadius={15}
              color='white'
              fontSize='sm'
            >
              ACEPTAR
            </Button>
          </Flex>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ModalConfirmation;
