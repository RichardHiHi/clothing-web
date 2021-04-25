import React, { useEffect } from 'react';
import './navbar.scss';
import NavButton from '../navButton/Navbutton';
import logo from '../../assets/logo.svg';
import ReorderIcon from '@material-ui/icons/Reorder';
import { useButtonContext } from '../../context/button_context';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../context/product_context';
import { useFilterContext } from '../../context/filter_context';
import Grid from '@material-ui/core/Grid';
import wowmen2 from '../../assets/wowmen2.jpg';
import men from '../../assets/men.jpg';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../utils/helper';
import ProductMiniItem from '../product-mini-item/ProductMiniItem';

const Navbar = () => {
  const { miniAction } = useButtonContext();
  const { category } = useProductContext();
  const { saleProducts: sale } = useProductContext();
  const { filterCategoryUpdate, clearAllFilter } = useFilterContext();

  useEffect(() => {
    document
      .querySelector('.sub-menu-slider-wrapper')
      .addEventListener('mousedown', (e) => {
        e.preventDefault();
      });
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos < currentScrollPos && currentScrollPos > 75) {
        document.querySelector('.nav').classList.add('hidden');
      } else {
        document.querySelector('.nav').classList.remove('hidden');
      }
      prevScrollpos = currentScrollPos;
    };
  });
  var settingSlide = {
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
    ],
  };
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
              <Link to='/products' onClick={clearAllFilter}>
                Products
              </Link>
              <div className='sub-menu-wrapper'>
                <Grid container>
                  <Grid item sm={4}>
                    <Link
                      to='/products'
                      onClick={() => filterCategoryUpdate('Women')}
                      className='submenu-img-wrapper margin-left'
                    >
                      <div
                        className='submenu-img'
                        style={{
                          backgroundImage: `url(${wowmen2})`,
                        }}
                      ></div>
                      <button className='submenu-img-btn'>Wowmen</button>
                    </Link>
                  </Grid>
                  <Grid item sm={4}>
                    <Link
                      to='/products'
                      onClick={() => filterCategoryUpdate('Men')}
                      className='submenu-img-wrapper'
                    >
                      <div
                        className='submenu-img'
                        style={{
                          backgroundImage: `url(${men})`,
                        }}
                      ></div>
                      <button className='submenu-img-btn'>Men</button>
                    </Link>
                  </Grid>
                  <Grid item sm={4}>
                    <ul className='sub-menu small-width '>
                      {category.map((category) => {
                        return (
                          <li>
                            <Link
                              to='/products'
                              onClick={() => filterCategoryUpdate(category)}
                            >
                              {category}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </Grid>
                </Grid>
              </div>
            </li>
            <li>
              <Link
                to='/products'
                onClick={() => filterCategoryUpdate('All', true)}
                style={{ color: 'red' }}
              >
                Sale
              </Link>
              <div className='sub-menu-wrapper submenu-slide'>
                <Grid container>
                  <Grid item sm={2}>
                    <div className='sub-menu-slider-menu-wrapper'>
                      <ul className='sub-menu text-align '>
                        {category.slice(0, 5).map((category) => {
                          return (
                            <li>
                              <Link
                                to='/products'
                                onClick={() =>
                                  filterCategoryUpdate(category, true)
                                }
                              >
                                {category}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Grid>
                  <Grid item sm={10}>
                    <div className='sub-menu-slider-wrapper '>
                      <Slider {...settingSlide}>
                        {sale.map((product) => {
                          return <ProductMiniItem product={product} />;
                        })}
                      </Slider>
                    </div>
                  </Grid>
                </Grid>
              </div>
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
