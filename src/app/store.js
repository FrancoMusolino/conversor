import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { formReducer } from '../features/form/form-slice';
import { historyReducer } from '../features/history/histoty-slice';

import { currenciesApiSlice } from '../features/currencies/currencies-api-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['history'],
};

const rootReducer = combineReducers({
  form: formReducer,
  history: historyReducer,
  [currenciesApiSlice.reducerPath]: currenciesApiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currenciesApiSlice.middleware),
});

export const persistedStore = persistStore(store);
