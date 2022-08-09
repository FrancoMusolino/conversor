import React from 'react';
import { useFormikContext } from 'formik';

import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';

const CurrencyFormIcon = ({ name }) => {
  const { values } = useFormikContext();

  return <CurrencyIcon value={values[name]} />;
};

export default CurrencyFormIcon;
