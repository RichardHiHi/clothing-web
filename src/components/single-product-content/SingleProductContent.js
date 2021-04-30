import React from 'react';
import Grid from '@material-ui/core/Grid';
const SingleProductContent = ({ product }) => {
  console.log(product);
  return (
    <div className='single-product-section'>
      <div className='single-product-container section-container'>
        <div className='section-content-wrapper'>
          <Grid container className='section-grid-content-wrapper'>
            <Grid item sm={6} md={6} lg={6}></Grid>
            <Grid item sm={6} md={6} lg={6}>
              2
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SingleProductContent;
