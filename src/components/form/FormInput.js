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

const FormInput = () => {
  // useQuery('currencies', fetchCurrencies)

  return (
    <Box padding='2'>
      <Stack
        width='325px'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Flex alignItems='center' justifyContent='space-around' width='50%'>
          <FormLabel margin={0} htmlFor='currencies'>
            Logo
          </FormLabel>
          <Select
            id='currencies'
            focusBorderColor='transparent'
            icon=''
            size='lg'
            border='none'
            placeholder='ARS'
            _focus={{
              backgroundColor: 'green',
            }}
          >
            <option value='option1'>Option 1hgdflhsghdgihjgsldj</option>
            <option value='option2'>Option 2</option>
          </Select>
        </Flex>
        <Text width='50%'>Acá va el input pa</Text>
      </Stack>
    </Box>
  );
};

export default FormInput;
