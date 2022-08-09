import React from 'react';
import { useDispatch } from 'react-redux';
import * as formActions from '../../redux/form/form-actions';
import { Icon } from '@chakra-ui/react';

import Button from './Button';

const DeleteButton = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <Button handleClick={() => dispatch(formActions.deleteNumber())}>
      <Icon fontSize='3xl' color='brand.primary' as={value} />
    </Button>
  );
};

export default DeleteButton;
