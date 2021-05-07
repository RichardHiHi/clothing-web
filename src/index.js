import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ButtonProvider } from './context/button_context';
import { ProductProvider } from './context/product_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
  <ProductProvider>
    <FilterProvider>
      <ButtonProvider>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </ButtonProvider>
    </FilterProvider>
  </ProductProvider>,
  document.getElementById('root')
);
