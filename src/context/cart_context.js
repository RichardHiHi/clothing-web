import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/Cart_reducer';
import { ADD_TO_CART } from '../actions';
import { useProductContext } from '../context/product_context';
const CartContext = React.createContext();
const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};
const initialState = {
  cart: getLocalStorage(),
  totalAmount: 0,
  totalItem: 0,
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    singleProduct,
    singleProductAction: { colorIndex, size, itemCount },
  } = useProductContext();
  const addToCart = (id = null) => {
    const productCart = {
      singleProduct: singleProduct,
      colorIndex: colorIndex,
      size: size,
      itemCount: itemCount,
      //date.now là số milisecond , math.random phòng vc click 2 lần cùng nhau , chuyển sang hệ 36
      idCart: (Date.now() + Math.random()).toString(36),
    };
    dispatch({
      type: ADD_TO_CART,
      payload: { productCart, id },
    });
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
