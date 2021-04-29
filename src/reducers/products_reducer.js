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
    return { ...state, blogs: action.payload.value };
  }
  if (action.type === ADD_COLLECTION) {
    return { ...state, collections: action.payload.value };
  }
  if (action.type === ADD_BANNER) {
    return { ...state, banners: action.payload.value };
  }
  if (action.type === ADD_BLOG_HOME) {
    return { ...state, blogHomes: action.payload.value };
  }
  if (action.type === ADD_SLIDESHOW) {
    return { ...state, slideShows: action.payload.value };
  }
  if (action.type === GET_SINGLE_PRODUCT) {
    const singleProduct = state.products.find(
      (item) => item.id === action.payload.id
    );
    return {
      ...state,
      singleProduct: singleProduct,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
