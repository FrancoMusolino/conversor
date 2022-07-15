import React from 'react';
import { useDispatch } from 'react-redux';
import * as formActions from '../../redux/form/form-actions';
import { Text } from '@chakra-ui/react';
import Button from './Button';

const DeleteAllButton = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <Button handleClick={() => dispatch(formActions.deleteAll())}>
      <Text fontSize='3xl' color='brand.primary'>
        {value}
      </Text>
    </Button>
  );
};

export default DeleteAllButton;
