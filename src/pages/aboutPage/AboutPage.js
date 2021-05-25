import React from 'react';
import ReactPlayer from 'react-player';
import './aboutPage.scss';
import aboutUs from '../../assets/aboutUs.mp4';
import { useProductContext } from '../../context/product_context';
import Grid from '@material-ui/core/Grid';
const AboutPage = () => {
  const { about } = useProductContext();
  return (
    <div className='content'>
      <div className='video-container'>
        <ReactPlayer
          url={aboutUs}
          width='100%'
          height='100%'
          config={{
            file: {
              attributes: {
                autoPlay: true,
                muted: true,
              },
            },
          }}
          loop={true}
        />
        <div className='video__overlay'>
          <h2>About Us</h2>
          <span>Matching style and class with luxury and comfort.</span>
        </div>
      </div>
      <div className='about-us__content section-container'>
        <div className='section-title-container'>
          <h3>
            <span>MY COMPANY</span>
          </h3>
          <span>Top company in this week</span>
        </div>
        {about.map((item, index) => {
          return (
            <Grid container key={index}>
              {item.position ? (
                <>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <div
                      className='about-us__img'
                      style={{
                        backgroundImage: `url(${item.img})`,
                      }}
                    ></div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <div className='about-us__content__title'>
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <div className='about-us__content__title'>
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <div
                      className='about-us__img'
                      style={{
                        backgroundImage: `url(${item.img})`,
                      }}
                    ></div>
                  </Grid>
                </>
              )}
            </Grid>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;
