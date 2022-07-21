import React from 'react';
import { useSelector } from 'react-redux';

const History = () => {
  const { historyOfConversions } = useSelector(state => state.history);

  return (
    <div>
      {Object.entries(historyOfConversions).map(([date, conversions]) => (
        <>
          <h1>{date}</h1>
          {conversions.map(conversion => (
            <h2>{conversion.amount}</h2>
          ))}
        </>
      ))}
    </div>
  );
};

export default History;
