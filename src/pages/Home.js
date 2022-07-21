import React from 'react';
import { useDispatch } from 'react-redux';
import * as formActions from '../redux/form/form-actions';
import { Formik, Form as FormikForm } from 'formik';
import { initialValues, validationSchema } from '../formik/index';

import { Stack, Flex } from '@chakra-ui/react';

import ControlsContainer from '../components/controls/ControlsContainer';
import FormContainer from '../components/form/FormContainer';
import LastConversion from '../components/LastConversion/LastConversion';
import ErrorModal from '../components/ErrorModal/ErrorModal';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) =>
          dispatch(formActions.doConversion(values, actions))
        }
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
      <ErrorModal />
    </>
  );
};

export default Home;
