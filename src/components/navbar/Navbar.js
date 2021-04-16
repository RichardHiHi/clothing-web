import React, { useEffect } from 'react';
import './navbar.scss';
import NavButton from '../navButton/Navbutton';
import logo from '../../assets/logo.svg';
import ReorderIcon from '@material-ui/icons/Reorder';
import { useButtonContext } from '../../context/button_context';
import SearchMini from '../searchMini/SearchMini';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const { miniAction } = useButtonContext();
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos < currentScrollPos && currentScrollPos > 75) {
        document.querySelector('.nav').classList.add('nav-hidden');
      } else {
        document.querySelector('.nav').classList.remove('nav-hidden');
      }
      prevScrollpos = currentScrollPos;
    };
  });
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
          <Link to='/' className='nav-logo'>
            <img src={logo} alt='' />
          </Link>
        </div>
        <div className='nav-links-wrapper'>
          <Link to='/' className='nav-logo'>
            <img src={logo} alt='' />
          </Link>
          <ul className='nav-links'>
            <li>
              <Link to='/'>Home</Link>
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
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
        <NavButton />
      </div>
    </div>
  );
};

export default Navbar;
