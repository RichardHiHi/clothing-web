import React, { useState, useEffect, useRef } from 'react';
import './singleProductContent.scss';
import Grid from '@material-ui/core/Grid';

import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../utils/helper';
import SingleProductImg from '../single-product-img/SingleProductImg';
import SingleProductInfo from '../single-product-info/SingleProductInfo';
const SingleProductContent = ({ product }) => {
  const { colorImg, AllOfImg } = product;
  const [indexIMG, setIndexImg] = useState(0);
  const [colorindex, setColorIndex] = useState('');
  const sliderRef = useRef();
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
  //set position of slider
  const handleOnClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };
  //set color follow index
  const setColorFollowIndex = () => {
    const color = colorImg.find((color) => {
      return color.indexImg.some((item) => item === indexIMG);
    }).colorName;
    setColorIndex(color);
  };
  useEffect(() => {
    handleOnClick(indexIMG - 2);
    setColorFollowIndex();
  }, [indexIMG]);

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

  var settingsSingleProduct = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: false,
  };

  return (
    <div className='single-product-section'>
      <div className='single-product-container section-container'>
        <div className='section-content-wrapper'>
          <Grid container className='section-grid-content-wrapper'>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <SingleProductImg
                {...product}
                indexIMG={indexIMG}
                switchPage={switchPage}
              />
              <div className='single-product-thumbnails-list'>
                <Slider ref={sliderRef} {...settingsSingleProduct}>
                  {AllOfImg.map((img, index) => {
                    return (
                      <div className='single-product-thumbnails'>
                        <div
                          className={
                            index === indexIMG
                              ? 'single-product-thumbnails__img active'
                              : 'single-product-thumbnails__img'
                          }
                          style={{
                            backgroundImage: `url(${img.thumbnails.large.url})`,
                          }}
                          onClick={() =>
                            setIndexImg(() => {
                              return index;
                            })
                          }
                        ></div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <SingleProductInfo
                colorindex={colorindex}
                setIndexImg={setIndexImg}
                {...product}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SingleProductContent;
