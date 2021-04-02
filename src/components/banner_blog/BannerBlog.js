import React from 'react';
import './bannerBlog.scss';
import Grid from '@material-ui/core/Grid';
import { banners } from '../../utils/data';

const BannerBlog = () => {
  return (
    <div className='banner-section'>
      <div className='banner-container'>
        <div className='banner-content-wrapper'>
          <Grid container>
            {banners.map((banner) => {
              return (
                <Grid item sx={12} sm={6} md={6} lg={6}>
                  <div className='banner-content'>
                    <a href=''>
                      <div
                        className='banner-img'
                        style={{ backgroundImage: `url(${banner.img})` }}
                      ></div>
                    </a>
                    <div className='banner-title'>
                      <h3>{banner.bigText}</h3>
                      <h4>{banner.smallText}</h4>
                    </div>
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
