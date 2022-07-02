import React from 'react';
import {
  Flex,
  FormLabel,
  Select,
  Stack,
  Text,
  Box,
  useQuery,
} from '@chakra-ui/react';
import CurrencyIcon from './CurrencyIcon';
import { Field, useFormikContext } from 'formik';

const FormInput = ({ name, options }) => {
  const { values } = useFormikContext();

  return (
    <Box padding='2'>
      <Stack
        width='325px'
        height='66px'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        margin='0 auto'
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-around'
          width='50%'
        >
          <FormLabel width='15%' margin={0} htmlFor='currencies'>
            <CurrencyIcon currency={values[name]} />
          </FormLabel>

          <Field name={name}>
            {({ field, form, meta }) => {
              return (
                <Select
                  paddingLeft={3}
                  id='currencies'
                  focusBorderColor='transparent'
                  icon=''
                  size='lg'
                  border='none'
                  placeholder='-'
                  {...field}
                  // _focus={{
                  //   backgroundColor: 'green',
                  // }}
                >
                  {options?.map((option) => (
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

        <Text width='50%' overflowX='scroll' maxH='48px'>
          0
        </Text>
      </Stack>
    </Box>
  );
};

export default FormInput;
