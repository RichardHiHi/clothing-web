import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/Cart_reducer';
import {
  ADD_TO_CART,
  CLEAR_CART,
  CART_TOTAL,
  TOGGLE_ITEM_CART,
  REMOVE_ITEM_CART,
} from '../actions';
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
  amountTotal: 0,
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
  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  // total cart
  const totalCart = () => {
    dispatch({ type: CART_TOTAL });
  };
  //toggle item of cart
  const toggleItemCart = (idCart, value) => {
    dispatch({ type: TOGGLE_ITEM_CART, payload: { idCart, value } });
  };
  // no parameter can get e(event)
  const setItemCartByInput = (e) => {
    let value = e.target.value;
    const idCart = e.target.dataset.idcart;
    if (value === '') {
      value = 1;
    } else {
      value = parseInt(value);
    }
    dispatch({ type: TOGGLE_ITEM_CART, payload: { idCart, value } });
  };
  //remove item of cart
  const removeItemCart = (idCart) => {
    dispatch({ type: REMOVE_ITEM_CART, payload: { idCart } });
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    totalCart();
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        toggleItemCart,
        setItemCartByInput,
        removeItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
