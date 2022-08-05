import React from 'react';
import { HStack, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import arrowTrendDown from '../../assets/arrowTrendDown.png';
import arrowTrendUp from '../../assets/arrowTrendUp.png';

import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import IconContainer from '../IconContainer/IconContainer';

const CardHistory = ({ amount, base, rates, index, fatherIndex }) => {
  const final = Object.keys(rates)[0];

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      transition: {
        delay,
        duration: 0.75,
      },
    }),
  };

  return (
    <HStack
      as={motion.div}
      custom={{ delay: fatherIndex + index * 0.2 }}
      initial='hidden'
      animate='visible'
      variants={variants}
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
        <img src={arrowTrendDown} alt='Arrow Down' />
      ) : (
        <img src={arrowTrendUp} alt='Arrow Up' />
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
