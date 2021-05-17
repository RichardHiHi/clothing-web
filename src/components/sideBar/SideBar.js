import React, { useState } from 'react';
import './sidebar.scss';
import { useButtonContext } from '../../context/button_context';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useProductContext } from '../../context/product_context';
import { useUserContext } from '../../context/user_context';
import { Link } from 'react-router-dom';
const SideBar = () => {
  const [test, setTest] = useState('menu');
  const { isSideBarOpen, miniAction } = useButtonContext();
  const { category } = useProductContext();
  const { logout } = useUserContext();
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
            <li key={index}>
              <Link to={item}>{item}</Link>
            </li>
          );
        })}
        <li>
          <Link to='wishList'>
            <FavoriteBorderOutlinedIcon />
            Wishst
          </Link>
        </li>
        <li>
          <Link to=''>
            <SearchOutlinedIcon />
            Sech
          </Link>
        </li>
        <li>
          <a href='' onClick={logout}>
            <PersonOutlineOutlinedIcon />
            Logiregister
          </a>
        </li>
      </ul>
      <ul
        className={test === 'category' ? 'sidebar-list' : 'sidebar-list active'}
      >
        <li>
          <Link to=''>Home</Link>
        </li>
        <li>
          <Link to='Products'>Products</Link>
        </li>
        <li>
          <Link to=''>Sale</Link>
        </li>
        <li>
          <Link to='about'>About</Link>
        </li>
        <li>
          <Link to='blog'>Blog</Link>
        </li>
        <li>
          <Link to='wishList'>
            <FavoriteBorderOutlinedIcon />
            Wishlist
          </Link>
        </li>
        <li>
          <a href=''>
            <SearchOutlinedIcon />
            Search
          </a>
        </li>
        <li>
          <a href=''>
            <PersonOutlineOutlinedIcon />
            Login/register
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
