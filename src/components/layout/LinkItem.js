import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const LinkItem = ({ path, text, toRight = false }) => {
  const [isMounting, setIsMounting] = useState(true);
  useEffect(() => setIsMounting(false), []);

  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <Stack>
          <Text
            lineHeight={1}
            cursor='pointer'
            fontSize='lg'
            color={isActive ? 'brand.primary' : 'brand.textWhite'}
          >
            {text}
          </Text>

          {isActive ? (
            <motion.div
              initial={
                isMounting ||
                (toRight ? { translateX: 100 } : { translateX: -100 })
              }
              animate={{ translateX: 0 }}
              exit={toRight ? { translateX: -100 } : { translateX: 100 }}
            >
              <Box
                width='100%'
                height='3px'
                bgColor='brand.primary'
                borderTopLeftRadius='50px'
                borderTopRightRadius='50px'
              ></Box>
            </motion.div>
          ) : (
            <Box width='100%' height='3px' />
          )}
        </Stack>
      )}
    </NavLink>
  );
};

export default LinkItem;
