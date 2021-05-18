import React from 'react';
import './navButton.scss';
import { useButtonContext } from '../../context/button_context';
import { BsSearch, BsHeart } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
const Navbutton = () => {
  const { miniAction, currentPage } = useButtonContext();
  const { totalItem } = useCartContext();
  const { loginWithRedirect, logout, myUser, wishList } = useUserContext();
  return (
    <div className='nav-icons'>
      <button
        className='nav-icon-search'
        onClick={() => miniAction('open', 'MiniSearch')}
      >
        <BsSearch />
      </button>
      {!myUser ? (
        <button className='nav-icon-user' onClick={loginWithRedirect}>
          <BiUser />
          {/* icon when user login */}
        </button>
      ) : (
        <button
          className='nav-icon-user'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          {/* icon when user login */}
          <FaUserCheck />
        </button>
      )}
      <Link
        to='/wishList'
        className={
          currentPage === '/wishList'
            ? 'nav-icon-wishlist no-pointer'
            : 'nav-icon-wishlist '
        }
      >
        <BsHeart />
        <span className='nav-icon-number'>{wishList.length}</span>
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
