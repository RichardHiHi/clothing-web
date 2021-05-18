import React from 'react';
import trust_img2_360x from '../../assets/trust_img2_360x.png';
import './cartMiniProduct.scss';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useButtonContext } from '../../context/button_context';
import { useCartContext } from '../../context/cart_context';
import { useProductContext } from '../../context/product_context';
import { formatPrice } from '../../utils/helper';
import { useUserContext } from '../../context/user_context';

const CartMiniProduct = ({ isMiniCartOpen }) => {
  const { getSingleProduct, switchIMG, setIdCart, cleartSingleProductAction } =
    useProductContext();
  const { miniAction } = useButtonContext();
  const { amountTotal } = useCartContext();
  const {
    cart,
    clearCart,
    toggleItemCart,
    setItemCartByInput,
    removeItemCart,
  } = useCartContext();
  const mutipleAction = (id, indexFollowColor) => {
    getSingleProduct(id);
    miniAction('close', 'MiniCart');
    switchIMG(indexFollowColor);
  };
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <div className='mini-wrap-2'>
      <div className='content-mini-cart'>
        <div className='mini-cart-list-wrapper'>
          <ul className='mini-cart-list'>
            {cart.map((cartItem, index) => {
              const {
                colorIndex,
                size,
                idCart,
                itemCount,
                singleProduct: { colorImg, id, name, onSale, price },
              } = cartItem;
              //get first img of color
              let imgFollowColor = colorImg.find(
                (item) => item.colorName === colorIndex
              ).img[0].thumbnails.large.url;
              //get first index of array of img
              const indexFollowColor = colorImg.find(
                (item) => item.colorName === colorIndex
              ).indexImg[0];
              return (
                <li key={index}>
                  <Link
                    to='/singleProduct'
                    onClick={() => mutipleAction(id, indexFollowColor)}
                    className='mini-cart-img'
                  >
                    <img src={imgFollowColor} alt='' />
                  </Link>
                  <div className='mini-cart-info'>
                    <Link
                      to='/singleProduct'
                      onClick={() => mutipleAction(id, indexFollowColor)}
                      className='mini-cart-name-product'
                    >
                      {name}
                    </Link>
                    <div className='mini-cart-meta'>
                      <p className='mini-cart-meta-color'>
                        {colorIndex} / {size}
                      </p>
                      <div className='mini-cart-meta-price'>
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
                    </div>
                    <div className='mini-cart-actions'>
                      <div className='mini-cart-quantity'>
                        <input
                          type='number'
                          className='mini-cart-quantity-input'
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
                      <div className='wrapper-btn-mini-cart'>
                        <button
                          className='mini-cart-edit-btn'
                          onClick={() => {
                            getSingleProduct(id);
                            cleartSingleProductAction();
                            setIdCart(idCart);
                            miniAction('open', 'CartEditModal');
                            miniAction('open', 'CartModal');
                          }}
                        >
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
                  </div>
                </li>
              );
            })}
            <div className='mini-cart-list__btn'>
              <button
                className='sc-content-clear__btn'
                onClick={() => {
                  clearCart();
                }}
              >
                CLEAR CART
              </button>
            </div>
          </ul>
        </div>
      </div>
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
            <span>{formatPrice(amountTotal)}</span>
          </div>
        </div>
        <p>Taxes, shipping and discounts codes calculated at checkout</p>
        <Link
          to='/cart'
          className='view-mini-cart-link'
          onClick={() => miniAction('close', 'MiniCart')}
        >
          VIEW CART
        </Link>
        {myUser ? (
          <button className='button_primary'>CHECK OUT</button>
        ) : (
          <button className='button_primary' onClick={loginWithRedirect}>
            LOGIN
          </button>
        )}
        <img src={trust_img2_360x} alt='' />
      </div>
    </div>
  );
};

export default CartMiniProduct;
