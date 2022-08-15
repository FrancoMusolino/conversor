import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currenciesApiSlice = createApi({
  reducerPath: 'currencies',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.frankfurter.app' }),
  endpoints(builder) {
    return {
      fetchCurrencies: builder.query({
        query: () => {
          return '/currencies';
        },
        transformResponse: (response) => {
          return Object.entries(response).map((currency) => ({
            value: currency[0],
            currencyName: currency[1],
          }));
        },
        keepUnusedDataFor: 60 * 10,
      }),
    };
  },
});

export const { useFetchCurrenciesQuery } = currenciesApiSlice;
