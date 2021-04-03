import React from 'react';
import { SlideShow } from '../components';
import { CollectionList, Banner, BlogInsta } from '../components';

const HomePage = () => {
  return (
    <div className='content'>
      <SlideShow />
      <CollectionList />
      <Banner />
      <BlogInsta />
    </div>
  );
};

export default HomePage;
