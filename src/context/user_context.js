import React, { useContext, useReducer, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
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
export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const [myUser, setMyUser] = useState(null);
  const [wishList, setWishList] = useState(getLocalStorage());
  const getRecord = async () => {
    const email = 'Men in style';
    const res = await base('blog')
      .select({ filterByFormula: `postTitle = "${email}"` })
      .firstPage();
  };
  const postRecord = async () => {
    base('user').create([
      {
        fields: {
          client_id: '14',
          name: '2',
          nickname: '3',
          picture: '4',
          product: ['recMc9UcLUHyVPOTd'],
        },
      },
    ]);
  };
  const updateRecord = (id) => {
    base('user').update([
      {
        id: `${id}`,
        fields: {
          client_id: '12',
          name: '2',
          nickname: '3',
          picture: '4',
          product: ['recMc9UcLUHyVPOTd'],
        },
      },
    ]);
  };
  const addToWishList = (idProduct) => {
    setWishList([...wishList, idProduct]);
  };
  const removeWishList = (idProduct) => {
    const newWishList = wishList.filter((item) => item !== idProduct);
    setWishList(newWishList);
  };
  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(false);
    }
  }, [isAuthenticated]);
  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
  }, [wishList]);
  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        logout,
        myUser,
        addToWishList,
        wishList,
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
