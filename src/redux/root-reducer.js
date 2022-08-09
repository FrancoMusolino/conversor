import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import formReducer from './form/form-reducer';
import historyReducer from './history/history-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['history'],
};

const rootReducer = combineReducers({
  form: formReducer,
  history: historyReducer,
});

export default persistReducer(persistConfig, rootReducer);
