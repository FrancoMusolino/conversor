import React from 'react';
import { useDispatch } from 'react-redux';
import { addNumber } from '../../features/form/form-slice';
import { Text } from '@chakra-ui/react';

import Button from './Button';

const NumberButton = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <Button handleClick={() => dispatch(addNumber(value))}>
      <Text fontSize='3xl'>{value}</Text>
    </Button>
  );
};

export default NumberButton;
