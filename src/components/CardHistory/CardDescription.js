import React from 'react';
import { HStack, Stack, Text } from '@chakra-ui/react';

import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import IconContainer from '../IconContainer/IconContainer';

const CardDescription = ({ icon, amount, styles }) => {
  return (
    <HStack gap={1} flexDirection={styles && styles.direction}>
      <IconContainer args={{ width: '51px', height: '51px' }}>
        <CurrencyIcon value={icon} />
      </IconContainer>
      <Stack margin='0 !important' alignItems={styles && styles.alignItems}>
        <Text
          width='70px'
          whiteSpace='nowrap'
          overflowX='scroll'
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          textAlign={styles && styles.textAlign}
        >
          {amount}
        </Text>
        <Text fontSize='sm'>{icon}</Text>
      </Stack>
    </HStack>
  );
};

export default CardDescription;
