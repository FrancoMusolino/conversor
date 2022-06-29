import React from 'react';
import { Text } from '@chakra-ui/react';
import Button from './Button';

const DeleteAllButton = ({ value }) => {
  return (
    <Button>
      <Text fontSize='3xl' color='red'>
        {value}
      </Text>
    </Button>
  );
};

export default DeleteAllButton;
