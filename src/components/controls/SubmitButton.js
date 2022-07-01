import React from 'react';
import { Icon } from '@chakra-ui/icons';
import { Button as ChakraButton } from '@chakra-ui/react';

import Button from './Button';

const SubmitButton = ({ value }) => {
  return (
    <Button>
      <ChakraButton variant='unstyled' type='submit'>
        <Icon fontSize='3xl' color='status.success' as={value} />
      </ChakraButton>
    </Button>
  );
};

export default SubmitButton;
