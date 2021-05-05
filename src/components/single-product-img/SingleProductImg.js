import React, { useState, useEffect, useRef } from 'react';
import { NextArrow, PrevArrow } from '../../utils/helper';
import './singleProductImg.scss';
const SingleProductImg = ({ AllOfImg, indexIMG, switchIMG }) => {
  const [lenLeft, setLenLeft] = useState(0);
  const [lenTop, setLenTop] = useState(0);
  const lenSize = 200;
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const moveEvent = (e) => {
    const imgEl = document.querySelector('.single-product-img');
    const imgResultEl = document.querySelector(
      '.single-product-img__img__zoom'
    );
    let imgTop,
      imgLeft,
      cx,
      cy,
      imgHeight,
      imgWidth,
      imgResultHeight,
      imgResultWidth;
    /*get the x and y positions of the image:*/
    imgTop = imgEl.getBoundingClientRect().top;
    imgLeft = imgEl.getBoundingClientRect().left;
    imgHeight = imgEl.getBoundingClientRect().height;
    setHeight(imgHeight);
    imgWidth = imgEl.getBoundingClientRect().width;
    setWidth(imgWidth);
    imgResultHeight = imgResultEl.getBoundingClientRect().height;
    imgResultWidth = imgResultEl.getBoundingClientRect().width;

    e.preventDefault();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    cx = e.pageX - imgLeft;
    cy = e.pageY - imgTop;
    /*consider any page scrolling:*/
    cx = cx - window.pageXOffset - lenSize / 2;
    cy = cy - window.pageYOffset - lenSize / 2;
    if (cy < lenSize / 2 - 100) {
      cy = 0;
    }
    if (cx < lenSize / 2 - 100) {
      cx = 0;
    }
    if (imgHeight - cy < lenSize) {
      cy = imgHeight - lenSize;
    }
    if (imgWidth - cx < lenSize) {
      cx = imgWidth - lenSize;
    }
    setLenTop(cy);
    setLenLeft(cx);
  };
  // useEffect(() => {
  //   const imgEl = document.querySelector('.single-product-img');
  //   const lenEl = document.querySelector('.single-product-img');
  //   let imgTop, imgLeft, cx, cy;
  //   if (imgEl) {
  //     //   imgTop = imgEl.getBoundingClientRect().top;
  //     //   imgLeft = imgEl.getBoundingClientRect().left;
  //     const moveEvent = (e) => {
  //       e.preventDefault();
  //       cx = e.offsetX;
  //       cy = e.offsetY;
  //       setLenTop(cy - 20);
  //       setLenLeft(cx - 20);
  //     };
  //     imgEl.addEventListener('mousemove', moveEvent);
  //     lenEl.addEventListener('mousemove', moveEvent);
  //   }
  // }, []);

  return (
    <div className='single-product-img' onMouseMove={moveEvent}>
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
            >
              <div
                className='zoom_len'
                style={{ top: `${lenTop}px`, left: `${lenLeft}px` }}
                onMouseMove={moveEvent}
              ></div>
              <div
                className='single-product-img__img__zoom'
                style={{
                  backgroundImage: `url(${img.thumbnails.large.url}) `,
                  backgroundPosition: `${lenLeft * 3}px ${lenTop * 3}px`,
                  backgroundSize: `${width * 3}px ${height * 3}px `,
                }}
              ></div>
            </div>
          );
        })}
      <NextArrow onClick={() => switchIMG('inc')} />
      <PrevArrow onClick={() => switchIMG('dec')} />
    </div>
  );
};

export default SingleProductImg;
