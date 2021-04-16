import React from 'react';
import './blogItem.scss';
import LoadingImg from '../loadding-img/LoaddingImg';
const BlogItem = ({ blog }) => {
  if (blog) {
    return (
      <article className='blog-slide padding' key={blog.id}>
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
              <time datetime='2020-04-06T02:17:00Z'>April 6, 2020</time>
            </span>
          </span>
        </div>
        <div className='post-content'>
          <span>{blog.content}</span>
        </div>
      </article>
    );
  }
  return (
    <article className='blog-slide padding'>
      <a href='#'>
        <LoadingImg classImg={'img-blog'} />
      </a>
      <div className='post-info'>
        <h4 className='post-title'>
          <a href='#'>Style Advice All Men Should Hear</a>
        </h4>
        <span className='post-author'>
          by <span className='bold'>admin</span>
        </span>
        <span className='post-time'>
          on{' '}
          <span className='bold'>
            <time datetime='2020-04-06T02:17:00Z'>April 6, 2020</time>
          </span>
        </span>
      </div>
    </article>
  );
};

export default BlogItem;
