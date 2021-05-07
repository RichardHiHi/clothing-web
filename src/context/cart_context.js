import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/Cart_reducer';
import { ADD_TO_CART } from '../actions';
import { useProductContext } from '../context/product_context';
const CartContext = React.createContext();
const initialState = {
  cart: [],
  totalAmount: 0,
  totalItem: 0,
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    singleProduct,
    singleProductAction: { colorIndex, indexIMG, size },
  } = useProductContext();
  const addToCart = (id = null) => {
    dispatch({ type: ADD_TO_CART });
  };
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
