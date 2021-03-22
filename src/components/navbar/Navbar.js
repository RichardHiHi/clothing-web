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
      <Grid container alignItems='center'>
        <Grid container item lg={3} md={9} alignItems='center' xs={9}>
          <Grid item md={6} lg={0} xs={6}>
            <button
              className='nav-toggle'
              onClick={() => miniAction('open', 'SideBar')}
            >
              <ReorderIcon style={{ fontSize: 30 }} />
            </button>
          </Grid>
          <Grid item md={6} lg={12} xs={6}>
            <a href='#' className='logo'>
              <img src={logo} alt='' />
            </a>
          </Grid>
        </Grid>
        <Grid item lg={6}>
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
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          <NavButton />
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
