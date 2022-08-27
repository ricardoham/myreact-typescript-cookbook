import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StyledGlobal from './globalStyles';
import App from 'pages/App';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <StyledGlobal />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
