import { createSlice } from '@reduxjs/toolkit';
import { addConversionToHistoryUtil } from './history-utils';
import { formatDate } from '../../utils';

const initialState = {
  lastConversion: null,
  historyOfConversions: {},
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    newLastConversion(state) {
      state.lastConversion = formatDate(new Date());
    },

    addConversionToHistory(state, action) {
      state.historyOfConversions = addConversionToHistoryUtil(
        state.historyOfConversions,
        action.payload
      );
    },

    clearConversionHistory(state) {
      state.historyOfConversions = initialState.historyOfConversions;
      state.lastConversion = initialState.lastConversion;
    },
  },
});

export const {
  newLastConversion,
  addConversionToHistory,
  clearConversionHistory,
} = historySlice.actions;

export const historyReducer = historySlice.reducer;
