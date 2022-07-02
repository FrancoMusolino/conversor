import React from 'react';
import { formatCurrency } from '../../utils';

import { Center, Flex, Icon, Text } from '@chakra-ui/react';
import { RiCoinsFill } from 'react-icons/ri';

const CurrencyIcon = ({ currency }) => {
  return (
    <Flex
      width='45px'
      height='45px'
      bgColor='brand.textGray'
      borderRadius='full'
      justifyContent='center'
      userSelect='none'
    >
      <Center fontSize='2xl' color='brand.primary'>
        {!currency ? (
          <Icon fontSize='2xl' as={RiCoinsFill} />
        ) : (
          <>
            {formatCurrency(currency).length > 2 ? (
              <Text fontSize='md'>{formatCurrency(currency)}</Text>
            ) : (
              <Text fontSize='2xl'>{formatCurrency(currency)}</Text>
            )}
          </>
        )}
      </Center>
    </Flex>
  );
};

export default CurrencyIcon;
