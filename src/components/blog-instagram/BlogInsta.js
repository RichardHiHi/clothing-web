import React from 'react';
import './blogInsta.scss';
import Slider from 'react-slick';
import prch20_2 from '../../assets/prch20_2.jpg';
import { blogs } from '../../utils/data';
const BlogInsta = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          <div className='slide-blog-container'>
            <Slider {...settings}>
              {blogs.map((blog) => {
                return (
                  <article className='blog-slide'>
                    <a href='#'>
                      <div
                        className='img-blog'
                        style={{ backgroundImage: `url(${blog.img})` }}
                      ></div>
                    </a>
                    <div className='post-info'>
                      <h4 className='post-title'>
                        <a href='#'>{blog.postTitle}</a>
                      </h4>
                      <span className='post-author'>
                        by <span className='bold'>{blog.author}</span>
                      </span>
                      <span className='post-time'>
                        on
                        <span className='bold'>
                          <time datetime='2020-04-06T02:17:00Z'>
                            April 6, 2020
                          </time>
                        </span>
                      </span>
                    </div>
                    <div className='post-content'>
                      <span>{blog.content}</span>
                    </div>
                  </article>
                );
              })}
            </Slider>
          </div>
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
