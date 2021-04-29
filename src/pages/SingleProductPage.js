import React from 'react';
import { useParams } from 'react-router-dom';
import { SingleProductHero } from '../components';
import { useProductContext } from '../context/product_context';
const SingleProductPage = () => {
  const { page, category } = useParams();
  const { singleProduct } = useProductContext();
  return (
    <div className='content'>
      <SingleProductHero page={page} category={category} />
    </div>
  );
};

export default SingleProductPage;
