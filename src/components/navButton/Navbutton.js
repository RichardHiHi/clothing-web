import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PersonIcon from '@material-ui/icons/Person';
import './navButton.scss';
import { useButtonContext } from '../../context/button_context';
const Navbutton = () => {
  const { miniAction } = useButtonContext();
  return (
    <div className='nav-icons'>
      <a
        href='#'
        className='nav-icon-search'
        onClick={() => miniAction('open', 'MiniSearch')}
      >
        <SearchOutlinedIcon />
      </a>

      <a
        href='#'
        className='nav-icon-user'
        onClick={() => miniAction('open', 'MiniLogin')}
      >
        <PersonOutlineOutlinedIcon />
        {/* icon when user login */}
        {/* <PersonIcon color='secondary' /> */}
      </a>
      <a href='#' className='nav-icon-wishlist'>
        <FavoriteBorderOutlinedIcon />
        <span>1</span>
      </a>
      <a
        href='#'
        className='nav-icon-cart'
        onClick={() => miniAction('open', 'MiniCart')}
      >
        <ShoppingCartOutlinedIcon />
        <span>1</span>
      </a>
    </div>
  );
};

export default Navbutton;
