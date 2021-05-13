import React, { useState } from 'react';
import './cartToolBar.scss';
// import Gird from '@material-ui/core/Gird';
import { useCartContext } from '../../context/cart_context';
import { useProductContext } from '../../context/product_context';
import { formatPrice, scrollToTop } from '../../utils/helper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useButtonContext } from '../../context/button_context';
const CartToolBar = ({ hiddenToolbar }) => {
  //ctb is cart-tool-bar
  const {
    singleProduct: { name, price, AllOfImg, stock, colorImg },
    singleProductAction: { indexIMG, size, itemCount },
  } = useProductContext();
  const { addToCart } = useCartContext();
  const { miniAction } = useButtonContext();

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
  let colorFollowIndexIMG = 'none';
  if (colorImg) {
    colorFollowIndexIMG = colorImg.find((item) => {
      return item.indexImg.some((i) => i === indexIMG);
    }).colorName;
  }
  return (
    <div className={hiddenToolbar ? 'ctb-section hidden' : 'ctb-section'}>
      <div className='ctb-contain section-container'>
        <div className='ctb__info'>
          <div className='ctb__info__img'>
            {AllOfImg && (
              <img
                src={AllOfImg[indexIMG].thumbnails.large.url}
                alt='empty'
              ></img>
            )}
          </div>
          <div className='ctb__info__info'>
            <span className='ctb__info__info_name'>{name}</span>
            {colorImg && (
              <span
                className='ctb__info__info_size'
                onClick={() => scrollToTop(0)}
              >
                {size}/{colorFollowIndexIMG}
              </span>
            )}
          </div>
        </div>
        {/* cart */}
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
          <button
            className='ctb__cart__add-btn'
            onClick={() => {
              addToCart();
              miniAction('open', 'MiniCart');
              miniAction('close', 'SingleProductModal');
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartToolBar;
