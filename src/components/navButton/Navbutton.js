import React from 'react';
import './navButton.scss';
import { useButtonContext } from '../../context/button_context';
import { BsSearch, BsHeart } from 'react-icons/bs';
import { BiUser, BiUserCheck } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
const Navbutton = () => {
  const { miniAction, currentPage } = useButtonContext();
  const { totalItem } = useCartContext();
  return (
    <div className='nav-icons'>
      <button
        className='nav-icon-search'
        onClick={() => miniAction('open', 'MiniSearch')}
      >
        <BsSearch />
      </button>
      <button
        className='nav-icon-user'
        onClick={() => miniAction('open', 'MiniLogin')}
      >
        <BiUser />
        {/* icon when user login */}
        {/* <BiUserCheck /> */}
      </button>
      <Link to='/wishlist' className='nav-icon-wishlist'>
        <BsHeart />
        <span className='nav-icon-number'>1</span>
      </Link>
      <button
        className={
          currentPage === '/cart'
            ? 'nav-icon-cart no-pointer'
            : 'nav-icon-cart '
        }
        onClick={() => miniAction('open', 'MiniCart')}
      >
        <FiShoppingCart />
        <span className='nav-icon-number'>{totalItem}</span>
      </button>
    </div>
  );
};

export default Navbutton;
