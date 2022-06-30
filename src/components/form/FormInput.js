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
          <FormLabel width='15%' margin={0} htmlFor='currencies'>
            <CurrencyIcon />
          </FormLabel>
          <Select
            paddingLeft={3}
            id='currencies'
            focusBorderColor='transparent'
            icon=''
            size='lg'
            border='none'
            placeholder='ARS'
            // _focus={{
            //   backgroundColor: 'green',
            // }}
          >
            <option value='option1'>Option 1hgdflhsghdgihjgsldj</option>
            <option value='option2'>Option 2</option>
          </Select>
        </Flex>
        <Text width='50%' overflowX='scroll' maxH='48px'>
          0
        </Text>
      </Stack>
    </Box>
  );
};

export default FormInput;
