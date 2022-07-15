import React from 'react';
import { useDispatch } from 'react-redux';
import * as formActions from '../../redux/form/form-actions';
import { Icon } from '@chakra-ui/icons';

import Button from './Button';
import { useFormikContext } from 'formik';

const InvertButton = ({ value }) => {
  const dispatch = useDispatch();
  const { values, setValues } = useFormikContext();

  const handleClick = () => {
    const fromValue = values.fromCurrency;
    const toValue = values.toCurrency;

    values.fromCurrency = toValue;
    values.toCurrency = fromValue;

    setValues(values);
    dispatch(formActions.invertValues());
  };

  return (
    <Button handleClick={handleClick}>
      <Icon fontSize='3xl' color='status.warn' as={value} />
    </Button>
  );
};

export default InvertButton;
