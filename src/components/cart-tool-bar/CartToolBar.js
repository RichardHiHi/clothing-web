import React, { useState } from 'react';
import './cartToolBar.scss';
// import Gird from '@material-ui/core/Gird';
import { Grid } from '@material-ui/core';
import { useCartContext } from '../../context/cart_context';
import { useProductContext } from '../../context/product_context';
import { formatPrice } from '../../utils/helper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const CartToolBar = () => {
  //ctb is cart-tool-bar
  const {
    singleProduct: { name, price, AllOfImg, stock },
    singleProductAction: { indexIMG, size, itemCount },
  } = useProductContext();
  console.log(AllOfImg[indexIMG]);
  const { setItemCount, setItemCountByInput } = useProductContext();
  const [alter, setAlter] = useState(false);
  const checkMaxMIN = (stock, itemCount) => {
    if (stock === itemCount + 1 || itemCount === 1) {
      setAlter(true);
      setTimeout(() => {
        setAlter(false);
      }, 500);
    }
  };
  return (
    <div className='ctb-section'>
      <div className='ctb-contain section-container'>
        <Grid container className='section-grid-content-wrapper'>
          <Grid item xs={12} sm={12} md={6}>
            <div className='ctb__info'>
              <div className='ctb__info__img'>
                <img src={AllOfImg[indexIMG].thumbnails.small.url}></img>
              </div>
              <div className='ctb__info__info'>
                <span className='ctb__info__info_name'>{name}</span>
                <span className='ctb__info__info_size'>{size}</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className='ctb__cart'>
              <span className='ctb__cart__price'>{formatPrice(price)}</span>
              <div className='ctb__cart__amount-btn'>
                <div
                  className={
                    alter ? 'mini-cart-quantity maximum' : 'mini-cart-quantity'
                  }
                >
                  <input
                    type='number'
                    className='mini-cart-quantity-input'
                    value={itemCount}
                    onChange={setItemCountByInput}
                  />
                  <button className='mini-cart-minus-btn'>
                    <RemoveIcon
                      onClick={() => {
                        setItemCount('dec');
                        checkMaxMIN(stock, itemCount);
                      }}
                    />
                  </button>
                  <button
                    className='mini-cart-plus-btn'
                    onClick={() => {
                      setItemCount('inc');
                      checkMaxMIN(stock, itemCount);
                    }}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
              <button className='ctb__cart__amount-btn'>ADD TO CART</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CartToolBar;
