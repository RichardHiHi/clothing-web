import React, { useState, useEffect } from 'react';
import './slideShow.scss';
import blur from '../../assets/blur.jpeg';
import { fetchData, test } from '../../utils/helper';

// import { slide } from '../../utils/data';
const SlideShow = () => {
  const [slideIdex, setSlideIndex] = useState(0);
  const [mouseDown, setMouseDown] = useState(0);
  const [mouseUp, setMouseUp] = useState(0);
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    test();
    fetchData('slide', setSlides, 'full');
  }, []);

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
        setSlideIndex((oldTest) => {
          let newTest = oldTest + 1;
          if (newTest > 3) {
            newTest = 0;
          }
          return newTest;
        });
      }
      if (mouseDown < mouseUp) {
        setSlideIndex((oldTest) => {
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

  if (slides.length === 0) {
    return (
      <div className='section-slide-show-inner  '>
        <div className='section-slide-show-inner-loadding '>
          <img src={blur} alt='' className='img-loading' />
        </div>
      </div>
    );
  }
  return (
    <div className='section-slide-show-inner'>
      <div className='slides'>
        {slides.map((slide, index) => {
          const { img, position, title, text } = slide;
          let classa;
          if (index === slideIdex) {
            classa = 'slide-actived';
          }
          if (index === slideIdex - 1) {
            classa = 'slide-left';
          }
          // if index = 0 so left is 3
          if (index === slideIdex + 1) {
            classa = 'slide-right';
          }
          if (index === 3 && slideIdex - 1 < 0) {
            classa = 'slide-left';
          }
          if (index === 0 && slideIdex + 1 > 3) {
            classa = 'slide-right';
          }
          return (
            <div className={`slide ${classa}`}>
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
                  <img class='slide-img' src={img} alt='' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='slide-dot-button-container'>
        {slides.map((a, index) => {
          return (
            <button
              className={slideIdex === index ? 'slide-dot-btn-actived' : null}
              onClick={() => setSlideIndex(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default SlideShow;
