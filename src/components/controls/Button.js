import React from 'react';
import { Center, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Button = ({ children, handleClick = () => console.log('hola') }) => {
  return (
    <motion.div
      whileTap={{
        scale: 0.85,
      }}
    >
      <Flex
        width='60px'
        height='60px'
        bgColor='brand.background'
        color='brand.textGray'
        borderRadius='full'
        justifyContent='center'
        cursor='pointer'
        userSelect='none'
        onClick={() => handleClick()}
      >
        <Center>{children}</Center>
      </Flex>
    </motion.div>
  );
};

export default Button;
