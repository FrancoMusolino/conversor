import React from 'react';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import { Stack, Center } from '@chakra-ui/react';

import FormSelect from '../components/form/FormSelect';
import ControlsContainer from '../components/controls/ControlsContainer';

const Home = () => {
  const initialValues = {
    fromCurrency: '',
    toCurrency: '',
  };

  const validationSchema = Yup.object({
    fromCurrency: Yup.string().required('Es obligatorio este campo pa'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
        console.log(actions);
      }}
      validationSchema={validationSchema}
    >
      <FormikForm>
        <Stack height='40vh' gap='30px'>
          <Stack gap='30px'>
            <FormSelect name='fromCurrency' />
            <FormSelect name='toCurrency' />
          </Stack>

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
