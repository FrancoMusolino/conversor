import {
  ADD_NUMBER,
  DELETE_ALL,
  DELETE_NUMBER,
  DO_CONVERSION,
  INVERT_VALUES,
} from './form-types';

export const addNumber = value => ({ type: ADD_NUMBER, payload: value });

export const deleteNumber = () => ({ type: DELETE_NUMBER });

export const deleteAll = () => ({ type: DELETE_ALL });

export const invertValues = () => ({ type: INVERT_VALUES });

export const doConversion = rate => ({ type: DO_CONVERSION, payload: rate });
