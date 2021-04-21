import React, { useEffect, useState } from 'react';
import './filter.scss';
import { useProductContext } from '../../context/product_context';
import AddIcon from '@material-ui/icons/Add';
import { formatPrice } from '../../utils/helper';
const Filter = () => {
  const { color, size, category } = useProductContext();
  const [currentMinPrice, setCurrentMinPrice] = useState(0);
  const [currentMaxPrice, setCurrentMaxPrice] = useState(900);
  const [maxPrice, setMaxPrice] = useState(900);
  const [minPrice, setMinPrice] = useState(0);
  const changeCurrentMinPrice = (e) => {
    const value = parseInt(e.target.value);
    if (value > currentMaxPrice) {
      setCurrentMinPrice(currentMaxPrice);
    } else {
      setCurrentMinPrice(value);
    }
  };
  const changeCurrentMaxPrice = (e) => {
    const value = parseInt(e.target.value);
    console.log(typeof value);
    if (value < currentMinPrice) {
      setCurrentMaxPrice(currentMinPrice);
    } else {
      setCurrentMaxPrice(value);
    }
  };

  return (
    <form>
      <div className='search-filter-wrapper filter-wrapper margin'>
        <input class='input' type='text' name='q' placeholder='Search...' />
      </div>
      <div className='price-filter-wrapper filter-wrapper'>
        <div className='filter-title'>
          <h5>Filter by price</h5>
        </div>

        <div className='input-price-filter-wrapper'>
          <input
            type='range'
            id='input-price-filter-left'
            name='price'
            min={minPrice}
            max={maxPrice}
            value={currentMinPrice}
            onChange={changeCurrentMinPrice}
          />
          <input
            type='range'
            id='input-price-filter-right'
            name='price'
            min={minPrice}
            max={maxPrice}
            value={currentMaxPrice}
            onChange={changeCurrentMaxPrice}
          />
        </div>
        <div className='input-filter-slider-wrapper'>
          <div className='input-filter-slider'>
            <div className='track'></div>
            <div
              className='range'
              style={{
                left: `${(currentMinPrice / maxPrice) * 100}%`,
                right: `${(1 - currentMaxPrice / maxPrice) * 100}%`,
              }}
            ></div>
            <div
              className='thumb left'
              style={{ left: `${(currentMinPrice / maxPrice) * 100 - 5}%` }}
            ></div>
            <div
              className='thumb right'
              style={{
                right: `${(1 - currentMaxPrice / maxPrice) * 100 - 5}%`,
              }}
            ></div>
          </div>
        </div>
        <p class='filter-price'>
          Price:{' '}
          <span>
            {formatPrice(currentMinPrice)} — {formatPrice(currentMaxPrice)}
          </span>
        </p>
      </div>
      <div className='search-filter-wrapper filter-wrapper'>
        <div className='filter-title'>
          <h5>Filter by categories</h5>
        </div>
        <ul className='filter-list'>
          {category.map((item, index) => {
            return (
              <li className='category-filter-item filter-item' key={index}>
                <AddIcon /> {item}
              </li>
            );
          })}
        </ul>
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
      <div className='search-filter-wrapper filter-wrapper margin'>
        <div className='filter-title'>
          <h5>Filter by size</h5>
        </div>
        <ul className='filter-list height-150'>
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
