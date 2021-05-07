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
  ADD_SLIDESHOW,
  GET_SINGLE_PRODUCT,
  INCREASE_INDEX_IMG,
  DECREASE_INDEX_IMG,
  SET_INDEX_IMG,
  SET_COLOR_INDEX,
  CLEAR_SINGLE_ACTION,
  SET_SIZE_PRODUCT,
  SET_ITEM_COUNT,
} from '../actions';
import { ContactsOutlined } from '@material-ui/icons';
const ProductContext = React.createContext();
var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.REACT_APP_PERSON_KEY }).base(
  process.env.REACT_APP_BASIC_KEY
);
const getLocalStorage = () => {
  let singleProduct = localStorage.getItem('singleProduct');
  if (singleProduct) {
    return JSON.parse(localStorage.getItem('singleProduct'));
  } else {
    return {};
  }
};
const initialState = {
  slideShows: [],
  blogHomes: [],
  banners: [],
  blogs: [],
  collections: [],
  category: [],
  brand: [],
  products: [],
  color: [],
  size: [],
  productsLoading: false,
  productsError: false,
  trendingProducts: [],
  saleProducts: [],
  singleProduct: getLocalStorage(),
  singleProductAction: { colorIndex: '', indexIMG: 0, size: '', itemCount: 1 },
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
      const products = res.map((item) => {
        const newColorImg = item.fields.colorImg.map((color) => {
          return resColor.find((colorin) => colorin.id === color).fields;
        });
        //create array indexImg
        let check = -1;
        let check1 = -1;
        const a = newColorImg.map((item) => {
          const indexImgArray = Array.from(
            { length: item.img.length },
            (_, i) => {
              check = check + 1;

              return check;
            }
          );
          const newImg = item.img.map((imgItem, index) => {
            check1 = check1 + 1;
            return { ...imgItem, indexImgItem: check1 };
          });
          return { ...item, indexImg: indexImgArray, img: newImg };
        });
        //create indexImg for each img
        // const b = newColorImg.map((item) => {
        //   console.log(item);

        //   return { ...item };
        // });

        const AllOfImg = newColorImg.reduce((acc, cur) => {
          return acc.concat(cur.img);
        }, []);

        return {
          ...item.fields,
          colorImg: a,
          id: item.id,
          imgAmount: check,
          AllOfImg: AllOfImg,
        };
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
  const getSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT, payload: { id } });
  };

  const switchIMG = (value) => {
    if (Object.keys(state.singleProduct).length > 0) {
      if (value === 'inc') {
        dispatch({ type: INCREASE_INDEX_IMG });
      } else if (value === 'dec') {
        dispatch({ type: DECREASE_INDEX_IMG });
      } else {
        dispatch({ type: SET_INDEX_IMG, payload: { value } });
      }
    }
  };
  const setColorFollowIndex = () => {
    dispatch({ type: SET_COLOR_INDEX });
  };
  const cleartSingleProductAction = () => {
    dispatch({ type: CLEAR_SINGLE_ACTION });
  };
  const setSingleProductSize = (value) => {
    dispatch({ type: SET_SIZE_PRODUCT, payload: { value } });
  };
  const setItemCount = (value) => {
    dispatch({ type: SET_ITEM_COUNT, payload: { value } });
  };
  // no parameter can get e(enent)
  const setItemCountByInput = (e) => {
    const value = parseInt(e.target.value);
    dispatch({ type: SET_ITEM_COUNT, payload: { value } });
  };
  useEffect(() => {
    //when indexIMG change , find color follow product
    setColorFollowIndex();
  }, [state.singleProductAction.indexIMG]);
  useEffect(() => {
    localStorage.setItem('singleProduct', JSON.stringify(state.singleProduct));
    if (Object.keys(state.singleProduct).length > 0) {
      setSingleProductSize(state.singleProduct.size[0]);
    }
  }, [state.singleProduct]);
  useEffect(() => {
    getProducts();
    getInfoOfHome('slide', ADD_SLIDESHOW, 'full');
    getInfoOfHome('collection', ADD_COLLECTION, 'full');
    getInfoOfHome('blog', ADD_BLOG);
    getInfoOfHome('banner', ADD_BANNER);
    getInfoOfHome('blog', ADD_BLOG_HOME);
  }, []);
  return (
    <ProductContext.Provider
      value={{
        ...state,
        getSingleProduct,
        switchIMG,
        cleartSingleProductAction,
        setSingleProductSize,
        setItemCount,
        setItemCountByInput,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
