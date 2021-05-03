import React, { useState, useEffect, useRef } from 'react';
import './singleProductContent.scss';
import Grid from '@material-ui/core/Grid';
import { formatPrice } from '../../utils/helper';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { logo } from '../../assets/logo.svg';
import payment from '../../assets/payment.png';
import { Link } from 'react-router-dom';
import { icons } from '../../utils/data';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../utils/helper';
import { useFilterContext } from '../../context/filter_context';
const SingleProductContent = ({ product }) => {
  const { filterBrandUpdate } = useFilterContext();
  const {
    name,
    price,
    review,
    colorImg,
    size,
    category,
    id,
    rate,
    description,
    stock,
    brand,

    AllOfImg,
  } = product;
  const [indexIMG, setIndexImg] = useState(0);
  const sliderRef = useRef();
  const [mouseDown, setMouseDown] = useState(0);
  const [mouseUp, setMouseUp] = useState(0);
  const [colorindex, setColorIndex] = useState('');

  useEffect(() => {
    document
      .querySelector('.single-product-img')
      .addEventListener('mousedown', (e) => {
        e.preventDefault();
        setMouseDown(e.x);
      });
    document
      .querySelector('.single-product-img')
      .addEventListener('mouseup', (e) => {
        setMouseUp(e.x);
      });
  }, []);
  useEffect(() => {
    if (mouseDown !== mouseUp) {
      if (mouseDown > mouseUp) {
        setIndexImg((oldindexIMG) => {
          let newindexIMG = oldindexIMG + 1;
          if (newindexIMG > AllOfImg.length - 1) {
            newindexIMG = 0;
          }
          return newindexIMG;
        });
      }
      if (mouseDown < mouseUp) {
        setIndexImg((oldindexIMG) => {
          let newindexIMG = oldindexIMG - 1;
          if (newindexIMG < 0) {
            newindexIMG = AllOfImg.length - 1;
          }
          return newindexIMG;
        });
      }
    }
    setMouseDown(0);
    setMouseUp(0);
  }, [mouseUp]);
  //set position of slider
  const handleOnClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };
  //set color follow index
  const setColorFollowIndex = () => {
    const color = colorImg.find((color) => {
      return color.indexImg.some((item) => item === indexIMG);
    }).colorName;
    console.log(color);
    setColorIndex(color);
  };
  useEffect(() => {
    handleOnClick(indexIMG - 2);
    setColorFollowIndex();
  }, [indexIMG]);

  const switchPage = (value) => {
    if (value === 'inc') {
      setIndexImg((oldindexIMG) => {
        let newindexIMG = oldindexIMG + 1;
        if (newindexIMG > AllOfImg.length - 1) {
          newindexIMG = 0;
        }
        return newindexIMG;
      });
    } else {
      setIndexImg((oldindexIMG) => {
        let newindexIMG = oldindexIMG - 1;
        if (newindexIMG < 0) {
          newindexIMG = AllOfImg.length - 1;
        }
        return newindexIMG;
      });
    }
  };

  var settingsSingleProduct = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: false,
  };

  return (
    <div className='single-product-section'>
      <div className='single-product-container section-container'>
        <div className='section-content-wrapper'>
          <Grid container className='section-grid-content-wrapper'>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className='single-product-img'>
                {AllOfImg.map((img, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        indexIMG === index
                          ? 'single-product-img__img active'
                          : 'single-product-img__img'
                      }
                      style={{
                        backgroundImage: `url(${img.thumbnails.large.url})`,
                      }}
                    ></div>
                  );
                })}
                <NextArrow onClick={() => switchPage('inc')} />
                <PrevArrow onClick={() => switchPage('dec')} />
              </div>
              <div className='single-product-thumbnails-list'>
                <Slider ref={sliderRef} {...settingsSingleProduct}>
                  {AllOfImg.map((img, index) => {
                    return (
                      <div className='single-product-thumbnails'>
                        <div
                          className={
                            index === indexIMG
                              ? 'single-product-thumbnails__img active'
                              : 'single-product-thumbnails__img'
                          }
                          style={{
                            backgroundImage: `url(${img.thumbnails.large.url})`,
                          }}
                          onClick={() =>
                            setIndexImg(() => {
                              return index;
                            })
                          }
                        ></div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className='single-product-info'>
                <div className='single-product-name-wrapper'>
                  <h3 className='single-product-name'>{name}</h3>
                </div>
                <div className='single-product-price-wrapper'>
                  <span className='single-product-price'>
                    {formatPrice(price)}
                  </span>
                  <div className='single-product-rating-wrapper'>
                    <Box component='fieldset' mb={3} borderColor='transparent'>
                      <Rating
                        name='read-only'
                        value={rate}
                        readOnly
                        size='large'
                      />
                      <span className='single-product-count-review'>
                        ({review} review)
                      </span>
                    </Box>
                  </div>
                </div>
                <div className='single-product-decription-wrapper'>
                  <p>{description}</p>
                </div>
                {colorImg.length > 1 && (
                  <div className='single-product-color-wrapper'>
                    <div className='single-product-color-title'>
                      <h4>COLOR: WHITE CREAM</h4>
                    </div>
                    <div className='product-mini-watch-list'>
                      {colorImg.map((color, index) => {
                        return (
                          <span
                            className={
                              color.colorName === colorindex
                                ? `watch-list-color active`
                                : `watch-list-color `
                            }
                            onClick={() => setIndexImg(color.indexImg[0])}
                            style={{ backgroundColor: `${color.colorCode}` }}
                            // onMouseOver={() => {
                            //   setLockImgHover(false);
                            //   setIndexImg(index);
                            // }}
                            key={index}
                          >
                            <span className='watch-list-hover-text'>
                              {color.colorName}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className='single-product-size-wrapper'>
                  <div className='single-product-size-title'>
                    <h4>SIZE: S</h4>
                  </div>
                  <div className='single-product-size'>
                    {size.map((item) => {
                      return (
                        <span
                          className={
                            item === 'L'
                              ? 'single-product-size-item active'
                              : 'single-product-size-item'
                          }
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className='single-product-cart-wrapper'>
                  {stock > 0 && (
                    <div className='mini-cart-quantity'>
                      <input
                        type='number'
                        className='mini-cart-quantity-input'
                        value='1'
                        inputmode='numeric'
                      />
                      <button className='mini-cart-minus-btn'>
                        <RemoveIcon />
                      </button>
                      <button className='mini-cart-plus-btn'>
                        <AddIcon />
                      </button>
                    </div>
                  )}
                  {stock === 0 && (
                    <div className='out-of-stock-btn-wrapper'>Out Of Stock</div>
                  )}
                  <div className='single-product-wishList-wrapper'>
                    <span className='single-product-wishList'>
                      <FavoriteBorderIcon />
                      <span className='single-product-wishList-hover-text'>
                        Browse Wishlist
                      </span>
                    </span>
                  </div>
                  {stock > 0 && (
                    <div className='add-to-cart-btn-wrapper'>
                      <button className='add-to-cart-btn button_primary'>
                        ADD TO CART
                      </button>
                    </div>
                  )}
                </div>
                <div className='single-product-payment-wrapper'>
                  <img src={payment} alt='' />
                </div>
                <div class='single-product-meta'>
                  <span class='simple-product-stock category-tag'>
                    Vendor:
                    <Link
                      to='/products'
                      onClick={() => filterBrandUpdate(brand)}
                      title=''
                    >
                      {brand}
                    </Link>
                  </span>
                  <span class='sku-wrapper'>
                    SKU:
                    <span class='sku'>{id}</span>
                  </span>
                  <span class='simple-product-stock sku-wrapper'>
                    Availability:
                    <span class='sku--blod'>
                      {stock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </span>
                  </span>
                  <span class='category-tag'>
                    Categories:
                    {category.map((item, index) => {
                      return (
                        <Link href='/products' title=''>
                          {item}
                        </Link>
                      );
                    })}
                  </span>
                </div>
                <div className='social-icon-wrapper'>
                  <div className='social-footer-container'>
                    {icons.map((icon) => {
                      return (
                        <a href='#' className={`social-icon ${icon.name}`}>
                          {icon.icon}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SingleProductContent;
