import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useQuery } from 'react-query';
import { Formik, Form as FormikForm } from 'formik';

import ControlsContainer from '../components/controls/ControlsContainer';
import FormContainer from '../components/form/FormContainer';

const fetchCurrencies = () => {
  return axios.get('https://api.frankfurter.app/currencies');
};

const Home = () => {
  const { data } = useQuery('currencies', fetchCurrencies, {
    select: (data) => {
      const newData = Object.entries(data.data).map((currency) => ({
        key: currency[0],
        value: currency[0],
        currencyName: currency[1],
      }));

      return { ...data, data: newData };
    },
  });

  const initialValues = {
    fromCurrency: '',
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
        <FormContainer name='fromCurrency' options={data?.data} />
        <ControlsContainer />
      </FormikForm>
    </Formik>
  );
};

export default Home;
