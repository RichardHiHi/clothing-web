import React from 'react';
import { useParams } from 'react-router-dom';
import { SingleProductHero, SingleProductContent } from '../components';
import { useProductContext } from '../context/product_context';
const SingleProductPage = () => {
  const { page, category } = useParams();
  const { singleProduct } = useProductContext();
  return (
    <div className='content'>
      <SingleProductHero page={page} category={category} />
      <SingleProductContent product={singleProduct} />
    </div>
  );
};

export default SingleProductPage;
