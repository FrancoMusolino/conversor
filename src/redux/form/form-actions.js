import { ADD_NUMBER, DO_CONVERSION } from './form-types';

export const addNumber = value => ({ type: ADD_NUMBER, payload: value });
export const doConversion = rate => ({ type: DO_CONVERSION, payload: rate });
