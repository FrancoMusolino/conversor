import React from 'react';
import { Formik } from 'formik';
import { Box, Stack } from '@chakra-ui/react';
import FormInput from './FormInput';

const Form = () => {
  return (
    <Formik>
      <Stack direction='column' gap={8}>
        <FormInput />
        <FormInput />
      </Stack>
    </Formik>
  );
};

export default Form;
