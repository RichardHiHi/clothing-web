import React, { useState } from 'react';
import './maskOverlay.scss';
import CloseIcon from '@material-ui/icons/Close';

import { useButtonContext } from '../../context/button_context';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

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
    >
      {isSideBarOpen && (
        <button className='btn-close'>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export default MaskOverlay;
