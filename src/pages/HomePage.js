import React from 'react';
import { SlideShow } from '../components';
import { CollectionList } from '../components';

const HomePage = () => {
  return (
    <div className='content'>
      <SlideShow />
      <CollectionList />
    </div>
  );
};

export default HomePage;
