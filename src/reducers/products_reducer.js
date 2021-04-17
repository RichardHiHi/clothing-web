import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_BEGIN,
} from '../actions';

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const products = action.payload.products;
    const trendingProducts = products.filter((product) => product.trending);
    const sale = products.filter((product) => product.onSale);
    const category = products.reduce((acc, cur) => {
      return acc.concat(cur.category);
    }, []);
    const uniqueCategory = [...new Set(category)];
    return {
      ...state,
      productsError: false,
      productsLoading: false,
      products: action.payload.products,
      trendingProducts: trendingProducts,
      saleProducts: sale,
      category: uniqueCategory,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsError: true };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, productsLoading: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
