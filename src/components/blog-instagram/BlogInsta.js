import React, { useState, useEffect } from 'react';
import './blogInsta.scss';
import Slider from 'react-slick';
import { blogs, instas } from '../../utils/data';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import Loadding from '../loadding-img/LoaddingImg';
import { fetchData } from '../../utils/helper';

const BlogInsta = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchData('blog', setBlogs);
  }, []);
  const NextArrow = ({ onClick }) => {
    return (
      <div className='next-arrow' onClick={onClick}>
        <BiChevronRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className='prev-arrow' onClick={onClick}>
        <BiChevronLeft />
      </div>
    );
  };
  var settingsBlog = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    infinite: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          // fade: true,
          lazyLoad: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  if (blogs.length === 0) {
    return (
      <div className='blog-section'>
        <div className='blog-container section-container'>
          <div className='section-content-wrapper'>
            <div className='section-title-container'>
              <h3>
                <span>LATES FROM BLOG</span>
              </h3>
              <span>The freshest and most exciting news</span>
            </div>
            <div className='slide-blog-container'>
              <Slider {...settingsBlog}>
                {Array.from({ length: 3 }, (_, i) => i).map((blog) => {
                  return (
                    <article className='blog-slide'>
                      <a href='#'>
                        <Loadding classImg={'img-blog'} />
                      </a>
                      <div className='post-info'>
                        <h4 className='post-title'>
                          <a href='#'>Style for couple in Weeding season</a>
                        </h4>
                        <span className='post-author'>
                          by <span className='bold'>Henrry</span>
                        </span>
                        <span className='post-time'>
                          on{' '}
                          <span className='bold'>
                            <time datetime='2020-04-06T02:17:00Z'>
                              April 6, 2020
                            </time>
                          </span>
                        </span>
                      </div>
                      <div className='post-content'>
                        <span>
                          Typography is the work of typesetters,
                          compositors,typographers, graphic designers, art
                          directors, mangartists, ...
                        </span>
                      </div>
                    </article>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='blog-section'>
      <div className='blog-container section-container'>
        <div className='section-content-wrapper'>
          <div className='section-title-container'>
            <h3>
              <span>LATES FROM BLOG</span>
            </h3>
            <span>The freshest and most exciting news</span>
          </div>
          <div className='slide-blog-container'>
            <Slider {...settingsBlog}>
              {blogs.map((blog) => {
                return (
                  <article className='blog-slide' key={blog.id}>
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
                        on{' '}
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
    </div>
  );
};

export default BlogInsta;
