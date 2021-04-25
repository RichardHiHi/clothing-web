import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/products_reducer';
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_BEGIN,
  ADD_BLOG,
  ADD_COLLECTION,
  ADD_BANNER,
  ADD_BLOG_HOME,
} from '../actions';
import { ContactsOutlined } from '@material-ui/icons';
const ProductContext = React.createContext();
var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.REACT_APP_PERSON_KEY }).base(
  process.env.REACT_APP_BASIC_KEY
);

const initialState = {
  blogHomes: [],
  banners: [],
  blogs: [],
  collections: [],
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

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: { products } });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const getInfoOfHome = async (table, type, size = 'large') => {
    const res = await base(table).select({}).firstPage();
    const value = res.map((record) => {
      return {
        ...record.fields,
        img: record.fields.img[0].thumbnails[size].url,
        id: record.id,
      };
    });
    dispatch({ type: type, payload: { value } });
  };
  useEffect(() => {
    getProducts();
    getInfoOfHome('blog', ADD_BLOG);
    getInfoOfHome('collection', ADD_COLLECTION, 'full');
    getInfoOfHome('banner', ADD_BANNER);
    getInfoOfHome('blog', ADD_BLOG_HOME);
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
