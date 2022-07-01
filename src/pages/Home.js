import React from 'react';
import axios from 'axios';
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
    selectOption: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      // validationSchema={{}}
    >
      {(props) => {
        console.log(props);

        return (
          <FormikForm>
            <FormContainer name='selectOption' options={data?.data} />
            <ControlsContainer />
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default Home;
