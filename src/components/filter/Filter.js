import React from 'react';
import './filter.scss';
import { useProductContext } from '../../context/product_context';
const Filter = () => {
  const { color, size } = useProductContext();
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
          {color.map((item, index) => {
            return (
              <li className='filter-item' key={index}>
                <button className='filter-color-btn'>
                  {/* '.actived' for active */}
                  <span
                    className='filter-color'
                    style={{ backgroundColor: `${item.colorCode}` }}
                  ></span>
                  <span className='filter-color-name'>{item.colorName}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='search-filter-wrapper filter-wrapper'>
        <div className='filter-title'>
          <h5>Filter by size</h5>
        </div>
        <ul className='filter-list'>
          {size.map((item, index) => {
            if (item) {
              return (
                <li className='filter-item'>
                  <button className='filter-size-btn '>
                    {/* '.actived' for active */}
                    <span className='filter-size-check'></span>
                    <span className='filter-size-title'>{item}</span>
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </form>
  );
};

export default Filter;
