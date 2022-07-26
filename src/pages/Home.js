import React from 'react';
import { useDispatch } from 'react-redux';
import * as formActions from '../redux/form/form-actions';
import { Formik, Form as FormikForm } from 'formik';
import { initialValues, validationSchema } from '../formik/index';

import { Stack, Flex, useToast } from '@chakra-ui/react';

import ControlsContainer from '../components/controls/ControlsContainer';
import FormContainer from '../components/form/FormContainer';
import LastConversion from '../components/LastConversion/LastConversion';

const Home = () => {
  const dispatch = useDispatch();
  const chakraToast = useToast();

  const toast = config =>
    chakraToast({
      duration: 1200,
      isClosable: true,
      ...config,
    });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(formActions.doConversion(values));
      toast({
        title: 'Conversión Exitosa',
        status: 'success',
      });
    } catch (err) {
      toast({
        title: err.message,
        status: 'error',
      });
    }

    actions.setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        <FormikForm>
          <Stack height='40vh' gap='30px'>
            <Flex direction='column' gap='30px'>
              <FormContainer name='fromCurrency' />
              <FormContainer name='toCurrency' />
            </Flex>
            <LastConversion />
          </Stack>

          <ControlsContainer />
        </FormikForm>
      </Formik>
    </>
  );
};

export default Home;
