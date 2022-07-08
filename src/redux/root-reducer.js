import { combineReducers } from 'redux';

import formReducer from './form/form-reducer';

export const rootReducer = combineReducers({
  form: formReducer,
});
