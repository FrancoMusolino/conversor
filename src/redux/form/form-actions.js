import {
  ADD_NUMBER,
  DELETE_ALL,
  DELETE_NUMBER,
  INVERT_VALUES,
  RESET_VALUES,
  SUCCESS,
} from './form-types';
import * as historyActions from '../history/history-actions';
import { store } from '../store';
import axios from 'axios';

export const addNumber = value => ({ type: ADD_NUMBER, payload: value });

export const deleteNumber = () => ({ type: DELETE_NUMBER });

export const deleteAll = () => ({ type: DELETE_ALL });

export const invertValues = () => ({ type: INVERT_VALUES });

export const resetValues = () => ({ type: RESET_VALUES });

export const doConversion = formValues => async dispatch => {
  const {
    form: { inputValue },
  } = store.getState();

  try {
    const { data } = await axios.get(
      `https://api.frankfurter.app/latest?amount=${Number(inputValue)}&from=${
        formValues.fromCurrency
      }&to=${formValues.toCurrency}`
    );

    dispatch({ type: SUCCESS, payload: data.rates[formValues.toCurrency] });
    dispatch(
      historyActions.addConversionToHistory({
        ...data,
        date: new Date(),
      })
    );
    dispatch(historyActions.newLastConversion());
  } catch (error) {
    throw new Error('Upss.. Algo salió mal');
  }
};
