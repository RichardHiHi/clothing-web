import React from 'react';
import './cartMiniEmty.scss';
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
const CartMiniEmty = () => {
  return (
    <div className='mini-wrap-2'>
      <div class='empty-mini-cart'>
        <RemoveShoppingCartOutlinedIcon />
        <p>Your cart is empty.</p>
        <a class='link-back-to-shop' href='#'>
          <span>RETURN TO SHOP</span>
        </a>
      </div>
    </div>
  );
};

export default CartMiniEmty;
