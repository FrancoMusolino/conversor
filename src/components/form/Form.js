import React from 'react';

import { Stack } from '@chakra-ui/react';

import FormInput from './FormInput';

const Form = ({ name, options }) => {
  return (
    <Stack direction='column' gap='30px'>
      <FormInput name={name} options={options} />
      <FormInput />
    </Stack>
  );
};

export default Form;
