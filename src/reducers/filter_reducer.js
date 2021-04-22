import { SubscriptionsOutlined } from '@material-ui/icons';
import { getUnique, getUniqueObj } from '../utils/helper';

import {
  SORT_PRODUCTS,
  LOAD_PRODUCTS,
  UPDATE_SORT_OPTION,
  UPDATE_FILTER,
  FILTER_PRODUCTS,
  UPDATE_FILTER_MENU,
} from '../actions';

const button_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      products: [...action.payload.products],
      filteredProducts: [...action.payload.products],
      category: [...action.payload.category],
      color: [...action.payload.color],
      size: [...action.payload.size],
    };
  }
  if (action.type === UPDATE_SORT_OPTION) {
    return { ...state, sortOption: action.payload.sortOption };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sortOption, filteredProducts } = state;
    let tempProducts = [...filteredProducts];

    if (sortOption === 'lowest') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sortOption === 'highest') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (sortOption === 'A-Z') {
      tempProducts = tempProducts.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
        var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // name trùng nhau
        return 0;
      });
    }
    if (sortOption === 'Z-A') {
      tempProducts = tempProducts.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
        var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        // name trùng nhau
        return 0;
      });
    }
    return {
      ...state,
      filteredProducts: tempProducts,
    };
  }
  if (action.type === UPDATE_FILTER) {
    return {
      ...state,
      filter: { ...state.filter, [action.payload.name]: action.payload.value },
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { products } = state;
    let tempfilterProduct = [...products];
    const { search } = state.filter;
    // console.log(state.filter.search);

    if (search.length > 0) {
      // console.log(123);
      tempfilterProduct = tempfilterProduct.filter((product) => {
        return product.name.toLowerCase().startsWith(search);
      });
    }

    return {
      ...state,
      filteredProducts: tempfilterProduct,
    };
  }
  if (action.type === UPDATE_FILTER_MENU) {
    const { filteredProducts } = state;
    return {
      ...state,
      category: getUnique(filteredProducts, 'category'),
      color: getUniqueObj(filteredProducts, 'colorName'),
      size: getUnique(filteredProducts, 'size'),
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default button_reducer;
