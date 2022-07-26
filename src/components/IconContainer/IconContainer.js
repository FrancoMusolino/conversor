import React from 'react';
import { Flex } from '@chakra-ui/react';

const IconContainer = ({ children, args }) => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      borderRadius='full'
      boxShadow='dark-lg'
      color='brand.primary'
      {...args}
    >
      {children}
    </Flex>
  );
};

export default IconContainer;
