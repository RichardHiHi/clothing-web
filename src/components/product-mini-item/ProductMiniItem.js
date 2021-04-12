import React from 'react';
import './productMiniItem.scss';
import { GrFavorite } from 'react-icons/gr';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ProductMiniItem = ({ product }) => {
  const { colorImg, size } = product;

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
          <p>{size.join()}</p>
        </div>
        <div className='product-wishlist-container'>
          <a href='#' className='wishList-link wishList-link-activated'>
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

      <div className='product-info'></div>
    </div>
  );
};

export default ProductMiniItem;
