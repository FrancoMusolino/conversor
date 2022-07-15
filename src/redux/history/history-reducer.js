import { NEW_LAST_CONVERSION } from './history-types';
import { formatDate } from '../../utils';

const INITIAL_STATE = {
  lastConversion: null,
};

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_LAST_CONVERSION:
      return { ...state, lastConversion: formatDate(new Date()) };

    default:
      return state;
  }
};

export default historyReducer;
