import React from 'react';
import { FormLabel, Stack, Select } from '@chakra-ui/react';
import CurrencyIcon from './CurrencyIcon';
import { Field, useFormikContext } from 'formik';
import { useCurrenciesData } from '../../hooks/useCurrenciesData';
import FormInput from './FormInput';

const FormSelect = ({ name }) => {
  const { data: options } = useCurrenciesData();
  const { values } = useFormikContext();

  return (
    <Stack
      width='325px'
      height='66px'
      padding='17px'
      paddingBottom='8px'
      margin='0 auto'
      direction='row'
      alignItems='center'
    >
      <Stack direction='row' alignItems='center' gap={1} width='45%'>
        <FormLabel margin={0}>
          <CurrencyIcon currency={values[name]} />
        </FormLabel>

        <Field name={name}>
          {({ field, form, meta }) => {
            console.log(field);
            return (
              <Select placeholder='-' {...field}>
                {options?.data.map(option => (
                  <option key={option.key} value={option.value}>
                    {field.value === option.value
                      ? option.value
                      : option.currencyName}
                  </option>
                ))}
              </Select>
            );
          }}
        </Field>
      </Stack>

      <Stack width='55%'>
        <FormInput />
      </Stack>
    </Stack>
  );
};

export default FormSelect;
