import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ButtonProvider } from './context/button_context';
import { ProductProvider } from './context/product_context';
ReactDOM.render(
  <ProductProvider>
    <ButtonProvider>
      <App />
    </ButtonProvider>
  </ProductProvider>,
  document.getElementById('root')
);
