import React from 'react';
import { useFetchCurrenciesQuery } from '../../features/currencies/currencies-api-slice';
import { Select, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Field } from 'formik';

const FormSelect = ({ name }) => {
  const { data } = useFetchCurrenciesQuery();

  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl
          position='relative'
          isInvalid={form.errors[name] && form.touched[name]}
        >
          <Select placeholder='-' {...field}>
            {data?.map((option) => (
              <option key={option.value} value={option.value}>
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
