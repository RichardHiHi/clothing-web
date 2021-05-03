import React from 'react';
import { NextArrow, PrevArrow } from '../../utils/helper';
import './singleProductImg.scss';
const SingleProductImg = ({ AllOfImg, indexIMG, switchPage }) => {
  return (
    <div className='single-product-img'>
      {AllOfImg.map((img, index) => {
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
  );
};

export default SingleProductImg;
