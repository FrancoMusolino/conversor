import React from 'react';
import { Icon } from '@chakra-ui/react';

import Button from './Button';

const DeleteButton = ({ value }) => {
  return (
    <Button>
      <Icon fontSize='3xl' color='red' as={value} />
    </Button>
  );
};

export default DeleteButton;
