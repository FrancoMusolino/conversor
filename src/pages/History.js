import React from 'react';
import { useSelector } from 'react-redux';
import { Stack, Text } from '@chakra-ui/react';

import DeleteHistory from '../components/DeleteHistory/DeleteHistory';
import EmptyHistory from '../components/EmptyHistory/EmptyHistory';
import CardHistory from '../components/CardHistory/CardHistory';

const History = () => {
  const { historyOfConversions } = useSelector(state => state.history);

  return (
    <Stack justifyContent='flex-start' alignItems='flex-start'>
      {Object.keys(historyOfConversions).length ? (
        Object.entries(historyOfConversions).map(([date, conversions]) => (
          <Stack width='full' height='78vh' gap={3} overflow='scroll'>
            <Text color='brand.textWhite' lineHeight='18px'>
              {date}
            </Text>
            {conversions.map(conversion => (
              <CardHistory key={conversion.date} {...conversion} />
            ))}
          </Stack>
        ))
      ) : (
        <EmptyHistory />
      )}

      <DeleteHistory />
    </Stack>
  );
};

export default History;
