import React from 'react';
import './collectionList.scss';
import Grid from '@material-ui/core/Grid';

const CollectionList = () => {
  return (
    <div className='section-collection-list'>
      <div className='collection-list-container'>
        <div className='collection-list'>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <h2>1</h2>
            </Grid>
            <Grid item xs={6} sm={3}>
              <h2>2</h2>
            </Grid>
            <Grid item xs={6} sm={3}>
              <h2>2</h2>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
