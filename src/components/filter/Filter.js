import React, { useEffect, useState } from 'react';
import './filter.scss';
import AddIcon from '@material-ui/icons/Add';
import { formatPrice } from '../../utils/helper';
import { useFilterContext } from '../../context/filter_context';
const Filter = () => {
  const {
    color,
    size,
    category,
    filter: {
      color: filteredColor,
      minPrice,
      maxPrice,
      currentMinPrice,
      currentMaxPrice,
      category: filteredCategory,
      size: filteredSize,
    },
    setCurrentMinPrice,
    setCurrentMaxPrice,
    filterUpdate,
    filteredProducts,
  } = useFilterContext();
  // const [currentMinPrice, setCurrentMinPrice] = useState(minPrice);
  // const [currentMaxPrice, setCurrentMaxPrice] = useState(maxPrice);

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
    if (value < currentMinPrice) {
      setCurrentMaxPrice(currentMinPrice);
    } else {
      setCurrentMaxPrice(value);
    }
  };

  return (
    <>
      <div className='search-filter-wrapper filter-wrapper margin'>
        <input
          class='input'
          type='text'
          name='search'
          placeholder='Search...'
          onChange={filterUpdate}
        />
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
        {category && (
          <ul className='filter-list'>
            {filteredProducts.length > 0 && (
              <li className='category-filter-item filter-item'>
                <button
                  className={
                    filteredCategory === 'All'
                      ? 'category-filter-item-btn active'
                      : 'category-filter-item-btn'
                  }
                  name='category'
                  data-category='All'
                  onClick={filterUpdate}
                >
                  <AddIcon /> All
                </button>
              </li>
            )}
            {category.map((item, index) => {
              return (
                <li className='category-filter-item filter-item' key={index}>
                  <button
                    className={
                      item === filteredCategory
                        ? 'category-filter-item-btn active'
                        : 'category-filter-item-btn'
                    }
                    name='category'
                    data-category={item}
                    onClick={filterUpdate}
                  >
                    <AddIcon /> {item}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className='search-filter-wrapper filter-wrapper'>
        <div className='filter-title'>
          <h5>Filter by color</h5>
        </div>
        {color && (
          <ul className='filter-list'>
            {filteredProducts.length > 0 && (
              <li className='filter-item'>
                <button
                  className={
                    filteredColor === 'All'
                      ? 'filter-color-btn active'
                      : 'filter-color-btn'
                  }
                  name='color'
                  data-color='All'
                  onClick={filterUpdate}
                >
                  {/* '.actived' for active */}
                  <span className='filter-color'></span>
                  <span className='filter-color-name'>All</span>
                </button>
              </li>
            )}
            {color.map((item, index) => {
              return (
                <li className='filter-item' key={index}>
                  <button
                    className={
                      filteredColor === item.colorCode
                        ? 'filter-color-btn active'
                        : 'filter-color-btn'
                    }
                    name='color'
                    data-color={item.colorCode}
                    onClick={filterUpdate}
                  >
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
        )}
      </div>
      <div className='search-filter-wrapper filter-wrapper margin'>
        <div className='filter-title'>
          <h5>Filter by size</h5>
        </div>
        {category && (
          <ul className='filter-list height-150'>
            {filteredProducts.length > 0 && (
              <li className='filter-item'>
                <button
                  className={
                    filteredSize === 'All'
                      ? 'filter-size-btn active'
                      : 'filter-size-btn'
                  }
                  name='size'
                  data-size='All'
                  onClick={filterUpdate}
                >
                  {/* '.actived' for active */}
                  <span className='filter-size-check'></span>
                  <span className='filter-size-title'>All</span>
                </button>
              </li>
            )}
            {size.map((item, index) => {
              if (item) {
                return (
                  <li className='filter-item' key={index}>
                    <button
                      className={
                        item === filteredSize
                          ? 'filter-size-btn active'
                          : 'filter-size-btn'
                      }
                      name='size'
                      data-size={item}
                      onClick={filterUpdate}
                    >
                      {/* '.actived' for active */}
                      <span className='filter-size-check'></span>
                      <span className='filter-size-title'>{item}</span>
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Filter;
