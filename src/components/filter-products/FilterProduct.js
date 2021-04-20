import React from 'react';
import './filterProduct.scss';
import Grid from '@material-ui/core/Grid';
import Filter from '../filter/Filter';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
const FilterProduct = () => {
  return (
    <div className='filter-and-product-section'>
      <div className='filter-and-product-container section-container'>
        <div className='filter-and-product-wrapper section-content-wrapper'>
          <div className='filter-and-product-header'>
            <div className='filter-btn'>
              <FilterListOutlinedIcon />
              <span>Filter</span>
            </div>
            <div className='product-view'>
              <div className='product-view-btn column2 active'></div>
              <div className='product-view-btn column3 '></div>
              <div className='product-view-btn column4 '></div>
            </div>
            <div className='sort-btn-wrapper'>
              <select name='product_type'>
                <option value='*'>Sort</option>
                <option value='Acessories'>Best selling</option>
                <option value='Bag'>Alphabetically, A-Z</option>
                <option value='Camera'>Alphabetically, Z-A</option>
                <option value='Decor'>Price, low to high</option>
                <option value='Earphones'>Price, high to low</option>
              </select>
            </div>
          </div>
          <Grid container>
            <Grid item lg={2}>
              <Filter />
            </Grid>
            <Grid item lg={10}>
              2
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
