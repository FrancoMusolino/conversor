import React from 'react';
import { Formik } from 'formik';
import { Box, Stack } from '@chakra-ui/react';
import FormInput from './FormInput';

const Form = () => {
  return (
    <Formik>
      <Stack direction='column' gap={8}>
        <FormInput />
        <Box>Chau</Box>
      </Stack>
    </Formik>
  );
};

export default Form;
