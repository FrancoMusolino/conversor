import {
  NEW_LAST_CONVERSION,
  ADD_CONVERSION_TO_HISTORY,
  CLEAR_CONVERSION_HISTORY,
} from './history-types';

export const newLastConversion = () => ({ type: NEW_LAST_CONVERSION });

export const addConversionToHistory = data => ({
  type: ADD_CONVERSION_TO_HISTORY,
  payload: data,
});

export const clearConversionHistory = () => ({
  type: CLEAR_CONVERSION_HISTORY,
});
