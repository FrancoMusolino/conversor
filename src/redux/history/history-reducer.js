import {
  NEW_LAST_CONVERSION,
  ADD_CONVERSION_TO_HISTORY,
  CLEAR_CONVERSION_HISTORY,
} from './history-types';
import { formatDate } from '../../utils';
import { addConversionToHistory } from './history-utils';

const INITIAL_STATE = {
  lastConversion: null,
  historyOfConversions: {},
};

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_LAST_CONVERSION:
      return { ...state, lastConversion: formatDate(new Date()) };

    case ADD_CONVERSION_TO_HISTORY:
      return {
        ...state,
        historyOfConversions: addConversionToHistory(
          state.historyOfConversions,
          action.payload
        ),
      };

    case CLEAR_CONVERSION_HISTORY:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default historyReducer;
