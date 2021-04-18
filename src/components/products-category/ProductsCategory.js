import React, { useState, useEffect } from 'react';
import './productsCategory.scss';
import { useProductContext } from '../../context/product_context';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import hero from '../../assets/hero.jpg';
const ProductCategory = () => {
  const { category } = useProductContext();
  const openClose = (e) => {
    e.target.parentElement.classList.toggle('active');
  };
  return (
    <>
      <div className='category-section active'>
        <div className='category-title' onClick={openClose}>
          <h3>categories</h3>
          <ExpandLessIcon />
        </div>
        <ul className='category-list'>
          {category.map((item, index) => {
            return <li className='category-item'>{item}</li>;
          })}
        </ul>
      </div>
      <div className='hero-section'>
        <div className='hero-img' style={{ backgroundImage: `url(${hero})` }}>
          <span>New Arrival</span>
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
