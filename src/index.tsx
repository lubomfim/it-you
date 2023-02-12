import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './constants/styles';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
);
