import React from 'react';

import { Stack } from '@chakra-ui/react';

import FormInput from './FormInput';

const Form = ({ name, options }) => {
  return (
    <Stack direction='column' gap={8}>
      <FormInput name={name} options={options} />
      {/* <FormInput {...data} /> */}
    </Stack>
  );
};

export default Form;
