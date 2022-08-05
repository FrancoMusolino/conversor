import React from 'react';
import { useSelector } from 'react-redux';
import { Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { opacityVariants } from '../utils';

import DeleteHistory from '../components/DeleteHistory/DeleteHistory';
import EmptyHistory from '../components/EmptyHistory/EmptyHistory';
import CardHistory from '../components/CardHistory/CardHistory';

const History = () => {
  const { historyOfConversions } = useSelector((state) => state.history);

  let baseDelay = 0.2;

  return (
    <Stack
      height='78vh'
      gap={5}
      alignItems='center'
      overflowY='scroll'
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {Object.keys(historyOfConversions).length ? (
        Object.entries(historyOfConversions).map(
          ([date, conversions], fatherIndex, arr) => {
            if (arr[fatherIndex - 1]) {
              baseDelay *= arr[fatherIndex - 1][1].length + 1;
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
          }
        )
      ) : (
        <EmptyHistory />
      )}

      <DeleteHistory />
    </Stack>
  );
};

export default History;
