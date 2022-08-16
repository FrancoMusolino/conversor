import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  newLastConversion,
  addConversionToHistory,
} from '../history/histoty-slice';
import { addNumberUtil } from './form-utils';

const initialState = {
  inputValue: '0',
  result: 0,
};

export const doConversion = createAsyncThunk(
  'form/doConversion',
  async (formValues, { getState, dispatch }) => {
    const {
      form: { inputValue },
    } = getState();

    const { data } = await axios.get(
      `https://api.frankfurter.app/latest?amount=${Number(inputValue)}&from=${
        formValues.fromCurrency
      }&to=${formValues.toCurrency}`
    );

    dispatch(
      addConversionToHistory({
        ...data,
        date: new Date(),
        id: Math.floor(Math.random() * 100000),
      })
    );

    dispatch(newLastConversion());

    return data.rates[formValues.toCurrency];
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addNumber(state, action) {
      state.inputValue = addNumberUtil(state.inputValue, action.payload);
    },

    deleteNumber(state) {
      state.inputValue =
        state.inputValue.length !== 1
          ? state.inputValue.slice(0, state.inputValue.length - 1)
          : '0';
    },

    deleteAll(state) {
      state.inputValue = '0';
    },

    invertValues(state) {
      state.result = 0;
    },

    resetValues(state) {
      state.inputValue = initialState.inputValue;
      state.result = initialState.result;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doConversion.fulfilled, (state, action) => {
      state.result = action.payload;
    });
    builder.addCase(doConversion.rejected, () => {
      throw new Error('Upss.. Algo salió mal');
    });
  },
});

export const { addNumber, deleteAll, deleteNumber, invertValues, resetValues } =
  formSlice.actions;

export const formReducer = formSlice.reducer;
