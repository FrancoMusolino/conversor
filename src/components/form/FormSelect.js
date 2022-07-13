import React from 'react';

import { Select, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Field } from 'formik';

import { useCurrenciesData } from '../../hooks/useCurrenciesData';

const FormSelect = ({ name }) => {
  const { data: options } = useCurrenciesData();

  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl
          position='relative'
          isInvalid={form.errors[name] && form.touched[name]}
        >
          <Select placeholder='-' {...field}>
            {options?.data.map(option => (
              <option key={option.key} value={option.value}>
                {field.value === option.value
                  ? option.value
                  : option.currencyName}
              </option>
            ))}
          </Select>
          <FormErrorMessage position='absolute' width={150} marginTop={1}>
            {form.errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormSelect;
