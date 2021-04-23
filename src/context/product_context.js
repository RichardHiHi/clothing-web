import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/products_reducer';
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_BEGIN,
} from '../actions';
import { ContactsOutlined } from '@material-ui/icons';
const ProductContext = React.createContext();
var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.REACT_APP_PERSON_KEY }).base(
  process.env.REACT_APP_BASIC_KEY
);

const initialState = {
  category: [],
  products: [],
  color: [],
  size: [],
  productsLoading: false,
  productsError: false,
  singleProduct: {},
  trendingProducts: [],
  saleProducts: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const res = await base('product').select({}).firstPage();
      const resColor = await base('productColorImg').select({}).firstPage();
      const products = res.map((e) => {
        const newColorImg = e.fields.colorImg.map((color) => {
          return resColor.find((colorin) => colorin.id === color).fields;
        });
        return { ...e.fields, colorImg: newColorImg, id: e.id };
      });
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: { products } });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
