import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ChakraProvider theme={theme} resetCSS={true}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);
