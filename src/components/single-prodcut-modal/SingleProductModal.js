import React, { useState, useEffect } from 'react';
import './singleProductModal.scss';
import { useButtonContext } from '../../context/button_context';
import Grid from '@material-ui/core/Grid';
import SingleProductImg from '../single-product-img/SingleProductImg';
import { useProductContext } from '../../context/product_context';
import SingleProductInfo from '../single-product-info/SingleProductInfo';
import RotateCloseBtn from '../rotateCloseBtn/RotateCloseBtn';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { NextArrow, PrevArrow } from '../../utils/helper';
import { useCartContext } from '../../context/cart_context';

const SingleProductModal = () => {
  const { miniAction, isSingleProductModalOpen } = useButtonContext();
  const { addToCartTSP } = useCartContext();
  const {
    tempSingleProduct: product,
    getSingleProduct,
    tempSingleProductAction: { indexIMG, colorIndex },
    switchIMG,
  } = useProductContext();
  const { AllOfImg, colorImg } = product;
  const [mouseDown, setMouseDown] = useState(0);
  const [mouseUp, setMouseUp] = useState(0);

  useEffect(() => {
    if (document.querySelector('.single-product-img-modal')) {
      document
        .querySelector('.single-product-img-modal')
        .addEventListener('mousedown', (e) => {
          e.preventDefault();
          setMouseDown(e.x);
        });
      document
        .querySelector('.single-product-img-modal')
        .addEventListener('mouseup', (e) => {
          setMouseUp(e.x);
        });
    }
  }, []);
  useEffect(() => {
    if (mouseDown !== mouseUp) {
      if (mouseDown > mouseUp) {
        switchIMG('inc');
      }
      if (mouseDown < mouseUp) {
        switchIMG('dec');
      }
    }
    setMouseDown(0);
    setMouseUp(0);
  }, [mouseUp]);

  const actiona = () => {
    miniAction('close', 'SingleProductModal');
  };

  return (
    //sp is single product
    <div
      className={
        isSingleProductModalOpen
          ? 'sp-modal-section active'
          : 'sp-modal-section'
      }
    >
      {Object.keys(product).length > 0 && (
        <div className='sp-modal-content'>
          <div className='sp-modal-btn--close'>
            <RotateCloseBtn action={actiona} />
          </div>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6} className='sp-modal_IMG'>
              <div className='single-product-img-modal'>
                {AllOfImg &&
                  AllOfImg.map((img, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          indexIMG === index
                            ? 'single-product-img-modal__img active'
                            : 'single-product-img-modal__img'
                        }
                        style={{
                          backgroundImage: `url(${img.thumbnails.large.url})`,
                        }}
                      ></div>
                    );
                  })}
                <NextArrow onClick={() => switchIMG('inc')} />
                <PrevArrow onClick={() => switchIMG('dec')} />
              </div>
              {product.AllOfImg && (
                <div className='slide-dot-button-container'>
                  {product.AllOfImg.map((a, index) => {
                    return (
                      <button
                        key={index}
                        className={
                          indexIMG === index ? 'slide-dot-btn-actived' : null
                        }
                        onClick={() => switchIMG(index)}
                      ></button>
                    );
                  })}
                </div>
              )}
            </Grid>
            <Grid className='sp-info-wrapper' item xs={12} sm={6} md={6} lg={6}>
              <div className='sp-info-content'>
                {product && (
                  <SingleProductInfo
                    {...product}
                    colorIndex={colorIndex}
                    switchIMG={switchIMG}
                    addToCart={addToCartTSP}
                  />
                )}
                <div className='mini-search-footer'>
                  <div>
                    <Link
                      className='link-to-all-product-btn'
                      to={`/singleProduct/miniSearch/`}
                      onClick={() => {
                        getSingleProduct(product.id);
                        miniAction('close', 'SingleProductModal');
                      }}
                    >
                      View full details
                    </Link>
                  </div>
                  <div className='arrow-icon'>
                    <ArrowForwardIcon />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default SingleProductModal;
