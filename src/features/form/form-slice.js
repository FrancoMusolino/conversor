import { createSlice } from '@reduxjs/toolkit';
import { addNumberUtil } from './form-utils';

const initialState = {
  inputValue: '0',
  result: 0,
};

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
      state = initialState;
    },
  },
});

export const { addNumber, deleteAll, deleteNumber, invertValues, resetValues } =
  formSlice.actions;

export const formReducer = formSlice.reducer;
