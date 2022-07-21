import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as formActions from '../../redux/form/form-actions';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

const ErrorModal = () => {
  const error = useSelector(state => state.form.error);
  const dispatch = useDispatch();
  const { onClose } = useDisclosure();

  return (
    <Modal isOpen={error}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upss... Ocurrió un error 😢</ModalHeader>
        <ModalCloseButton
          onClick={() => {
            dispatch(formActions.clearError());
            onClose();
          }}
        />
        <ModalBody>{error.message}</ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              dispatch(formActions.clearError());
              onClose();
            }}
            colorScheme='blue'
            mr={3}
          >
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ErrorModal;
