import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/products_reducer';
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_BEGIN,
  ADD_BLOG,
} from '../actions';
import { ContactsOutlined } from '@material-ui/icons';
const ProductContext = React.createContext();
var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.REACT_APP_PERSON_KEY }).base(
  process.env.REACT_APP_BASIC_KEY
);

const initialState = {
  blogs: [],
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
      const [res, resColor] = await Promise.all([
        base('product').select({}).firstPage(),
        base('productColorImg').select({}).firstPage(),
      ]);
      const products = res.map((e) => {
        const newColorImg = e.fields.colorImg.map((color) => {
          return resColor.find((colorin) => colorin.id === color).fields;
        });
        return { ...e.fields, colorImg: newColorImg, id: e.id };
      });
      console.log(products);

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: { products } });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const getBlog = async (table) => {
    const res = await base(table).select({}).firstPage();
    const blogs = res.map((record) => {
      return {
        ...record.fields,
        img: record.fields.img[0].thumbnails.large.url,
        id: record.id,
      };
    });
    dispatch({ type: ADD_BLOG, payload: { blogs } });
  };
  useEffect(() => {
    getProducts();
    getBlog('blog');
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
