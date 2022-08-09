import React from 'react';
import { useFormikContext } from 'formik';
import { Icon } from '@chakra-ui/icons';
import { Button as ChakraButton } from '@chakra-ui/react';

import Button from './Button';

const SubmitButton = ({ value }) => {
  const { isSubmitting } = useFormikContext();

  return (
    <Button>
      <ChakraButton
        display='flex'
        justifyContent='center'
        fontSize='xl'
        color='status.success'
        variant='unstyled'
        type='submit'
        isLoading={isSubmitting}
      >
        <Icon fontSize='3xl' color='status.success' as={value} />
      </ChakraButton>
    </Button>
  );
};

export default SubmitButton;
