import { ADD_NUMBER, DO_CONVERSION } from './form-types';

const INITIAL_STATE = {
  inputValue: '0',
  result: 0,
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        inputValue:
          state.inputValue === '0'
            ? String(action.payload)
            : state.inputValue + String(action.payload),
      };

    case DO_CONVERSION:
      return {
        ...state,
        result: Object.values(action.payload)[0],
      };

    default:
      return state;
  }
};

export default formReducer;
