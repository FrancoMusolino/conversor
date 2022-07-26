import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogFooter,
  Button,
  Flex,
} from '@chakra-ui/react';
import React from 'react';

const ModalConfirmation = ({ open, onClose }) => {
  return (
    <AlertDialog isOpen={open} isCentered={true}>
      <AlertDialogOverlay>
        <AlertDialogContent
          padding={8}
          backgroundColor='brand.background'
          borderRadius={30}
        >
          <AlertDialogBody textAlign='center'>
            ¿Seguro deseas eliminar todo el historial de conversiones?
          </AlertDialogBody>

          <Flex justifyContent='center' gap={10}>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme='red' onClick={onClose} ml={3}>
              Delete
            </Button>
          </Flex>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ModalConfirmation;
