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
import { getUnique, getUniqueObj } from '../utils/helper';

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const products = action.payload.products;
    const trendingProducts = products.filter((product) => product.trending);
    const sale = products.filter((product) => product.onSale);
    const brand = [...new Set(products.map((product) => product.brand))];
    console.log();

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
      brand: brand,
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
  //toggle index img
  if (action.type === INCREASE_INDEX_IMG) {
    let newindexIMG = state.singleProductAction.indexIMG + 1;
    if (newindexIMG > state.singleProduct.AllOfImg.length - 1) {
      newindexIMG = 0;
    }
    return {
      ...state,
      singleProductAction: {
        ...state.singleProductAction,
        indexIMG: newindexIMG,
      },
    };
  }
  if (action.type === DECREASE_INDEX_IMG) {
    let newindexIMG = state.singleProductAction.indexIMG - 1;
    if (newindexIMG < 0) {
      newindexIMG = state.singleProduct.AllOfImg.length - 1;
    }
    return {
      ...state,
      singleProductAction: {
        ...state.singleProductAction,
        indexIMG: newindexIMG,
      },
    };
  }
  if (action.type === SET_INDEX_IMG) {
    return {
      ...state,
      singleProductAction: {
        ...state.singleProductAction,
        indexIMG: action.payload.value,
      },
    };
  }
  if (action.type === SET_COLOR_INDEX) {
    if (Object.keys(state.singleProduct).length > 0) {
      const color = state.singleProduct.colorImg.find((color) => {
        return color.indexImg.some(
          (item) => item === state.singleProductAction.indexIMG
        );
      }).colorName;
      return {
        ...state,
        singleProductAction: {
          ...state.singleProductAction,
          colorIndex: color,
        },
      };
    }
    return {
      ...state,
    };
  }
  if (action.type === CLEAR_SINGLE_ACTION) {
    return {
      ...state,
      singleProductAction: {
        colorIndex: state.singleProduct.colorImg[0].colorName,
        indexIMG: 0,
        size: state.singleProduct.size[0],
        itemCount: 1,
      },
    };
  }
  if (action.type === SET_SIZE_PRODUCT) {
    return {
      ...state,
      singleProductAction: {
        ...state.singleProductAction,
        size: action.payload.value,
      },
    };
  }
  if (action.type === SET_ITEM_COUNT) {
    const value = action.payload.value;

    const stock = state.singleProduct.stock;
    let newItemCount;
    if (value === 'inc') {
      newItemCount = state.singleProductAction.itemCount + 1;
      if (isNaN(newItemCount)) {
        newItemCount = 1;
      }
      if (newItemCount > stock) {
        newItemCount = stock;
      }
    }
    if (value === 'dec') {
      newItemCount = state.singleProductAction.itemCount - 1;
      if (newItemCount < 1 || isNaN(newItemCount)) {
        newItemCount = 1;
      }
    }
    if (typeof value === 'number') {
      newItemCount = value;
      if (newItemCount > stock) {
        newItemCount = stock;
      }
      if (newItemCount < 1) {
        newItemCount = 1;
      }
    }

    return {
      ...state,
      singleProductAction: {
        ...state.singleProductAction,
        itemCount: newItemCount,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
