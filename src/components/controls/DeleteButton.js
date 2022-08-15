import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNumber } from '../../features/form/form-slice';
import { Icon } from '@chakra-ui/react';

import Button from './Button';

const DeleteButton = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <Button handleClick={() => dispatch(deleteNumber())}>
      <Icon fontSize='3xl' color='brand.primary' as={value} />
    </Button>
  );
};

export default DeleteButton;
