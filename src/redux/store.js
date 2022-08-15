import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import reduxThunk from 'redux-thunk';

import rootReducer from './root-reducer';

const initialState = {};
const middlewares = [reduxThunk];

export const store = createStore(
  rootReducer,
  initialState
  // composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
