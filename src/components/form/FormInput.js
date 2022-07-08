import React from 'react';
import { useSelector } from 'react-redux';
import { Field } from 'formik';

import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

const FormInput = () => {
  const inputValue = useSelector(state => state.form.inputValue);

  return (
    <Field name='cuantity'>
      {({ field, form }) => (
        <FormControl>
          <Input readOnly {...field} value={inputValue} />
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormInput;
