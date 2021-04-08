import React from 'react';
import {
  CollectionList,
  Banner,
  BlogInsta,
  Instagram,
  Trending,
  SlideShow,
} from '../components';

const HomePage = () => {
  return (
    <div className='content'>
      <SlideShow />
      <CollectionList />
      <Trending />
      <BlogInsta />
      <Banner />
      <Instagram />
    </div>
  );
};

export default HomePage;
