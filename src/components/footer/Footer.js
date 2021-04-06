import React, { useEffect } from 'react';
import './footer.scss';
import Grid from '@material-ui/core/Grid';
import { footers, icons } from '../../utils/data';
import logo from '../../assets/logo.svg';
import payment from '../../assets/footer/payment.webp';
import { VscLocation } from 'react-icons/vsc';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlinePlus,
  AiOutlineMinus,
} from 'react-icons/ai';
import RotateCloseBtn from '../rotateCloseBtn/RotateCloseBtn';
const Footer = () => {
  const openClose = (e) => {
    e.target.parentElement.classList.toggle('menu-footer-wrapper_open');
  };
  return (
    <footer>
      <div className='footer-container'>
        <div className='content-footer'>
          <Grid container>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <aside className='menu-footer-wrapper'>
                <div className='menu-footer-title-wrapper' onClick={openClose}>
                  <h3 className='menu-footer-title'>Get in touch</h3>
                  <div className='footer-btn-wrapper'>
                    <div className='footer-btn'>
                      <div className='line-1'>
                        <div className='line-2'></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='footer-contact menu-footer'>
                  <div className='menu'>
                    <p>
                      <a href='#' className='footer-logo'>
                        <img src={logo}></img>
                      </a>
                    </p>
                    <p>
                      <span className='icon-item-footer'>
                        <VscLocation />
                      </span>
                      <span>
                        184 Main Rd E, St Albans <br />
                        <span>VIC 3021, Australia</span>
                      </span>
                    </p>
                    <p>
                      <span className='icon-item-footer'>
                        <AiOutlineMail />
                      </span>
                      <span>
                        <a href='mailto:contact@company.com'>
                          contact@company.com
                        </a>
                      </span>
                    </p>
                    <p>
                      <span className='icon-item-footer'>
                        <AiOutlinePhone />
                      </span>
                      <span>+001 2233 456 </span>
                    </p>
                    <div className='social-footer-container'>
                      {icons.map((icon) => {
                        return (
                          <a href='#' className={`social-icon ${icon.name}`}>
                            <span class='text-icon'>{icon.text}</span>
                            {icon.icon}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </aside>
            </Grid>
            {footers.map((footer) => {
              return (
                <Grid item xs={12} sm={6} md={3} lg={2}>
                  <aside className='menu-footer-wrapper '>
                    <div
                      className='menu-footer-title-wrapper'
                      onClick={openClose}
                    >
                      <h3 className='menu-footer-title'>{footer.menu}</h3>
                      <div className='footer-btn-wrapper'>
                        <div className='footer-btn'>
                          <div className='line-1'>
                            <div className='line-2'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='menu-footer'>
                      <ul className='menu'>
                        {footer.items.map((item) => {
                          return (
                            <li className='item'>
                              <a href={item.link}>{item.name}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </aside>
                </Grid>
              );
            })}
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <aside className='menu-footer-wrapper'>
                <div className='menu-footer-title-wrapper' onClick={openClose}>
                  <h3 className='menu-footer-title'>Newsletter Signup</h3>
                  <div className='footer-btn-wrapper'>
                    <div className='footer-btn'>
                      <div className='line-1'>
                        <div className='line-2'></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='menu-footer'>
                  <div className='menu'>
                    <p>
                      Subscribe to our newsletter and get 10% off your first
                      purchase
                    </p>
                    <div className='input-footer-wrapper'>
                      <input
                        type='email'
                        name='contact[email]'
                        placeholder='Your email address'
                        value=''
                        class='input-footer'
                        required='required'
                      />
                      <button className='input-footer-btn'>Subscribe</button>
                    </div>
                    <p>
                      <img src={payment} alt='' />
                    </p>
                  </div>
                </div>
              </aside>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='section-footer-bot'>
        <div className='footer-bot-container'>
          <div className='footer-bot-content'>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div class='footer-bot-store-name'>
                  Copyright © 2021 <span>Kalles</span> all rights reserved.
                  Powered by <a href='#'>The4</a>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <ul className='footer-bot-menu'>
                  <li class='menu-item'>
                    <a href='#'>Shop</a>
                  </li>
                  <li class='menu-item'>
                    <a href='#'>About Us</a>
                  </li>
                  <li class='menu-item'>
                    <a href='#'>Contact</a>
                  </li>
                  <li class='menu-item'>
                    <a href='#'>Blog</a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
