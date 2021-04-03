import React from 'react';
import './banner.scss';
import Grid from '@material-ui/core/Grid';
import { banners } from '../../utils/data';

const BannerBlog = () => {
  return (
    <div className='banner-section'>
      <div className='banner-container'>
        <div className='banner-content-wrapper'>
          <Grid container className='banner-list-container'>
            {banners.map((banner, index) => {
              return (
                <Grid item sx={12} sm={6} md={6} lg={6}>
                  <div className='banner-content'>
                    <a href=''>
                      <div
                        className='banner-img'
                        style={{ backgroundImage: `url(${banner.img})` }}
                      ></div>
                    </a>
                    {/* change h3 h4 */}
                    {index % 2 == 0 ? (
                      <div className='banner-title'>
                        <h3>{banner.bigText}</h3>
                        <h4>{banner.smallText}</h4>
                      </div>
                    ) : (
                      <div className='banner-title'>
                        <h4>{banner.smallText}</h4>
                        <h3>{banner.bigText}</h3>
                      </div>
                    )}
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default BannerBlog;
