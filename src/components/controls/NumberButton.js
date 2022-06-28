import React from 'react';
import { Center, Flex, Text } from '@chakra-ui/react';

const NumberButton = ({ value }) => {
  return (
    <Flex
      width='60px'
      height='60px'
      bgColor='brand.background'
      color='brand.textGray'
      borderRadius='full'
      justifyContent='center'
      cursor='pointer'
      onClick={() => console.log(value)}
    >
      <Center>
        <Text fontSize='3xl'>{value}</Text>
      </Center>
    </Flex>
  );
};

export default NumberButton;
