import React, { useEffect, useState } from 'react';
import './trending.scss';
import Grid from '@material-ui/core/Grid';
import ProductMiniItem from '../product-mini-item/ProductMiniItem';
import { getProduct } from '../../utils/helper';
import ProductMiniLoading from '../product-mimi-loading/ProductMiniLoading';
const Trending = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    // setTrending(getProduct());
    getProduct(setTrending);
  }, []);
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
            {trending.length === 0 ? (
              <Grid container className='section-grid-content-wrapper'>
                {Array.from({ length: 4 }, (_, i) => i).map(
                  (product, index) => {
                    return (
                      <Grid item xs={6} sm={3}>
                        <ProductMiniLoading key={index} />
                      </Grid>
                    );
                  }
                )}
              </Grid>
            ) : (
              <Grid container className='section-grid-content-wrapper'>
                {trending.map((product, index) => {
                  return (
                    <Grid item xs={6} sm={3}>
                      <ProductMiniItem product={product} key={index} />
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
