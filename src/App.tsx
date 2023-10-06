import React from 'react';
import MainRouter from './routers/main/MainRouter';

import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { queryClient } from './features/product/services/queries';

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <MainRouter />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
