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

const SingleProductModal = () => {
  const { miniAction, isSingleProductModalOpen } = useButtonContext();
  const { singleProduct: product, getSingleProduct } = useProductContext();
  const { colorImg, AllOfImg } = product;
  const [indexIMG, setIndexImg] = useState(0);
  const [colorindex, setColorIndex] = useState('');
  const switchPage = (value) => {
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
  };
  const actiona = () => {
    miniAction('close', 'SingleProductModal');
  };
  const setColorFollowIndex = () => {
    const color = colorImg.find((color) => {
      return color.indexImg.some((item) => item === indexIMG);
    }).colorName;
    setColorIndex(color);
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
      <div className='sp-modal-content'>
        <div className='sp-modal-btn--close'>
          <RotateCloseBtn action={actiona} />
        </div>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} className='sp-info-wrapper'>
            <SingleProductImg
              {...product}
              indexIMG={indexIMG}
              switchPage={switchPage}
            />
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
          </Grid>
          <Grid className='sp-info-wrapper' item xs={12} sm={6} md={6} lg={6}>
            <div className='sp-info-content'>
              <SingleProductInfo
                colorindex={colorindex}
                setIndexImg={setIndexImg}
                {...product}
              />
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
    </div>
  );
};

export default SingleProductModal;
