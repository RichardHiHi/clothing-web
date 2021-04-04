import React from 'react';
import './blogInsta.scss';
import Slider from 'react-slick';
const BlogInsta = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className='blog-section'>
        <div className='blog-container section-container'>
          <div className='section-title-container'>
            <h3>
              <span>LATES FROM BLOG</span>
            </h3>
            <span>The freshest and most exciting news</span>
          </div>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
          );
        </div>
      </div>
      {/* <div className='insta-section'>
        <div className='insta-container .section-container'>
          <div className='section-title'></div>
        </div>
      </div> */}
    </>
  );
};

export default BlogInsta;
