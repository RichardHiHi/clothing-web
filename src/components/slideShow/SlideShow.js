import React, { useState } from 'react';
import './slideShow.scss';
import anh_1 from '../../assets/backGround/anh_1.jpg';
import anh_2 from '../../assets/backGround/anh_2.jpg';
import anh_3 from '../../assets/backGround/anh_3.jpg';
import anh_4 from '../../assets/backGround/anh_4.png';
import anh_5 from '../../assets/backGround/anh_5.jpg';
import anh_6 from '../../assets/backGround/anh_6.jpg';
import anh_7 from '../../assets/backGround/anh_7.jpg';
import anh_8 from '../../assets/backGround/anh_8.jpg';

// import { data } from '../../utils/data';
const SlideShow = () => {
  const data = [
    {
      image: anh_2,
      position: 'left',
      title: 'NEW SEASON',
      text: 'Lookbook Collection2',
    },
    {
      image: anh_4,
      position: 'right',
      title: 'SUMMER SALE',
      text: 'Save up to 70%1',
    },
    {
      image: anh_5,
      position: 'left',
      title: 'NEW SEASON',
      text: 'Lookbook Collection2',
    },
    {
      image: anh_6,
      position: 'right',
      title: 'NEW SEASON',
      text: 'Lookbook Collection3',
    },
    {
      image: anh_7,
      position: 'right',
      title: 'NEW SEASON',
      text: 'Lookbook Collection3',
    },
    {
      image: anh_8,
      position: 'left',
      title: 'NEW SEASON',
      text: 'Lookbook Collection3',
    },
  ];
  const [test, setTest] = useState(0);
  return (
    <div className='slide-show-inner'>
      <div className='slides'>
        {data.map((a, index) => {
          const { image, position, title, text } = a;
          let classa;
          if (index === test) {
            classa = 'slide slide-actived';
          } else if (index > test) {
            classa = 'slide slide-left';
          } else {
            classa = 'slide slide-right';
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
                <img src={image} alt='' />
              </div>
            </div>
          );
        })}
      </div>
      <div className='button'>
        <button onClick={() => setTest(0)}>0</button>
        <button onClick={() => setTest(1)}>1</button>
        <button onClick={() => setTest(2)}>2</button>
        <button onClick={() => setTest(3)}>3</button>
        <button onClick={() => setTest(4)}>4</button>
        <button onClick={() => setTest(5)}>5</button>
      </div>
    </div>
  );
};

export default SlideShow;
