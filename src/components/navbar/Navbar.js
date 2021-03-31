import React from 'react';
import './navbar.scss';
import NavButton from '../navButton/Navbutton';
import logo from '../../assets/logo.svg';
import '../../sassStyles/global.scss';
import ReorderIcon from '@material-ui/icons/Reorder';
import { useButtonContext } from '../../context/button_context';
import Grid from '@material-ui/core/Grid';
const Navbar = () => {
  const { miniAction } = useButtonContext();
  return (
    <div className='nav'>
      <div className='navbar'>
        <div className='logo-wrapper'>
          <button
            className='nav-toggle-btn'
            onClick={() => miniAction('open', 'SideBar')}
          >
            <ReorderIcon style={{ fontSize: 30 }} />
          </button>

          <a href='#' className='logo'>
            <img src={logo} alt='' />
          </a>
        </div>
        <ul className='nav-links'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Products</a>
            <ul className='sub-menu'>
              <li>
                <a href='#'>quần áo</a>
              </li>
              <li>
                <a href='#'>giày</a>
              </li>
              <li>
                <a href='#'>nhẫn</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#'>Sale</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
        </ul>
        <NavButton />
      </div>
    </div>
  );
};

export default Navbar;
