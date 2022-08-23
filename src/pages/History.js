import React from 'react';
import { useSelector } from 'react-redux';
import { Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { opacityVariants } from '../utils';

import DeleteHistory from '../components/DeleteHistory/DeleteHistory';
import EmptyHistory from '../components/EmptyHistory/EmptyHistory';
import CardHistory from '../components/CardHistory/CardHistory';

const History = () => {
  const history = useSelector((state) =>
    Object.entries(state.history.historyOfConversions).reverse()
  );

  let baseDelay = 0.2;

  return (
    <Stack
      height='calc(78vh - 70px)'
      gap={5}
      alignItems='center'
      overflowY='scroll'
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {history.length ? (
        history.map(([date, conversions], fatherIndex, arr) => {
          /*El base delay (inicialmente en 0.2) se acumula multiplicando su valor inicial por la longitud de items del anterior elemento más 2. 
            Este 2 representa:
            1. El texto base que indica el día, el cual no está incluida en el array de items, pero forma parte del delay
            2. El delay al siguiente texto entrante
           */

          if (arr[fatherIndex - 1]) {
            baseDelay += 0.2 * (arr[fatherIndex - 1][1].length + 2);
          }

          return (
            <Stack key={date} gap={3}>
              <Text
                as={motion.p}
                custom={{ delay: baseDelay }}
                initial='hidden'
                animate='visible'
                variants={opacityVariants}
                marginLeft='0.3rem'
                color='brand.textWhite'
                lineHeight='18px'
              >
                {date}
              </Text>
              {conversions.map((conversion, index) => (
                <CardHistory
                  key={conversion.id}
                  delay={baseDelay + 0.2 * (index + 1)}
                  {...conversion}
                />
              ))}
            </Stack>
          );
        })
      ) : (
        <EmptyHistory />
      )}

      <DeleteHistory />
    </Stack>
  );
};

export default History;
