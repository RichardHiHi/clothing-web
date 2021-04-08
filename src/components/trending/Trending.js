import React from 'react';
import './trending.scss';
import Grid from '@material-ui/core/Grid';
import ProductMiniItem from '../product-mini-item/ProductMiniItem';
import { instas } from '../../utils/data';
const Trending = () => {
  return (
    <div className='trending-section'>
      <div className='trending-container section-container'>
        <div className='trending-wrapper section-content-wrapper'>
          <div className='section-title-container'>
            <h3>
              <span>TRENDING</span>
            </h3>
            <span>Top view in this week</span>
          </div>
          <div className='trending-product-wrapper'>
            <Grid container className='section-grid-content-wrapper'>
              {instas.map((insta) => {
                return (
                  <Grid item xs={6} sm={3}>
                    <ProductMiniItem img={insta.img} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
