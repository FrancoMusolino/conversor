import React from 'react';
import { useSelector } from 'react-redux';

import DeleteHistory from '../components/DeleteHistory/DeleteHistory';
import EmptyHistory from '../components/EmptyHistory/EmptyHistory';

const History = () => {
  const { historyOfConversions } = useSelector(state => state.history);

  return (
    <div>
      {Object.keys(historyOfConversions).length ? (
        Object.entries(historyOfConversions).map(([date, conversions]) => (
          <>
            <h1>{date}</h1>
            {conversions.map(conversion => (
              <h2>{conversion.amount}</h2>
            ))}
          </>
        ))
      ) : (
        <EmptyHistory />
      )}

      <DeleteHistory />
    </div>
  );
};

export default History;
