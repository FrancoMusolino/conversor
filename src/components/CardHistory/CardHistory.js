import React from 'react';
import { HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { opacityVariants } from '../../utils';

import arrowTrendDown from '../../assets/arrowTrendDown.png';
import arrowTrendUp from '../../assets/arrowTrendUp.png';

import CardDescription from './CardDescription';

const CardHistory = ({ amount, base, rates, delay }) => {
  const final = Object.keys(rates)[0];

  return (
    <HStack
      as={motion.div}
      custom={{ delay }}
      initial='hidden'
      animate='visible'
      variants={opacityVariants}
      width='350px'
      padding={1}
      marginTop={0}
      justifyContent='space-between'
    >
      <CardDescription icon={base} amount={amount} />
      {amount >= rates[final] ? (
        <img src={arrowTrendDown} alt='Arrow Down' />
      ) : (
        <img src={arrowTrendUp} alt='Arrow Up' />
      )}
      <CardDescription
        icon={final}
        amount={rates[final]}
        styles={{
          direction: 'row-reverse',
          textAlign: 'right',
          alignItems: 'flex-end',
        }}
      />
    </HStack>
  );
};

export default CardHistory;
