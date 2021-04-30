import React from 'react';
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

const SingleProductContent = ({ product }) => {
  const { name, price, review, colorImg, size } = product;
  return (
    <div className='single-product-section'>
      <div className='single-product-container section-container'>
        <div className='section-content-wrapper'>
          <Grid container className='section-grid-content-wrapper'>
            <Grid item sm={6} md={6} lg={6}>
              <div className='single-product-img'></div>
            </Grid>
            <Grid item sm={6} md={6} lg={6}>
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
                      <Rating name='read-only' value={2} readOnly />
                      <span>({review} review)</span>
                    </Box>
                  </div>
                  <div className='single-product-color-wrapper'>
                    <div className='single-product-color-title'>
                      <h4>COLOR: WHITE CREAM</h4>
                    </div>
                    {colorImg.length > 1 && (
                      <div className='product-mini-watch-list'>
                        {colorImg.map((color, index) => {
                          return (
                            <span
                              className='watch-list-color'
                              // className={
                              //   index === indexImg
                              //     ? `watch-list-color watch-list-color-activated`
                              //     : `watch-list-color `
                              // }
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
                    )}
                  </div>
                  <div className='single-product-size-wrapper'>
                    <div className='single-product-size-title'>
                      <h4>SIZE: S</h4>
                    </div>
                    <div className='single-product-size'>
                      {size.map((item) => {
                        return (
                          <span className='single-product-size-item'>
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className='single-product-cart-wrapper'>
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
                    <div className='add-to-cart-btn-wrapper'>
                      <button className='add-to-cart-btn button_primary'>
                        ADD TO CART
                      </button>
                    </div>
                    <div className='single-product-wishList-wrapper'>
                      <span className='single-product-wishList'>
                        <FavoriteBorderIcon />
                      </span>
                    </div>
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
