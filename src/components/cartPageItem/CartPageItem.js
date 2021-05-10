import React from 'react';
import './cartPageItem.scss';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { formatPrice } from '../../utils/helper';
import Grid from '@material-ui/core/Grid';
import { useCartContext } from '../../context/cart_context';

const CartPageItem = ({ cartItem, getSingleProduct }) => {
  const {
    toggleItemCart,
    setItemCartByInput,
    removeItemCart,
  } = useCartContext();
  const {
    colorIndex,
    size,
    idCart,
    itemCount,
    singleProduct: { colorImg, id, name, onSale, price },
  } = cartItem;
  //
  const imgFollowColor = colorImg.find((item) => item.colorName === colorIndex)
    .img[0].thumbnails.large.url;
  //sc is shopping cart
  return (
    <Grid container>
      <Grid item xs={6} sm={5} className='sc-item flex-left'>
        <Link
          to='/single-product'
          onclick={() => getSingleProduct(id)}
          className='sc-item__img'
        >
          <div
            className='sc-item-img__img'
            style={{ backgroundImage: `url(${imgFollowColor})` }}
          ></div>
        </Link>
        <div className='sc-item__info'>
          <Link
            to='/single-product'
            onclick={() => getSingleProduct(id)}
            className='sc-item__info__name'
          >
            {name}
          </Link>
          <div className='sc-item__color-size'>
            <p className='sc__meta__color'>
              color: <span>{colorIndex}</span>
            </p>
            <p className='sc__meta__size'>
              size: <span>{size}</span>
            </p>
          </div>
          <div className='wrapper-btn-mini-cart'>
            <button className='mini-cart-edit-btn'>
              <span>Edit item</span>
              <AiOutlineEdit />
            </button>
            <button
              className='mini-cart-delete-btn'
              onClick={() => removeItemCart(idCart)}
            >
              <span>Remove this item</span>
              <BsTrash />
            </button>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} sm={3} className='sc-item'>
        <div className='sc-item__meta'>
          {onSale ? (
            <div className='sc-item__meta__price'>
              <del>{formatPrice(price)}</del>
              <ins>{formatPrice(price * onSale)}</ins>
            </div>
          ) : (
            <div className='sc-item__meta__price'>
              <span>{formatPrice(price)}</span>
            </div>
          )}
        </div>
      </Grid>
      <Grid item xs={6} sm={2} className='sc-item'>
        <div className='mini-cart-actions'>
          <div className='mini-cart-quantity'>
            <input
              type='number'
              className='mini-cart-quantity-input'
              data-idCart={idCart}
              value={itemCount}
              onChange={setItemCartByInput}
            />
            {itemCount !== 1 ? (
              <button
                className='mini-cart-minus-btn'
                onClick={() => toggleItemCart(idCart, 'dec')}
              >
                <RemoveIcon />
              </button>
            ) : (
              <button
                className='mini-cart-minus-btn'
                onClick={() => {
                  toggleItemCart(idCart, 'dec');
                  removeItemCart(idCart);
                }}
              >
                <BsTrash />
              </button>
            )}
            <button
              className='mini-cart-plus-btn'
              onClick={() => toggleItemCart(idCart, 'inc')}
            >
              <AddIcon />
            </button>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} sm={2} className='sc-item flex-right'>
        <span className='sc-item__price-total'>
          {formatPrice(price * itemCount)}
        </span>
      </Grid>
    </Grid>
  );
};

export default CartPageItem;
