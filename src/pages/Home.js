import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as formActions from '../redux/form/form-actions';
import * as historyActions from '../redux/history/history-actions';
import { Formik, Form as FormikForm } from 'formik';
import { initialValues, validationSchema } from '../formik/index';

import { Stack, Center, Flex } from '@chakra-ui/react';

import ControlsContainer from '../components/controls/ControlsContainer';
import FormContainer from '../components/form/FormContainer';

const Home = () => {
  const inputValue = useSelector(state => state.form.inputValue);
  const lastConversion = useSelector(state => state.history.lastConversion);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        const { data } = await axios.get(
          `https://api.frankfurter.app/latest?amount=${parseInt(
            inputValue
          )}&from=${values.fromCurrency}&to=${values.toCurrency}`
        );
        dispatch(formActions.doConversion(data.rates));
        dispatch(historyActions.newLastConversion());
      }}
    >
      <FormikForm>
        <Stack height='40vh' gap='30px'>
          <Flex direction='column' gap='30px'>
            <FormContainer name='fromCurrency' />
            <FormContainer name='toCurrency' />
          </Flex>

          <Center fontSize='sm' color='brand.textDarkGray'>
            {lastConversion
              ? `Última conversión: ${lastConversion}`
              : 'Empezá a realizar conversiones!!'}
          </Center>
        </Stack>

        <ControlsContainer />
      </FormikForm>
    </Formik>
  );
};

export default Home;
