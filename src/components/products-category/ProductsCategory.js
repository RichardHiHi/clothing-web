import React, { useState, useEffect } from 'react';
import './productsCategory.scss';
import { useProductContext } from '../../context/product_context';
import { useFilterContext } from '../../context/filter_context';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import hero from '../../assets/hero.jpg';
const ProductCategory = () => {
  const { category } = useProductContext();
  const openClose = (e) => {
    e.target.parentElement.classList.toggle('active');
  };
  const {
    filter: { filterCategory },
  } = useFilterContext();
  return (
    <>
      <div className='category-section active'>
        <div className='category-title' onClick={openClose}>
          <h3>categories</h3>
          <ExpandLessIcon />
        </div>
        <ul className='category-list'>
          <li
            className={
              filterCategory === 'All'
                ? 'category-item active'
                : 'category-item '
            }
          >
            All
          </li>
          {category.map((item, index) => {
            return (
              <li
                className={
                  filterCategory === item
                    ? 'category-item active'
                    : 'category-item '
                }
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='hero-section'>
        <div className='hero-img' style={{ backgroundImage: `url(${hero})` }}>
          <span>{filterCategory}</span>
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
