import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

const Footer = ({ args }) => {
  return (
    <Stack as='footer' paddingBottom='2' {...args}>
      <Text fontSize='sm'>Confíamos en El Plan 🏎️©</Text>
    </Stack>
  );
};

export default Footer;
