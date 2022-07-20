import React from 'react';
import { useSelector } from 'react-redux';

import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

const FormInput = ({ name }) => {
  const value = useSelector(
    state => state.form[name === 'fromCurrency' ? 'inputValue' : 'result']
  );

  return (
    <FormControl>
      <Input readOnly value={value} />
      <FormErrorMessage>Hola</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
