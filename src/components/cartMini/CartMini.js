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
      <button onClick={() => miniAction('close', 'MiniCart')}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default CartMini;
