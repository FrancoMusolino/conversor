import React from 'react';
import { formatCurrency } from '../../utils';

import { Center, Flex, Icon, Text } from '@chakra-ui/react';
import { RiCoinsLine } from 'react-icons/ri';

const CurrencyIcon = ({ currency }) => {
  const prettyCurrency = currency && formatCurrency(currency);

  return (
    <Flex
      width='41px'
      height='41px'
      justifyContent='center'
      bgColor='brand.background'
      borderRadius='full'
      userSelect='none'
    >
      <Center color='brand.primary'>
        {!currency ? (
          <Icon fontSize='3xl' as={RiCoinsLine} />
        ) : (
          <Text
            fontSize={
              (prettyCurrency.length === 1 && '3xl') ||
              (prettyCurrency.length === 2 && '2xl') ||
              'md'
            }
          >
            {prettyCurrency}
          </Text>
        )}
      </Center>
    </Flex>
  );
};

export default CurrencyIcon;
