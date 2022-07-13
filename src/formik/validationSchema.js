import * as Yup from 'yup';

export const validationSchema = Yup.object({
  fromCurrency: Yup.string().required('Campo requerido'),
  toCurrency: Yup.mixed()
    .notOneOf(['AUD'], 'Es el mismo')
    .required('Campo requerido'),
});
