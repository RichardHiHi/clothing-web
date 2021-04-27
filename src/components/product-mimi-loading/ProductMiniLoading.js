import React from 'react';
import './productMiniLoading.scss';
import { formatPrice } from '../../utils/helper';
import LoaddingImg from '../loadding-img/LoaddingImg';
import { Skeleton } from '@material-ui/lab';
const ProductMiniLoading = () => {
  return (
    <div className='mini-product-item'>
      <div className='mini-product-img-container'>
        <a href='#' className='mini-product-img-wrapper'>
          <LoaddingImg classImg={'mini-product-img'} />
        </a>
      </div>
      <div className='mini-product-info'>
        <h3 className='mini-product-title'>
          <Skeleton width={140} />
          {/* <a href='#'>Ultraboost DNA</a>{' '} */}
        </h3>
        <span className='mini-product-price'>
          <Skeleton width={80} />
          <Skeleton width={40} />
          {/* <del>
            <span className='money'>{formatPrice(3333333)} </span>
          </del>
          <ins>
            <span className='money'>{formatPrice(3333333)} </span>
          </ins> */}
        </span>
      </div>
    </div>
  );
};

export default ProductMiniLoading;
