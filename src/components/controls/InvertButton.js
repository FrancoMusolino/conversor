import React from 'react';
import { Icon } from '@chakra-ui/icons';

import Button from './Button';

const InvertButton = ({ value }) => {
  return (
    <Button>
      <Icon fontSize='3xl' color='yellow' as={value} />
    </Button>
  );
};

export default InvertButton;
