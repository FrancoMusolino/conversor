import React from 'react';
import { Text } from '@chakra-ui/react';
import Button from './Button';

const NumberButton = ({ value }) => {
  return (
    <Button>
      <Text fontSize='3xl'>{value}</Text>
    </Button>
  );
};

export default NumberButton;
