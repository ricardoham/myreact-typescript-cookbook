import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StyledGlobal from './globalStyles';
import App from 'pages/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <StyledGlobal />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
