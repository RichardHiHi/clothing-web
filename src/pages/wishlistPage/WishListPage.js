import React, { useState, useEffect } from 'react';
import hero from '../../assets/hero.jpg';
import './wishListPage.scss';
import { useProductContext } from '../../context/product_context';
import Grid from '@material-ui/core/Grid';
import { ProductMiniItem, ProductMiniLoading } from '../../components';
const WishListPage = () => {
  const [numberGrid, setNumberGrid] = useState(0);
  const { wishProducts, productsLoading } = useProductContext();
  return (
    <div className='content'>
      <div className='hero-section margin'>
        <div className='hero-img' style={{ backgroundImage: `url(${hero})` }}>
          <span>View your wishlist products</span>
        </div>
      </div>
      <div className='product-view-wrapper'>
        <div className='product-view'>
          {Array.from({ length: 3 }, (_, i) => i).map((a, index) => {
            return (
              <div
                className={`product-view-btn column${index + 2} ${
                  numberGrid === index && 'active'
                }`}
                key={index}
                onClick={() => setNumberGrid(index)}
              ></div>
            );
          })}
        </div>
      </div>
      <div className='wish-list-section'>
        <div className='sale-container section-container'>
          {!productsLoading && (
            <Grid container className='section-grid-content-wrapper'>
              {wishProducts.map((product, index) => {
                return (
                  <Grid
                    item
                    xs={12 / (numberGrid + 2)}
                    sm={12 / (numberGrid + 2)}
                    md={12 / (numberGrid + 2)}
                    lg={12 / (numberGrid + 2)}
                    key={index}
                  >
                    <ProductMiniItem product={product} />
                  </Grid>
                );
              })}
            </Grid>
          )}
          {productsLoading && (
            <Grid container className='section-grid-content-wrapper'>
              {Array.from({ length: 9 }, (_, i) => i).map((product, index) => {
                return (
                  <Grid
                    item
                    xs={12 / (numberGrid + 2)}
                    sm={12 / (numberGrid + 2)}
                    md={12 / (numberGrid + 2)}
                    lg={12 / (numberGrid + 2)}
                    key={index}
                  >
                    <ProductMiniLoading />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
