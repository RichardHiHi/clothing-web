import React, { useState, useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import { useProductContext } from '../context/product_context';
import {
  SORT_PRODUCTS,
  LOAD_PRODUCTS,
  UPDATE_SORT_OPTION,
  UPDATE_FILTER,
  FILTER_PRODUCTS,
  UPDATE_FILTER_MENU,
} from '../actions';

const FilterContext = React.createContext();
const initialState = {
  category: [],
  products: [],
  color: [],
  size: [],
  filteredProducts: [],
  sortOption: 'lowest',
  filter: {
    // category: 'lowest',
    search: '',
    // price: '',
    // color: '',
    // size: '',
  },
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, category, color, size } = useProductContext();

  useEffect(() => {
    dispatch({
      type: 'LOAD_PRODUCTS',
      payload: { products, category, color, size },
    });
  }, [products]);
  useEffect(() => {
    dispatch({
      type: FILTER_PRODUCTS,
    });
    dispatch({
      type: SORT_PRODUCTS,
    });
    dispatch({ type: UPDATE_FILTER_MENU });
  }, [state.sortOption, state.filter, products]);

  const sortUpdate = (e) => {
    dispatch({
      type: UPDATE_SORT_OPTION,
      payload: { sortOption: e.target.value },
    });
  };

  const filterUpdate = (e) => {
    const filterName = e.target.name;
    if (filterName === 'search') {
      dispatch({
        type: UPDATE_FILTER,
        payload: { name: filterName, value: e.target.value },
      });
    }
  };
  return (
    <FilterContext.Provider value={{ ...state, sortUpdate, filterUpdate }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
