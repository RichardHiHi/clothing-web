import React from 'react';
import './collectionList.scss';
import Grid from '@material-ui/core/Grid';
import bag from '../../assets/collect/bag.jpg';
import shoes from '../../assets/collect/shoes.jpeg';
import watch from '../../assets/collect/watch.jpg';
import women from '../../assets/collect/women.jpg';

const CollectionList = () => {
  return (
    <div className='section-collection-list'>
      <div className='collection-list-container'>
        <div className='collection-list'>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className='item-collection-content'>
                <a href='#' className='item-collection-link'>
                  <div
                    className='item-collection-img'
                    style={{ backgroundImage: `url(${women})` }}
                  ></div>
                </a>
                <div className='item-collection-title'>
                  <h3>Women</h3>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <div className='row'>
                <div className='item-collection-content '>
                  <a href='#' className='item-collection-link'>
                    <div
                      className='item-collection-img'
                      style={{ backgroundImage: `url(${shoes})` }}
                    ></div>
                  </a>
                  <div className='item-collection-title'>
                    <h3>Acessories</h3>
                  </div>
                </div>
                <div className='item-collection-content'>
                  <a href='#' className='item-collection-link'>
                    <div
                      className='item-collection-img'
                      style={{ backgroundImage: `url(${bag})` }}
                    ></div>
                  </a>
                  <div className='item-collection-title'>
                    <h3>Footwear</h3>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <div className='item-collection-content'>
                <a href='#' className='item-collection-link'>
                  <div
                    className='item-collection-img'
                    style={{ backgroundImage: `url(${watch})` }}
                  ></div>
                </a>
                <div className='item-collection-title'>
                  <h3>Watch</h3>
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
