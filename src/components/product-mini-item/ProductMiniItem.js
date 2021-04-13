import React from 'react';
import './productMiniItem.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ProductMiniItem = ({ product }) => {
  const { colorImg, size, onNew, onSale } = product;
  return (
    <div className='product-item'>
      <div className='product-img-container'>
        <a href='#' className='product-img-wrapper'>
          <div
            className='product-img'
            style={{
              backgroundImage: `url(${colorImg[0].img[1].thumbnails.large.url})`,
            }}
          ></div>
        </a>
        <div className='product-img-wrapper_hover'>
          <div
            className='product-img_hover'
            style={{
              backgroundImage: `url(${colorImg[0].img[0].thumbnails.large.url})`,
            }}
          ></div>
        </div>
        <div className='product-size-contain'>
          {size && <p>{size.join()}</p>}
        </div>
        <div className='product-wishlist-container'>
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
      <span className='label-product-container'>
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

      <div className='product-info'></div>
    </div>
  );
};

export default ProductMiniItem;
