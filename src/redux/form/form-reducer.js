import { ADD_NUMBER } from './form-types';

const INITIAL_STATE = {
  inputValue: '0',
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

    default:
      return state;
  }
};

export default formReducer;
