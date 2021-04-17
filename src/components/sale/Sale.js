import React, { useEffect, useState } from 'react';
import { getProduct } from '../../utils/helper';
import './sale.scss';
import Grid from '@material-ui/core/Grid';
import ProductMiniItem from '../product-mini-item/ProductMiniItem';
import ProductMiniLoading from '../product-mimi-loading/ProductMiniLoading';
import { useProductContext } from '../../context/product_context';

const Sale = () => {
  const { saleProducts: sale, productsLoading: loading } = useProductContext();
  return (
    <div className='sale-section'>
      <div className='sale-container section-container'>
        <div className='sale-wrapper section-content-wrapper'>
          <div className='section-title-container'>
            <h3>
              <span>BEST SELLER</span>
            </h3>
            <span>Top sale in this week</span>
          </div>
          <div className='sale-product-wrapper'>
            {loading ? (
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
                {sale.slice(0, 8).map((product, index) => {
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

export default Sale;
