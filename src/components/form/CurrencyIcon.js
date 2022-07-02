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
      bgColor='brand.textGray'
      borderRadius='full'
      justifyContent='center'
      userSelect='none'
    >
      <Center fontSize='2xl' color='brand.primary'>
        {!currency ? (
          <Icon fontSize='3xl' as={RiCoinsLine} />
        ) : (
          <>
            {prettyCurrency.length > 1 ? (
              prettyCurrency.length > 2 ? (
                <Text fontSize='md'>{prettyCurrency}</Text>
              ) : (
                <Text fontSize='2xl'>{prettyCurrency}</Text>
              )
            ) : (
              <Text fontSize='3xl'>{prettyCurrency}</Text>
            )}
          </>
        )}
      </Center>
    </Flex>
  );
};

export default CurrencyIcon;
