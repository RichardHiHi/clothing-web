import React from 'react';
import ReactPlayer from 'react-player';
import './aboutPage.scss';
import aboutUs from '../../assets/aboutUs.mp4';
import aboutUsIMG from '../../assets/about-us.jpg';
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
        <h3 className='Featured-content__title'>Featured content</h3>
        <div className='Featured-content'>
          <div className='Featured-content__img'>
            <img src={aboutUsIMG} alt='empty'></img>
            <div className='Featured-content__content'>
              <h3>
                Striving for positive social change is at the heart of our
                purpose, culture and work.
              </h3>
              <p>
                The true social conscience of any organization becomes more
                evident in a crisis. This collection of articles shares our
                view-points on the potential role of tech organizations and
                technologists during and post the Covid-19 pandemic.
              </p>
              <span className='Featured-content__label'>Report</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
