import React, { useEffect } from 'react';
import './singleProductRecommend.scss';
import Slider from 'react-slick';
import { useProductContext } from '../../context/product_context';
import ProductMiniItem from '../product-mini-item/ProductMiniItem';
const SingleProductRecommend = () => {
  const { products } = useProductContext();
  var settingsSingleProduct = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  useEffect(() => {
    document
      .querySelector('.sp-recommendations-content')
      .addEventListener('mousedown', (e) => {
        e.preventDefault();
      });
  });
  return (
    <div className='single-product-recommendations-section'>
      <div className='single-product-recommendations-container section-container'>
        <div className='section-content-wrapper'>
          <div className='sp-recommendations-content'>
            <div className='sp-recommendations-content_title'>
              <h3>You may also like</h3>
            </div>
            <Slider {...settingsSingleProduct}>
              {products.slice(0, 5).map((product, index) => {
                return <ProductMiniItem product={product} />;
              })}
            </Slider>
          </div>
          <div className='sp-recommendations-content'>
            <div className='sp-recommendations-content_title'>
              <h3>Recently viewed products</h3>
            </div>
            <Slider {...settingsSingleProduct}>
              {products.slice(0, 5).map((product, index) => {
                return <ProductMiniItem product={product} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductRecommend;
