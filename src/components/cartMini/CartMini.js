import React from 'react';
import './cartMini.scss';
import { useButtonContext } from '../../context/button_context';
import RotateCloseBtn from '../rotateCloseBtn/RotateCloseBtn';

const CartMini = () => {
  const { isMiniCartOpen, miniAction } = useButtonContext();
  const action = () => {
    miniAction('close', 'MiniCart');
  };
  return (
    <div
      className={isMiniCartOpen ? 'cart-mini cart-mini-openned' : 'cart-mini'}
    >
      <div className='mini-wrap'>
        <div className=' mini-header-title'>
          <h3>SHOPPING CART</h3>
          <RotateCloseBtn action={action} />
        </div>
        <div className='mini-wrap-2'>
          <div className='content-mini-cart'></div>
          <div className='footer-mini-cart'>
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
            <button className='mini-cart-checkout-btn'>check out</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartMini;
