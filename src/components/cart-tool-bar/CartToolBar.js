import React from 'react';
import './cartToolBar.scss';
import Gird from '@material-ui/core/Gird';
import { useCartContext } from '../../context/cart_context';
import { useProductContext } from '../../context/product_context';
const CartToolBar = () => {
  //ctb is cart-tool-bar
  const {
    singleProduct: { name },
    singleProductAction: { colorIndex, size, itemCount },
  } = useProductContext();
  return (
    <div className='ctb-section'>
      <div className='ctb-contain section-container'>
        <Gird container className='section-grid-content-wrapper'>
          <Grid item xs={12} sm={12} md={6}>
            <div className='ctb__info'>
              <div className='ctb__info__img'></div>
              <div className='ctb__info__info'>
                <span className='ctb__info__info_name'></span>
                <span className='ctb__info__info_size'></span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className='ctb__cart'></div>
          </Grid>
        </Gird>
      </div>
    </div>
  );
};

export default CartToolBar;
