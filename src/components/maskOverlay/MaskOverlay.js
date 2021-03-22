import React, { useState } from 'react';
import './maskOverlay.scss';
import { useButtonContext } from '../../context/button_context';
const MaskOverlay = () => {
  const {
    isSideBarOpen,
    miniAction,
    isMiniSearchOpen,
    isMiniLoginOpen,
    isMiniCartOpen,
  } = useButtonContext();
  const action = () => {
    miniAction('close', 'SideBar');
    miniAction('close', 'MiniSearch');
    miniAction('close', 'MiniLogin');
    miniAction('close', 'MiniCart');
  };
  return (
    <div
      className={
        isSideBarOpen || isMiniSearchOpen || isMiniLoginOpen || isMiniCartOpen
          ? 'mask-overlay mask-overlay-openned'
          : 'mask-overlay'
      }
      onClick={action}
    ></div>
  );
};

export default MaskOverlay;
