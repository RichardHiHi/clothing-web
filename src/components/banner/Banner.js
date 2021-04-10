import React, { useEffect, useState } from 'react';
import './banner.scss';
import Grid from '@material-ui/core/Grid';
import LoaddingImg from '../loadding-img/LoaddingImg';
import { fetchData } from '../../utils/helper';

const BannerBlog = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetchData('banner', setBanners);
  }, []);
  if (banners.length > 0) {
    return (
      <div className='banner-section'>
        <div className='banner-container'>
          <div className='section-content-wrapper'>
            <Grid container className='section-grid-content-wrapper'>
              {banners.map((banner, index) => {
                return (
                  <Grid item sx={12} sm={6} md={6} lg={6} key={banner.id}>
                    <div className='banner-content'>
                      <a href=''>
                        <div
                          className='banner-img'
                          style={{
                            backgroundImage: `url(${banner.img})`,
                          }}
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
  }
  return (
    <div className='banner-section'>
      <div className='banner-container'>
        <div className='section-content-wrapper'>
          <Grid container className='section-grid-content-wrapper'>
            {Array.from({ length: 2 }, (_, i) => i).map((a, index) => {
              return (
                <Grid item sx={12} sm={6} md={6} lg={6} key={index}>
                  <div className='banner-content'>
                    <a href=''>
                      <LoaddingImg classImg={'banner-img'} />
                    </a>
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
