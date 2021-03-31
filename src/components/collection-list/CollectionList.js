import React from 'react';
import './collectionList.scss';
import Grid from '@material-ui/core/Grid';
import bag from '../../assets/collect/bag.jpg';
import shoes from '../../assets/collect/shoes.jpeg';
import watch from '../../assets/collect/watch.jpeg';
import women from '../../assets/collect/women.jpg';
import women_1 from '../../assets/collect/women_1.jpg';

const CollectionList = () => {
  return (
    <div className='section-collection-list'>
      <div className='collection-list-container'>
        <div className='collection-list'>
          <Grid container spacing={3}>
            <Grid item md={12} lg={6}>
              <div className='item-collection-content'>
                {/* <a href='#'>
                  <img src={women} alt='' />
                </a> */}
                <div
                  className='item-collection-title'
                  style={{ backgroundImage: `url(${women})` }}
                >
                  <h3>hello</h3>
                </div>
              </div>
            </Grid>
            <Grid item md={6} lg={3}>
              <Grid md={12}>
                <div className='item-collection-content'>
                  {/* <a href='#'>
                    <img src={bag} alt='' />
                  </a> */}
                  <div className='item-collection-title'>
                    <h3>hello</h3>
                  </div>
                </div>
              </Grid>
              <Grid md={12}>
                <div className='item-collection-content'>
                  {/* <a href='#'>
                    <img src={shoes} alt='' />
                  </a> */}
                  <div className='item-collection-title'>
                    <h3>hello</h3>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid item md={6} lg={3}>
              <div className='item-collection-content'>
                {/* <a href='#'>
                  <img src={women} alt='' />
                </a> */}
                <div className='item-collection-title'>
                  <h3>hello</h3>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
