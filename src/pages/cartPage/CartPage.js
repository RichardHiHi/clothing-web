import React from 'react';
import './cartPage.scss';
import { SingleProductHero } from '../../components';
import hero from '../../assets/hero.jpg';
import Grid from '@material-ui/core/Grid';
import { useCartContext } from '../../context/cart_context';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { useProductContext } from '../../context/product_context';
import { formatPrice } from '../../utils/helper';
const CartPage = () => {
  const { cart } = useCartContext();
  const { getSingleProduct } = useProductContext();
  return (
    <div className='content'>
      <div className='hero-section margin'>
        <div className='hero-img' style={{ backgroundImage: `url(${hero})` }}>
          <span>SHOPPING CART</span>
        </div>
      </div>
      <div className='shopping-cart-section'>
        <div className='shopping-cart-container section-container'>
          <div className='cart-header'>
            <Grid container>
              <Grid item lg={5}>
                PRODUCT
              </Grid>
              <Grid item lg={3}>
                PRICE
              </Grid>
              <Grid item lg={2}>
                QUANTITY
              </Grid>
              <Grid item lg={2}>
                TOTAL
              </Grid>
            </Grid>
          </div>
          <div className='shopping-cart-content'>
            {cart.map((cartItem, index) => {
              const {
                colorIndex,
                size,
                itemCount,
                singleProduct: { colorImg, id, name, onSale, price },
              } = cartItem;

              const imgFollowColor = colorImg.find(
                (item) => item.colorName === colorIndex
              ).img[0].thumbnails.large.url;
              //sc is shopping cart
              return (
                <Grid container key={index}>
                  <Grid item lg={5}>
                    <Link
                      to='/single-product'
                      onclick={() => getSingleProduct(id)}
                      className='sc-item__img'
                    >
                      <div
                        className='sc-item-img__img'
                        style={{ backgroundImage: imgFollowColor }}
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
                  </Grid>
                  <Grid item lg={3}>
                    <div className='sc__meta'>
                      <p className='sc__meta__color'>
                        {colorIndex} / {size}
                      </p>
                      <div className='sc__meta__price'>
                        <del>{formatPrice(price)}</del>
                        <ins>{formatPrice(price * onSale)}</ins>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={2}>
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
                    </div>
                  </Grid>
                  <Grid item lg={2}>
                    {formatPrice(price * itemCount)}
                  </Grid>
                </Grid>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
