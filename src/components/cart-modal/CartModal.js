import React, { useState, useEffect } from 'react';
import './cartModal.scss';
import { useButtonContext } from '../../context/button_context';
import { useProductContext } from '../../context/product_context';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useCartContext } from '../../context/cart_context';
import { formatPrice } from '../../utils/helper';
import RotateCloseBtn from '../rotateCloseBtn/RotateCloseBtn';

const CartModal = () => {
  const { miniAction, isCartModalOpen, isCartEditModalOpen, currentPage } =
    useButtonContext();
  const [alter, setAlter] = useState(false);
  const { addToCart } = useCartContext();

  const {
    singleProduct: { name, price, colorImg, size, id, stock, AllOfImg },
    singleProductAction: { indexIMG, idCart },
    switchIMG,
  } = useProductContext();

  const {
    getSingleProduct,
    singleProductAction: { size: sizeAction, itemCount },
    setSingleProductSize,
    setItemCount,
    setItemCountByInput,
  } = useProductContext();
  let colorFollowIndexIMG = 'none';
  if (colorImg) {
    colorFollowIndexIMG = colorImg.find((item) => {
      return item.indexImg.some((i) => i === indexIMG);
    }).colorName;
  }
  useEffect(() => {
    if (stock === itemCount) {
      setAlter(true);
      // setTimeout(() => {
      //   setAlter(false);
      // }, 200);
    } else {
      setAlter(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemCount]);
  const action = () => {
    miniAction('close', 'CartModal');
  };
  return (
    <>
      <div
        className={
          isCartModalOpen ? 'cart-modal__overlay' : 'cart-modal__overlay hidden'
        }
        onClick={() => miniAction('close', 'CartModal')}
      ></div>
      <div
        className={
          isCartModalOpen ? 'cart-modal-section' : 'cart-modal-section hidden'
        }
      >
        <div className='cart-modal-container'>
          <div className='ctb__info'>
            <div className='ctb__info__img'>
              {AllOfImg && (
                <img src={AllOfImg[indexIMG].thumbnails.large.url} alt=''></img>
              )}
            </div>
            <div className='ctb__info__info'>
              <span className='ctb__info__info_name'>{name}</span>
              <span className='price'>{formatPrice(price)}</span>
            </div>
          </div>
          <div className='single-product-size-wrapper'>
            <div className='single-product-size-title'>
              <h4>SIZE: {sizeAction}</h4>
            </div>
            {size && (
              <div className='single-product-size'>
                {size.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={
                        item === sizeAction
                          ? 'single-product-size-item active'
                          : 'single-product-size-item'
                      }
                      onClick={() => setSingleProductSize(item)}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
          <div className='single-product-color-wrapper'>
            <div className='single-product-color-title'>
              <h4>COLOR: {colorFollowIndexIMG}</h4>
            </div>
            {colorImg && (
              <div className='product-mini-watch-list'>
                {colorImg.map((color, index) => {
                  return (
                    <span
                      className={
                        color.colorName === colorFollowIndexIMG
                          ? `watch-list-color active`
                          : `watch-list-color `
                      }
                      onClick={() => switchIMG(color.indexImg[0])}
                      style={{ backgroundColor: `${color.colorCode}` }}
                      // onMouseOver={() => {
                      //   setLockImgHover(false);
                      //   setIndexImg(index);
                      // }}
                      key={index}
                    >
                      <span className='watch-list-hover-text'>
                        {color.colorName}
                      </span>
                    </span>
                  );
                })}
              </div>
            )}
          </div>
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
                }}
              />
            </button>
            <button
              className='mini-cart-plus-btn'
              onClick={() => {
                setItemCount('inc');
              }}
            >
              <AddIcon />
            </button>
          </div>
          <div className='add-to-cart-btn-wrapper'>
            {isCartEditModalOpen ? (
              <button
                className='add-to-cart-btn button_primary'
                onClick={() => {
                  addToCart(idCart);
                  if (currentPage !== '/cart') {
                    miniAction('open', 'MiniCart');
                  }
                  miniAction('close', 'CartModal');
                }}
              >
                ADD TO CART close
              </button>
            ) : (
              <button
                className='add-to-cart-btn button_primary'
                onClick={() => {
                  addToCart();
                  miniAction('open', 'MiniCart');
                  miniAction('close', 'CartModal');
                }}
              >
                ADD TO CART open
              </button>
            )}
          </div>
          <div className='mini-search-footer'>
            <div>
              <Link
                className='link-to-all-product-btn'
                to={`/singleProduct`}
                onClick={() => {
                  getSingleProduct(id);
                  miniAction('close', 'CartModal');
                }}
              >
                View full details
              </Link>
            </div>
            <div className='arrow-icon'>
              <ArrowForwardIcon />
            </div>
          </div>
          <RotateCloseBtn action={action} />
        </div>
      </div>
    </>
  );
};

export default CartModal;
