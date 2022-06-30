import React from 'react';
import { Center, Flex } from '@chakra-ui/react';

const CurrencyIcon = () => {
  return (
    <Flex
      width='41px'
      height='41px'
      bgColor='status.success'
      borderRadius='full'
      justifyContent='center'
      userSelect='none'
    >
      <Center fontSize='2xl' color='brand.primary'>
        $
      </Center>
    </Flex>
  );
};

export default CurrencyIcon;
