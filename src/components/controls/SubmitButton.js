import React from 'react';
import { Icon } from '@chakra-ui/icons';

import Button from './Button';

const SubmitButton = ({ value }) => {
  return (
    <Button>
      <Icon fontSize='3xl' color='green' as={value} />
    </Button>
  );
};

export default SubmitButton;
