import axios from 'axios';
import { useQuery } from 'react-query';

const fetchCurrencies = () => {
  return axios.get('https://api.frankfurter.app/currencies');
};

export const useCurrenciesData = () => {
  return useQuery('currencies', fetchCurrencies, {
    select: data => {
      const newData = Object.entries(data.data).map(currency => ({
        key: currency[0],
        value: currency[0],
        currencyName: currency[1],
      }));

      return { ...data, data: newData };
    },
    staleTime: Infinity,
  });
};
