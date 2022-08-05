import React from 'react';
import { useSelector } from 'react-redux';
import { Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import DeleteHistory from '../components/DeleteHistory/DeleteHistory';
import EmptyHistory from '../components/EmptyHistory/EmptyHistory';
import CardHistory from '../components/CardHistory/CardHistory';

const History = () => {
  const { historyOfConversions } = useSelector(state => state.history);

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
    <Stack height='78vh' gap={5} alignItems='center'>
      {Object.keys(historyOfConversions).length ? (
        Object.entries(historyOfConversions).map(
          ([date, conversions], fatherIndex) => (
            <Stack gap={3}>
              <Text
                as={motion.p}
                custom={{ delay: fatherIndex + 0.2 }}
                initial='hidden'
                animate='visible'
                variants={variants}
                marginLeft='0.3rem'
                color='brand.textWhite'
                lineHeight='18px'
              >
                {date}
              </Text>
              {conversions.map((conversion, index) => (
                <CardHistory
                  key={conversion.date}
                  index={index + 1}
                  fatherIndex={fatherIndex + 0.2}
                  {...conversion}
                />
              ))}
            </Stack>
          )
        )
      ) : (
        <EmptyHistory />
      )}

      <DeleteHistory />
    </Stack>
  );
};

export default History;
