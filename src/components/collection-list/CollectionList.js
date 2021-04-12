import React, { useEffect, useState } from 'react';
import './collectionList.scss';
import Grid from '@material-ui/core/Grid';
import Loading from '../loadding-img/LoaddingImg';
import { fetchData } from '../../utils/helper';

const CollectionList = () => {
  const [colls, setColls] = useState([]);
  useEffect(() => {
    fetchData('collection', setColls);
  }, []);
  const find = (position, imgTitle) => {
    return colls.find((coll) => coll.position === position)[imgTitle];
  };
  return (
    <div className='section-collection-list'>
      <div className='collection-list-container section-container'>
        <div className='collection-list '>
          <Grid container className='section-grid-content-wrapper '>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className='item-collection-content'>
                <a href='#' className='item-collection-link'>
                  {colls.length > 0 ? (
                    <div
                      className='item-collection-img'
                      style={{
                        backgroundImage: `url(${find('left', 'img')})`,
                      }}
                    ></div>
                  ) : (
                    <Loading classImg={'item-collection-img'} />
                  )}
                </a>
                {colls.length > 0 && (
                  <div className='item-collection-title'>
                    <h3>{find('left', 'title')}</h3>
                  </div>
                )}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <div className='row'>
                <div className='item-collection-content '>
                  <a href='#' className='item-collection-link'>
                    {colls.length > 0 ? (
                      <div
                        className='item-collection-img'
                        style={{
                          backgroundImage: `url(${find('center-top', 'img')})`,
                        }}
                      ></div>
                    ) : (
                      <Loading classImg={'item-collection-img'} />
                    )}
                  </a>
                  {colls.length > 0 && (
                    <div className='item-collection-title'>
                      <h3>{find('center-top', 'title')}</h3>
                    </div>
                  )}
                </div>
                <div className='item-collection-content'>
                  <a href='#' className='item-collection-link'>
                    {colls.length > 0 ? (
                      <div
                        className='item-collection-img'
                        style={{
                          backgroundImage: `url(${find(
                            'center-bottom',
                            'img'
                          )})`,
                        }}
                      ></div>
                    ) : (
                      <Loading classImg={'item-collection-img'} />
                    )}
                  </a>
                  {colls.length > 0 && (
                    <div className='item-collection-title'>
                      <h3>{find('center-bottom', 'title')}</h3>
                    </div>
                  )}
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <div className='item-collection-content'>
                <a href='#' className='item-collection-link'>
                  {colls.length > 0 ? (
                    <div
                      className='item-collection-img'
                      style={{
                        backgroundImage: `url(${find('right', 'img')})`,
                      }}
                    ></div>
                  ) : (
                    <Loading classImg={'item-collection-img'} />
                  )}
                </a>
                {colls.length > 0 && (
                  <div className='item-collection-title'>
                    <h3>{find('right', 'title')}</h3>
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
