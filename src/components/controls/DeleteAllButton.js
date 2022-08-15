import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAll } from '../../features/form/form-slice';
import { Text } from '@chakra-ui/react';

import Button from './Button';

const DeleteAllButton = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <Button handleClick={() => dispatch(deleteAll())}>
      <Text fontSize='3xl' color='brand.primary'>
        {value}
      </Text>
    </Button>
  );
};

export default DeleteAllButton;
