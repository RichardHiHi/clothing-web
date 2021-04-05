import React from 'react';
import { SlideShow } from '../components';
import { CollectionList, Banner, BlogInsta, Instagram } from '../components';

const HomePage = () => {
  return (
    <div className='content'>
      <SlideShow />
      <CollectionList />
      <BlogInsta />
      <Banner />
      <Instagram />
    </div>
  );
};

export default HomePage;
