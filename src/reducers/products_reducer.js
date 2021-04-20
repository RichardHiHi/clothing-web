import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_BEGIN,
} from '../actions';
import { getUnique, getUniqueObj } from '../utils/helper';

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const products = action.payload.products;
    console.log(products);
    const trendingProducts = products.filter((product) => product.trending);
    const sale = products.filter((product) => product.onSale);
    const objColor = products
      .reduce((acc, cur) => {
        return acc.concat(cur.colorImg);
      }, [])
      .map((color) => {
        return { colorName: color.colorName, colorCode: color.colorCode };
      });

    console.log(getUnique(products, 'size'));
    return {
      ...state,
      productsError: false,
      productsLoading: false,
      products: action.payload.products,
      trendingProducts: trendingProducts,
      saleProducts: sale,
      category: getUnique(products, 'category'),
      color: getUniqueObj(objColor, 'colorName'),
      size: getUnique(products, 'size'),
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
