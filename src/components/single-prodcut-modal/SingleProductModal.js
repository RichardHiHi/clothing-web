import React, { useState, useEffect } from 'react';
import './singleProductModal.scss';
import { useButtonContext } from '../../context/button_context';
import Grid from '@material-ui/core/Grid';
// import SingleProductImg from '../single-product-img/SingleProductImg';
import { useProductContext } from '../../context/product_context';
// import SingleProductInfo from '../single-product-info/SingleProductInfo';
import RotateCloseBtn from '../rotateCloseBtn/RotateCloseBtn';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { NextArrow, PrevArrow } from '../../utils/helper';

const SingleProductModal = () => {
  const { miniAction, isSingleProductModalOpen } = useButtonContext();
  const { singleProduct: product, getSingleProduct } = useProductContext();
  const { AllOfImg, colorImg } = product;
  const [indexIMG, setIndexImg] = useState(0);
  const [colorindex, setColorIndex] = useState('');
  const [mouseDown, setMouseDown] = useState(0);
  const [mouseUp, setMouseUp] = useState(0);

  useEffect(() => {
    document
      .querySelector('.single-product-img')
      .addEventListener('mousedown', (e) => {
        e.preventDefault();
        setMouseDown(e.x);
      });
    document
      .querySelector('.single-product-img')
      .addEventListener('mouseup', (e) => {
        setMouseUp(e.x);
      });
  }, []);
  useEffect(() => {
    if (mouseDown !== mouseUp) {
      if (mouseDown > mouseUp) {
        setIndexImg((oldindexIMG) => {
          let newindexIMG = oldindexIMG + 1;
          if (newindexIMG > AllOfImg.length - 1) {
            newindexIMG = 0;
          }
          return newindexIMG;
        });
      }
      if (mouseDown < mouseUp) {
        setIndexImg((oldindexIMG) => {
          let newindexIMG = oldindexIMG - 1;
          if (newindexIMG < 0) {
            newindexIMG = AllOfImg.length - 1;
          }
          return newindexIMG;
        });
      }
    }
    setMouseDown(0);
    setMouseUp(0);
  }, [mouseUp]);
  const switchPage = (value) => {
    if (Object.keys(product).length > 0) {
      if (value === 'inc') {
        setIndexImg((oldindexIMG) => {
          let newindexIMG = oldindexIMG + 1;
          if (newindexIMG > AllOfImg.length - 1) {
            newindexIMG = 0;
          }
          return newindexIMG;
        });
      } else {
        setIndexImg((oldindexIMG) => {
          let newindexIMG = oldindexIMG - 1;
          if (newindexIMG < 0) {
            newindexIMG = AllOfImg.length - 1;
          }
          return newindexIMG;
        });
      }
    }
  };
  const actiona = () => {
    miniAction('close', 'SingleProductModal');
  };
  const setColorFollowIndex = () => {
    if (Object.keys(product).length > 0) {
      const color = colorImg.find((color) => {
        return color.indexImg.some((item) => item === indexIMG);
      }).colorName;
      setColorIndex(color);
    }
  };
  useEffect(() => {
    setColorFollowIndex();
  }, [indexIMG]);

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
              <div className='single-product-img'>
                {AllOfImg &&
                  AllOfImg.map((img, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          indexIMG === index
                            ? 'single-product-img__img active'
                            : 'single-product-img__img'
                        }
                        style={{
                          backgroundImage: `url(${img.thumbnails.large.url})`,
                        }}
                      ></div>
                    );
                  })}
                <NextArrow onClick={() => switchPage('inc')} />
                <PrevArrow onClick={() => switchPage('dec')} />
              </div>
              {product.AllOfImg && (
                <div className='slide-dot-button-container'>
                  {product.AllOfImg.map((a, index) => {
                    return (
                      <button
                        className={
                          indexIMG === index ? 'slide-dot-btn-actived' : null
                        }
                        onClick={() => setIndexImg(index)}
                      ></button>
                    );
                  })}
                </div>
              )}
            </Grid>
            <Grid className='sp-info-wrapper' item xs={12} sm={6} md={6} lg={6}>
              {/* <div className='sp-info-content'>
                {product && (
                  <SingleProductInfo
                    colorindex={colorindex}
                    setIndexImg={setIndexImg}
                    {...product}
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
              </div> */}
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default SingleProductModal;
