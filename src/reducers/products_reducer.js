import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_BEGIN,
  ADD_BLOG,
} from '../actions';
import { getUnique, getUniqueObj } from '../utils/helper';

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const products = action.payload.products;
    const trendingProducts = products.filter((product) => product.trending);
    const sale = products.filter((product) => product.onSale);

    return {
      ...state,
      productsError: false,
      productsLoading: false,
      products: action.payload.products,
      trendingProducts: trendingProducts,
      saleProducts: sale,
      category: getUnique(products, 'category'),
      color: getUniqueObj(products, 'colorName'),
      size: getUnique(products, 'size'),
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsError: true };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, productsLoading: true };
  }
  if (action.type === ADD_BLOG) {
    return { ...state, blogs: action.payload.blogs };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
