import React from 'react';
import './filter.scss';
const Filter = () => {
  return (
    <form>
      <div className='search-filter-wrapper filter-wrapper'>
        <div className='filter-title'>
          <h5>Filter by name</h5>
        </div>
        <input
          class='input'
          type='text'
          name='q'
          placeholder='Search for products'
        />
      </div>
      <div className='price-filter-wrapper filter-wrapper'>
        <div className='filter-title'>
          <h5>Filter by price</h5>
        </div>
        <p class='filter-price'>$397.79</p>
        <input type='range' name='price' min='0' max='309999' value='39779' />
      </div>
      <div className='search-filter-wrapper filter-wrapper'>
        <div className='filter-title'>
          <h5>Filter by color</h5>
        </div>
        <ul className='filter-list'>
          <li className='filter-item'>
            <button className='filter-color-btn'>
              <span
                className='filter-color'
                style={{ backgroundColor: `#000000` }}
              ></span>
              <span className='filter-color-name'>black</span>
            </button>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default Filter;
