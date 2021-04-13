import React, { useState } from 'react';
import './productMiniItem.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { formatPrice } from '../../utils/helper';

const ProductMiniItem = ({ product }) => {
  const { colorImg, size, onNew, onSale, name, price } = product;
  const [indexImg, setIndexImg] = useState(0);
  const [lockImgHover, setLockImgHover] = useState(true);
  return (
    <div className='mini-product-item'>
      <div className='mini-product-img-container'>
        <a href='#' className='mini-product-img-wrapper'>
          <div
            className={
              lockImgHover ? `mini-product-img` : `mini-product-img lock-scale`
            }
            style={{
              backgroundImage: `url(${colorImg[indexImg].img[1].thumbnails.large.url})`,
            }}
          ></div>
        </a>
        <div className='mini-product-img-wrapper_hover'>
          {lockImgHover && (
            <div
              className='mini-product-img_hover'
              style={{
                backgroundImage: `url(${colorImg[0].img[0].thumbnails.large.url})`,
              }}
            ></div>
          )}
        </div>
        <div className='mini-product-size-contain'>
          {size && <p>{size.join()}</p>}
        </div>
        <div className='mini-product-wishlist-container'>
          <a href='#' className='wishList-link'>
            {/*
              wish list is activated
             wishList-link-activated 
             */}
            <div className='wish-list'>
              <FavoriteBorderIcon />
              <span className='hoverText'>Add to Wishlist</span>
            </div>
            <div className='wish-list-activated'>
              <span className='hoverText'>Add to Wishlist</span>
              <FavoriteIcon />
            </div>
          </a>
        </div>
      </div>
      <span className='label-mini-product-container'>
        {onNew && (
          <span className='onNew-lable'>
            <span>New</span>
          </span>
        )}
        {onSale && (
          <span className='onSale-lable'>
            <span>-{onSale * 100}%</span>
          </span>
        )}
      </span>
      <div className='mini-product-info'>
        <h3 className='mini-product-title'>
          <a href='#'>{name}</a>{' '}
        </h3>
        <span className='mini-product-price'>
          {!onSale && <span className='money'>{formatPrice(price)}</span>}
          {onSale && (
            <>
              <del>
                <span className='money'>{formatPrice(price)} </span>
              </del>
              <ins>
                <span className='money'>
                  {formatPrice(price * (1 - onSale))}{' '}
                </span>
              </ins>
            </>
          )}
        </span>
        {colorImg.length > 1 && (
          <div className='product-mini-watch-list'>
            {colorImg.map((color, index) => {
              return (
                <span
                  className={
                    index === indexImg
                      ? `watch-list-color watch-list-color-activated`
                      : `watch-list-color `
                  }
                  style={{ backgroundColor: `${color.colorCode}` }}
                  onMouseOver={() => {
                    setLockImgHover(false);
                    setIndexImg(index);
                  }}
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
    </div>
  );
};

export default ProductMiniItem;
