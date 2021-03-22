import React from 'react';
import {
  MaskOverlay,
  SideBar,
  SearchMini,
  LoginMini,
  CartMini,
} from '../components';

const HomePage = () => {
  return (
    <>
      <MaskOverlay />
      <SideBar />
      <SearchMini />
      <LoginMini />
      <CartMini />
    </>
  );
};

export default HomePage;
