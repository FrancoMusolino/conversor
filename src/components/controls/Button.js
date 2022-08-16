import React from 'react';
import { Center, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import IconContainer from '../IconContainer/IconContainer';

const Button = ({ children, handleClick }) => {
  return (
    <motion.div
      whileTap={{
        scale: 0.85,
      }}
      onClick={handleClick}
    >
      <IconContainer>
        <Flex
          width='60px'
          height='60px'
          bgColor='brand.background'
          borderRadius='full'
          justifyContent='center'
          cursor='pointer'
          userSelect='none'
        >
          <Center>{children}</Center>
        </Flex>
      </IconContainer>
    </motion.div>
  );
};

export default Button;
