import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

import Form from './Form';

const FormContainer = ({ name, options }) => {
  return (
    <Stack
      height='40vh'
      direction='column'
      justifyContent='center'
      gap={6}
      textAlign='center'
    >
      <Form name={name} options={options} />
      <Text fontSize='sm' color='brand.textDarkGray'>
        Ultíma conversión 04/05/2021
      </Text>
    </Stack>
  );
};

export default FormContainer;
