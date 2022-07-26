import {
  ADD_NUMBER,
  DELETE_ALL,
  DELETE_NUMBER,
  INVERT_VALUES,
  SUCCESS,
} from './form-types';
import { addNumber } from './form-utils';

const INITIAL_STATE = {
  inputValue: '0',
  result: 0,
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        inputValue: addNumber(state.inputValue, action.payload),
      };

    case DELETE_NUMBER:
      return {
        ...state,
        inputValue:
          state.inputValue.length !== 1
            ? state.inputValue.slice(0, state.inputValue.length - 1)
            : '0',
      };

    case DELETE_ALL:
      return {
        ...state,
        inputValue: '0',
      };

    case INVERT_VALUES:
      return {
        ...state,
        result: 0,
      };

    case SUCCESS:
      return {
        ...state,
        result: action.payload,
      };

    default:
      return state;
  }
};

export default formReducer;
