import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ButtonProvider } from './context/button_context';
ReactDOM.render(
  <ButtonProvider>
    <App />
  </ButtonProvider>,
  document.getElementById('root')
);
