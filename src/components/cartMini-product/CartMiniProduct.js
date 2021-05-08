import React from 'react';
import trust_img2_360x from '../../assets/trust_img2_360x.png';
import './cartMiniProduct.scss';
import prch20_2 from '../../assets/prch20_2.jpg';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useButtonContext } from '../../context/button_context';

const CartMiniProduct = ({ isMiniCartOpen }) => {
  const { miniAction } = useButtonContext();
  return (
    <div className='mini-wrap-2'>
      <div className='content-mini-cart'>
        <div className='mini-cart-list-wrapper'>
          <ul className='mini-cart-list'>
            <li>
              <a href='#' className='mini-cart-img'>
                <img src={prch20_2} alt='' />
              </a>
              <div className='mini-cart-info'>
                <a href='#' className='mini-cart-name-product'>
                  cymbal
                </a>
                <div className='mini-cart-meta'>
                  <p className='mini-cart-meta-color'>White Cream / S</p>
                  <div className='mini-cart-meta-price'>
                    <del>$60.00</del>
                    <ins>$45.00</ins>
                  </div>
                </div>
                <div className='mini-cart-actions'>
                  <div className='mini-cart-quantity'>
                    <input
                      type='number'
                      className='mini-cart-quantity-input'
                      value='1'
                    />
                    <button className='mini-cart-minus-btn'>
                      <RemoveIcon />
                    </button>
                    <button className='mini-cart-plus-btn'>
                      <AddIcon />
                    </button>
                  </div>
                  <div className='wrapper-btn-mini-cart'>
                    <button className='mini-cart-edit-btn'>
                      <span>Edit item</span>
                      <AiOutlineEdit />
                    </button>
                    <button className='mini-cart-delete-btn'>
                      <span>Remove this item</span>
                      <BsTrash />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href='#' className='mini-cart-img'>
                <img src={prch20_2} alt='' />
              </a>
              <div className='mini-cart-info'>
                <a href='#' className='mini-cart-name-product'>
                  cymbal
                </a>
                <div className='mini-cart-meta'>
                  <p className='mini-cart-meta-color'>White Cream / S</p>
                  <div className='mini-cart-meta-price'>
                    <del>$60.00</del>
                    <ins>$45.00</ins>
                  </div>
                </div>
                <div className='mini-cart-actions'>
                  <div className='mini-cart-quantity'>
                    <input
                      type='number'
                      className='mini-cart-quantity-input'
                      value='1'
                    />
                    <button className='mini-cart-minus-btn'>
                      <RemoveIcon />
                    </button>
                    <button className='mini-cart-plus-btn'>
                      <AddIcon />
                    </button>
                  </div>
                  <div className='wrapper-btn-mini-cart'>
                    <button className='mini-cart-edit-btn'>
                      <span>Edit item</span>
                      <AiOutlineEdit />
                    </button>
                    <button className='mini-cart-delete-btn'>
                      <span>Remove this item</span>
                      <BsTrash />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href='#' className='mini-cart-img'>
                <img src={prch20_2} alt='' />
              </a>
              <div className='mini-cart-info'>
                <a href='#' className='mini-cart-name-product'>
                  cymbal
                </a>
                <div className='mini-cart-meta'>
                  <p className='mini-cart-meta-color'>White Cream / S</p>
                  <div className='mini-cart-meta-price'>
                    <del>$60.00</del>
                    <ins>$45.00</ins>
                  </div>
                </div>
                <div className='mini-cart-actions'>
                  <div className='mini-cart-quantity'>
                    <input
                      type='number'
                      className='mini-cart-quantity-input'
                      value='1'
                    />
                    <button className='mini-cart-minus-btn'>
                      <RemoveIcon />
                    </button>
                    <button className='mini-cart-plus-btn'>
                      <AddIcon />
                    </button>
                  </div>
                  <div className='wrapper-btn-mini-cart'>
                    <button className='mini-cart-edit-btn'>
                      <span>Edit item</span>
                      <AiOutlineEdit />
                    </button>
                    <button className='mini-cart-delete-btn'>
                      <span>Remove this item</span>
                      <BsTrash />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href='#' className='mini-cart-img'>
                <img src={prch20_2} alt='' />
              </a>
              <div className='mini-cart-info'>
                <a href='#' className='mini-cart-name-product'>
                  cymbal
                </a>
                <div className='mini-cart-meta'>
                  <p className='mini-cart-meta-color'>White Cream / S</p>
                  <div className='mini-cart-meta-price'>
                    <del>$60.00</del>
                    <ins>$45.00</ins>
                  </div>
                </div>
                <div className='mini-cart-actions'>
                  <div className='mini-cart-quantity'>
                    <input
                      type='number'
                      className='mini-cart-quantity-input'
                      value='1'
                    />
                    <button className='mini-cart-minus-btn'>
                      <RemoveIcon />
                    </button>
                    <button className='mini-cart-plus-btn'>
                      <AddIcon />
                    </button>
                  </div>
                  <div className='wrapper-btn-mini-cart'>
                    <button className='mini-cart-edit-btn'>
                      <span>Edit item</span>
                      <AiOutlineEdit />
                    </button>
                    <button className='mini-cart-delete-btn'>
                      <span>Remove this item</span>
                      <BsTrash />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href='#' className='mini-cart-img'>
                <img src={prch20_2} alt='' />
              </a>
              <div className='mini-cart-info'>
                <a href='#' className='mini-cart-name-product'>
                  cymbal
                </a>
                <div className='mini-cart-meta'>
                  <p className='mini-cart-meta-color'>White Cream / S</p>
                  <div className='mini-cart-meta-price'>
                    <del>$60.00</del>
                    <ins>$45.00</ins>
                  </div>
                </div>
                <div className='mini-cart-actions'>
                  <div className='mini-cart-quantity'>
                    <input
                      type='number'
                      className='mini-cart-quantity-input'
                      value='1'
                    />
                    <button className='mini-cart-minus-btn'>
                      <RemoveIcon />
                    </button>
                    <button className='mini-cart-plus-btn'>
                      <AddIcon />
                    </button>
                  </div>
                  <div className='wrapper-btn-mini-cart'>
                    <button className='mini-cart-edit-btn'>
                      <span>Edit item</span>
                      <AiOutlineEdit />
                    </button>
                    <button className='mini-cart-delete-btn'>
                      <span>Remove this item</span>
                      <BsTrash />
                    </button>
                  </div>
                </div>
              </div>
            </li>
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
            <span>$100.00</span>
          </div>
        </div>
        <p>Taxes, shipping and discounts codes calculated at checkout</p>
        <Link
          to='cart'
          className='view-mini-cart-link'
          onClick={() => miniAction('close', 'MiniCart')}
        >
          view cart
        </Link>
        <button className='button_primary'>check out</button>
        <img src={trust_img2_360x} alt='' />
      </div>
    </div>
  );
};

export default CartMiniProduct;
