import React from 'react';
import trust_img2_360x from '../../assets/trust_img2_360x.png';
import './cartMiniProduct.scss';
const CartMiniProduct = ({ isMiniCartOpen }) => {
  return (
    <div className='mini-wrap-2'>
      <div className='content-mini-cart'></div>
      <div
        className={
          isMiniCartOpen ? 'footer-mini-cart open ' : 'footer-mini-cart '
        }
      >
        <div className='footer-mini-cart-total-wrapper'>
          <div className='footer-mini-cart-total'>
            <strong>Subtotal:</strong>
          </div>
          <div className='footer-mini-cart-price'>
            <span>$100.00</span>
          </div>
        </div>
        <p>Taxes, shipping and discounts codes calculated at checkout</p>
        <a href='#' className='view-mini-cart-link'>
          view cart
        </a>
        <button className='button_primary'>check out</button>
        <img src={trust_img2_360x} alt='' />
      </div>
    </div>
  );
};

export default CartMiniProduct;
