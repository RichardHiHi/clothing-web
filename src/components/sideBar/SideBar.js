import React, { useState } from 'react';
import './sidebar.scss';
import { useButtonContext } from '../../context/button_context';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useProductContext } from '../../context/product_context';
import { useUserContext } from '../../context/user_context';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../../context/filter_context';
const SideBar = () => {
  const [test, setTest] = useState('menu');
  const { isSideBarOpen, miniAction } = useButtonContext();
  const { category } = useProductContext();
  const { logout, myUser, loginWithRedirect } = useUserContext();
  const { filterUpdate } = useFilterContext();
  return (
    <div className={isSideBarOpen ? 'sidebar sidebar-openned' : 'sidebar '}>
      <div
        className={
          test === 'menu' ? 'sidebar-header active1' : 'sidebar-header active2'
        }
      >
        <div className='sidebar-header-title' onClick={() => setTest('menu')}>
          <span>MENU</span>
        </div>
        <div
          className='sidebar-header-title'
          onClick={() => setTest('category')}
        >
          <span>CATEGORIES</span>
        </div>
      </div>

      <ul className={test === 'menu' ? 'sidebar-list' : 'sidebar-list active'}>
        {category.map((item, index) => {
          return (
            <li key={index} onClick={() => miniAction('close', 'SideBar')}>
              <Link
                to='products'
                name='category'
                data-category={item}
                onClick={filterUpdate}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul
        className={test === 'category' ? 'sidebar-list' : 'sidebar-list active'}
      >
        <li>
          <Link to='' onClick={() => miniAction('close', 'SideBar')}>
            Home
          </Link>
        </li>
        <li>
          <Link to='Products' onClick={() => miniAction('close', 'SideBar')}>
            Products
          </Link>
        </li>
        <li>
          <Link to='' onClick={() => miniAction('close', 'SideBar')}>
            Sale
          </Link>
        </li>
        <li>
          <Link to='about' onClick={() => miniAction('close', 'SideBar')}>
            About
          </Link>
        </li>
        <li>
          <Link to='blog' onClick={() => miniAction('close', 'SideBar')}>
            Blog
          </Link>
        </li>
        <li>
          <Link to='wishList' onClick={() => miniAction('close', 'SideBar')}>
            <FavoriteBorderOutlinedIcon />
            Wishlist
          </Link>
        </li>
        <li>
          <button
            href=''
            onClick={() => {
              miniAction('close', 'SideBar');
              miniAction('open', 'MiniSearch');
            }}
          >
            <SearchOutlinedIcon />
            Search
          </button>
        </li>
        {myUser && (
          <>
            <li>
              <Link
                to='checkOut'
                onClick={() => miniAction('close', 'SideBar')}
              >
                <CheckCircleOutlineOutlinedIcon />
                Check Out
              </Link>
            </li>
            <li>
              <button onClick={logout}>
                <PersonOutlineOutlinedIcon />
                Logout
              </button>
            </li>
          </>
        )}
        {!myUser && (
          <li>
            <button onClick={loginWithRedirect}>
              <PersonOutlineOutlinedIcon />
              Login/register
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
