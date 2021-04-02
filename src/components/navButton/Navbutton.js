import React from 'react';
import './navButton.scss';
import { useButtonContext } from '../../context/button_context';
import { BsSearch, BsHeart } from 'react-icons/bs';
import { BiUser, BiUserCheck } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
const Navbutton = () => {
  const { miniAction } = useButtonContext();
  return (
    <div className='nav-icons'>
      <a
        href='javascript:void(0);'
        className='nav-icon-search'
        onClick={() => miniAction('open', 'MiniSearch')}
      >
        <BsSearch />
      </a>

      <a
        href='javascript:void(0);'
        className='nav-icon-user'
        onClick={() => miniAction('open', 'MiniLogin')}
      >
        <BiUser />
        {/* icon when user login */}
        {/* <BiUserCheck /> */}
      </a>
      <a href='javascript:void(0);' className='nav-icon-wishlist'>
        <BsHeart />
        <span>1</span>
      </a>
      <a
        href='javascript:void(0);'
        className='nav-icon-cart'
        onClick={() => miniAction('open', 'MiniCart')}
      >
        <FiShoppingCart />
        <span>1</span>
      </a>
    </div>
  );
};

export default Navbutton;
