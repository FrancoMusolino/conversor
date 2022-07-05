import React from 'react';
import { Field } from 'formik';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

const FormInput = () => {
  return (
    <Field name='cuantity'>
      {({ field, form }) => (
        <FormControl>
          <Input readOnly {...field} value={0} />
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormInput;
