import React from 'react';
import { useSelector } from 'react-redux';

import { FormControl, FormErrorMessage, Input, Box } from '@chakra-ui/react';

const FormInput = ({ name }) => {
  const form = useSelector(state => state.form);

  return (
    <FormControl>
      <Input
        readOnly
        value={name === 'fromCurrency' ? form.inputValue : form.result}
      />
      <FormErrorMessage>Hola</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
