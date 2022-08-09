import * as Yup from 'yup';

export const validationSchema = Yup.object({
  fromCurrency: Yup.string().required('Campo requerido'),
  toCurrency: Yup.string().required('Campo requerido'),
});
