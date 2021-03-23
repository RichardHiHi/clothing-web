import React from 'react';
import './cartMini.scss';
import { useButtonContext } from '../../context/button_context';
import CloseIcon from '@material-ui/icons/Close';

const CartMini = () => {
  const { isMiniCartOpen, miniAction } = useButtonContext();
  return (
    <div
      className={isMiniCartOpen ? 'cart-mini cart-mini-openned' : 'cart-mini'}
    >
      <button
        className='btn-rotate'
        onClick={() => miniAction('close', 'MiniCart')}
      >
        <div className='line-1'>
          <div className='line-2'></div>
        </div>
      </button>
    </div>
  );
};

export default CartMini;
