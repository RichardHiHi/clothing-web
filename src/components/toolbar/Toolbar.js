import React from 'react';
import './toolbar.scss';
import { useButtonContext } from '../../context/button_context';
import { BsSearch, BsHeart } from 'react-icons/bs';
import { AiOutlineShop } from 'react-icons/ai';
import { BiUser, BiUserCheck } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import SortIcon from '@material-ui/icons/Sort';

const Toolbar = () => {
  const { miniAction, isInProductPage } = useButtonContext();
  return (
    <div className='toolbar-section'>
      {!isInProductPage && (
        <div className='toolbar-icon-wrapper'>
          <Link to='/products' className='toolbar-link'>
            <span className='toolbar-icon'>
              <AiOutlineShop />
            </span>
            <span className='toolbar-name'>shopping</span>
          </Link>
        </div>
      )}
      {isInProductPage && (
        <>
          <div className='toolbar-icon-wrapper'>
            <button
              className='toolbar-link btn'
              onClick={() => miniAction('open', 'FilterMini')}
            >
              <span className='toolbar-icon'>
                <FilterListOutlinedIcon />
              </span>
              <span className='toolbar-name'>Filter</span>
            </button>
          </div>
          <div className='toolbar-icon-wrapper'>
            <button
              className='toolbar-link btn'
              onClick={() => miniAction('open', 'SortMini')}
            >
              <span className='toolbar-icon'>
                <SortIcon />
              </span>
              <span className='toolbar-name'>Sort</span>
            </button>
          </div>
        </>
      )}

      <div className='toolbar-icon-wrapper'>
        <a
          href='#'
          className='toolbar-link'
          onClick={() => miniAction('open', 'MiniSearch')}
        >
          <span className='toolbar-icon'>
            <BsSearch />
          </span>
          <span className='toolbar-name'>search</span>
        </a>
      </div>

      <div className='toolbar-icon-wrapper'>
        <a
          href='#'
          className='toolbar-link'
          onClick={() => miniAction('open', 'MiniCart')}
        >
          <span className='toolbar-icon'>
            <FiShoppingCart />
            <span className='toolbar-count'>1</span>
          </span>
          <span className='toolbar-name'>Cart</span>
        </a>
      </div>
      <div className='toolbar-icon-wrapper'>
        <a href='#' className='toolbar-link'>
          <span className='toolbar-icon'>
            <BsHeart />
            <span className='toolbar-count'>1</span>
          </span>
          <span className='toolbar-name'>Wishlist</span>
        </a>
      </div>
      <div className='toolbar-icon-wrapper'>
        <a
          href='#'
          className='toolbar-link'
          onClick={() => miniAction('open', 'MiniLogin')}
        >
          <span className='toolbar-icon'>
            <BiUser />
          </span>
          <span className='toolbar-name'>Account</span>
        </a>
      </div>
    </div>
  );
};

export default Toolbar;
