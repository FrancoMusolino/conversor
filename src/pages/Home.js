import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import { Stack, Center, Flex } from '@chakra-ui/react';
import * as formActions from '../redux/form/form-actions';

import FormSelect from '../components/form/FormSelect';
import ControlsContainer from '../components/controls/ControlsContainer';

const Home = () => {
  const inputValue = useSelector(state => state.form.inputValue);
  const dispatch = useDispatch();

  const initialValues = {
    fromCurrency: '',
    toCurrency: '',
  };

  const validationSchema = Yup.object({
    fromCurrency: Yup.string().required('Es obligatorio este campo pa'),
    toCurrency: Yup.string().required('Es obligatorio este campo pa'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        const { data } = await axios.get(
          `https://api.frankfurter.app/latest?amount=${parseInt(
            inputValue
          )}&from=${values.fromCurrency}&to=${values.toCurrency}`
        );
        console.log(data);
        dispatch(formActions.doConversion(data.rates));
      }}
      validationSchema={validationSchema}
    >
      <FormikForm>
        <Stack height='40vh' gap='30px'>
          <Flex direction='column' gap='30px'>
            <FormSelect name='fromCurrency' />
            <FormSelect name='toCurrency' />
          </Flex>

          <Center fontSize='sm' color='brand.textDarkGray'>
            Ultíma conversión 04/05/2021
          </Center>
        </Stack>

        <ControlsContainer />
      </FormikForm>
    </Formik>
  );
};

export default Home;
