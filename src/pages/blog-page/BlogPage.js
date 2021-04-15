import React, { useState, useEffect } from 'react';
import { BlogInsta, BlogItem } from '../../components';
import { fetchData, NextArrow, PrevArrow } from '../../utils/helper';
import Slider from 'react-slick';
import './blogPage.scss';
import Grid from '@material-ui/core/Grid';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchData('blog', setBlogs);
  });
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
  return (
    <>
      <div className='insta-section margin'>
        <div className='insta-container section-content-wrapper'>
          <Slider {...settingsBlog}>
            {blogs.map((blog) => {
              return (
                <article className='blog-slide position' key={blog.id}>
                  <a href='#'>
                    <div
                      className='img-blog'
                      style={{ backgroundImage: `url(${blog.img})` }}
                    ></div>
                  </a>
                  <div className='blog-page-post-info'>
                    <span className='post-author'>
                      by <span className='bold'>{blog.author}</span>
                    </span>
                    <h4 className='post-title'>
                      <a href='#'>{blog.postTitle}</a>
                    </h4>
                    <span className='post-time'>
                      <span className='bold'>
                        <time datetime='2020-04-06T02:17:00Z'>
                          April 6, 2020
                        </time>
                      </span>
                    </span>
                  </div>
                </article>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className='sale-section'>
        <div className='sale-container section-container'>
          <div className='sale-wrapper section-content-wrapper'>
            <div className='sale-product-wrapper'>
              {blogs.length === 0 ? (
                <h2>LOADIING</h2>
              ) : (
                <Grid container className='section-grid-content-wrapper'>
                  {blogs.map((blog, index) => {
                    return (
                      <Grid item xs={12} sm={6}>
                        <BlogItem blog={blog} />
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
