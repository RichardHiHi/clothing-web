import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/button_reducer';
import { MINI_ACTION } from '../actions';
const ButtonContext = React.createContext();
const initialState = {
  isSideBarOpen: false,
  isMiniSearchOpen: false,
  isMiniLoginOpen: false,
  isMiniCartOpen: false,
  isFilterMiniOpen: false,
  isSortMiniOpen: false,
};

export const ButtonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //name is mimi , action is open or close
  const miniAction = (action, name) => {
    dispatch({ type: MINI_ACTION, payload: { name, action } });
  };
  return (
    <ButtonContext.Provider value={{ ...state, miniAction }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => {
  return useContext(ButtonContext);
};
