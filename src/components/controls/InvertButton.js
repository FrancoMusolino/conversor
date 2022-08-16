import React from 'react';
import { useDispatch } from 'react-redux';
import { invertValues } from '../../features/form/form-slice';
import { useFormikContext } from 'formik';
import { Icon } from '@chakra-ui/icons';

import Button from './Button';

const InvertButton = ({ value }) => {
  const dispatch = useDispatch();
  const { values, setValues } = useFormikContext();

  const handleClick = () => {
    const fromValue = values.fromCurrency;
    const toValue = values.toCurrency;

    values.fromCurrency = toValue;
    values.toCurrency = fromValue;

    setValues(values);
    dispatch(invertValues());
  };

  return (
    <Button handleClick={handleClick}>
      <Icon fontSize='3xl' color='status.warn' as={value} />
    </Button>
  );
};

export default InvertButton;
