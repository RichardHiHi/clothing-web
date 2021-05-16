import React, { useContext, useReducer, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST,
  SET_USER,
  UPDATE_WISHLIST,
} from '../actions';
import reducer from '../reducers/user_reducer';
const UserContext = React.createContext();
var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.REACT_APP_PERSON_KEY }).base(
  process.env.REACT_APP_BASIC_KEY
);

const getLocalStorage = () => {
  let wishList = localStorage.getItem('wishList');
  if (wishList) {
    return JSON.parse(localStorage.getItem('wishList'));
  } else {
    return [];
  }
};
const initialState = {
  wishList: getLocalStorage(),
  myUser: null,
};
export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const [state, dispatch] = useReducer(reducer, initialState);
  //return user follow email
  const getRecord = async (email) => {
    const res = await base('user')
      .select({ filterByFormula: `sub = "${email}"` })
      .firstPage();
    return res;
  };
  const postRecord = async (user, wishList) => {
    const { sub, nickname, picture } = user;
    const newUser = { sub, nickname, picture, wishList };
    base('user').create([
      {
        fields: newUser,
      },
    ]);
  };
  const updateRecord = async (userAir, wishList, recordId) => {
    const { sub, nickname, picture } = userAir;
    const newUserAir = { sub, nickname, picture, wishList: wishList };
    base('user').update([
      {
        id: `${recordId}`,
        fields: newUserAir,
      },
    ]);
  };
  const setMyUser = (user, wishList) => {
    dispatch({ type: SET_USER, payload: { user, wishList } });
  };
  //handle wishlist
  const addToWishList = (idProduct) => {
    dispatch({ type: ADD_TO_WISHLIST, payload: { idProduct } });
  };
  const removeWishList = (idProduct) => {
    dispatch({ type: REMOVE_WISHLIST, payload: { idProduct } });
  };
  const updateWishList = (wishList) => {
    dispatch({ type: UPDATE_WISHLIST, payload: { wishList } });
  };
  const handleUpdateLogin = async () => {
    const record = await getRecord(user.sub);
    //if there is not user , create it
    if (record.length === 0) {
      const a = await postRecord(user, state.wishList);
      setMyUser(user, state.wishList);
    } else {
      // update wishlist on air and local
      const newRecord = await getRecord(user.sub);
      const userAir = newRecord[0].fields;
      const recordId = newRecord[0].id;
      //wishlist air
      let wishList = newRecord[0].fields.wishList || [];
      //update wishlist of localStorage after login
      if (wishList.length > 0 || state.wishList.length > 0) {
        //meger 2 array
        wishList = [...new Set([...state.wishList, ...wishList])];
      }
      //update wishlist of local
      updateWishList(wishList);
      //update user
      setMyUser(userAir, wishList);
      //update air
      updateRecord(userAir, wishList, recordId);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      handleUpdateLogin();
    } else {
      setMyUser(false);
    }
  }, [isAuthenticated]);
  useEffect(async () => {
    localStorage.setItem('wishList', JSON.stringify(state.wishList));
    if (state.myUser) {
      const newRecord = await getRecord(state.myUser.sub);
      //get recordId for update on air
      const recordId = newRecord[0].id;
      await updateRecord(state.myUser, state.wishList, recordId);
      setMyUser(state.myUser, state.wishList);
    }
  }, [state.wishList]);

  return (
    <UserContext.Provider
      value={{
        ...state,
        loginWithRedirect,
        logout,
        addToWishList,
        removeWishList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
