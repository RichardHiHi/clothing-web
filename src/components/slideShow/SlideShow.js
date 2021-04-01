import React, { useState, useEffect } from 'react';
import './slideShow.scss';

import { slide } from '../../utils/data';
const SlideShow = () => {
  const [test, setTest] = useState(0);
  const [mouseDown, setMouseDown] = useState(0);
  const [mouseUp, setMouseUp] = useState(0);
  const fn = () => {};
  useEffect(() => {
    document
      .querySelector('.section-slide-show-inner')
      .addEventListener('mousedown', (e) => {
        e.preventDefault();
        setMouseDown(e.x);
      });
    document
      .querySelector('.section-slide-show-inner')
      .addEventListener('mouseup', (e) => {
        setMouseUp(e.x);
      });
    document
      .querySelector('.section-slide-show-inner')
      .addEventListener('touchstart', (e) => {
        e.preventDefault();
        setMouseDown(e.touches[0].clientX);
        console.log(e.touches[0].clientX);
      });
    document
      .querySelector('.section-slide-show-inner')
      .addEventListener('touchend', (e) => {
        setMouseUp(e.changedTouches[0].clientX);
        console.log(e);
      });
  }, []);
  useEffect(() => {
    if (mouseDown !== mouseUp) {
      if (mouseDown > mouseUp) {
        setTest((oldTest) => {
          let newTest = oldTest + 1;
          console.log(newTest);
          if (newTest > 3) {
            newTest = 0;
          }
          return newTest;
        });
      }
      if (mouseDown < mouseUp) {
        setTest((oldTest) => {
          let newTest = oldTest - 1;
          if (newTest < 0) {
            newTest = 3;
          }
          return newTest;
        });
      }
    }
    setMouseDown(0);
    setMouseUp(0);
  }, [mouseUp]);
  return (
    <div className='section-slide-show-inner'>
      <div className='slides'>
        {slide.map((a, index) => {
          const { image, position, title, text } = a;
          let classa;
          if (index === test) {
            classa = 'slide slide-actived';
          } else if (index > test) {
            classa = 'slide slide-right';
          } else {
            classa = 'slide slide-left';
          }
          return (
            <div className={classa}>
              <div className={`slide-content slide-content-${position}`}>
                <div className='slide-content-caption'>
                  <div className='slide-content-title'>
                    <p>{title}</p>
                  </div>
                  <div className='slide-content-text'>
                    <p>{text}</p>
                  </div>
                  <a href='#' className='slide-link-btn'>
                    Explore Now
                  </a>
                </div>
              </div>
              <div className='img-container'>
                <div className='overlay-img'>
                  <img class='slide-img' src={image} alt='' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='slide-dot-button-container'>
        {slide.map((a, index) => {
          return (
            <button
              className={test === index ? 'slide-dot-btn-actived' : null}
              onClick={() => setTest(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default SlideShow;
