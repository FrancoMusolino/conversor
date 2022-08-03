import React from 'react';
import { HStack, Stack, Text } from '@chakra-ui/react';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';

import ArrowTrendUp from '../svgs/ArrowTrendUp';
import ArrowTrendDown from '../svgs/ArrowTrendDown';
import IconContainer from '../IconContainer/IconContainer';

const CardHistory = ({ amount, base, rates }) => {
  const final = Object.keys(rates)[0];

  return (
    <HStack
      width='325px'
      padding={1}
      marginTop={0}
      justifyContent='space-between'
    >
      <HStack gap={1}>
        <IconContainer args={{ width: '51px', height: '51px' }}>
          <CurrencyIcon value={base} />
        </IconContainer>
        <Stack>
          <Text>{amount}</Text>
          <Text fontSize='sm'>{base}</Text>
        </Stack>
      </HStack>
      {amount >= rates[final] ? (
        <ArrowTrendDown color='red' />
      ) : (
        <ArrowTrendUp color='blue' />
      )}
      <HStack gap={1}>
        <Stack alignItems='flex-end'>
          <Text>{rates[final]}</Text>
          <Text fontSize='sm'>{final}</Text>
        </Stack>
        <IconContainer args={{ width: '51px', height: '51px' }}>
          <CurrencyIcon value={final} />
        </IconContainer>
      </HStack>
    </HStack>
  );
};

export default CardHistory;
