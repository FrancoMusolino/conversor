import React from 'react';
import { useDispatch } from 'react-redux';

import { Text } from '@chakra-ui/react';
import Button from './Button';

import * as formActions from './../../redux/form/form-actions';

const NumberButton = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <Button handleClick={() => dispatch(formActions.addNumber(value))}>
      <Text fontSize='3xl'>{value}</Text>
    </Button>
  );
};

export default NumberButton;
