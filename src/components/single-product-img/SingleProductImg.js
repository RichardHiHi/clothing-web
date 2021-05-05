import React, { useState, useEffect, useRef } from 'react';
import { NextArrow, PrevArrow } from '../../utils/helper';
import './singleProductImg.scss';
const SingleProductImg = ({ AllOfImg, indexIMG, switchIMG }) => {
  return (
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
      <NextArrow onClick={() => switchIMG('inc')} />
      <PrevArrow onClick={() => switchIMG('dec')} />
    </div>
  );
};

export default SingleProductImg;
