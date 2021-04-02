import React from 'react';
import { SlideShow } from '../components';
import { CollectionList, BannerBlog } from '../components';

const HomePage = () => {
  return (
    <div className='content'>
      <SlideShow />
      <CollectionList />
      <BannerBlog />
    </div>
  );
};

export default HomePage;
