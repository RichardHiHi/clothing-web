import React from 'react';
import './filter.scss';
const Filter = () => {
  return (
    <>
      <div className='search-filter-wrapper filter-wrapper'>
        <div className='filter-title'>
          <h3>Search for filter</h3>
        </div>
        <input
          class='input'
          type='text'
          name='q'
          placeholder='Search for products'
        />
      </div>
    </>
  );
};

export default Filter;
