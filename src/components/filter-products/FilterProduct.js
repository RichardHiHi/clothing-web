import React, { useState, useEffect } from 'react';
import './filterProduct.scss';
import Grid from '@material-ui/core/Grid';
import Filter from '../filter/Filter';
import { useProductContext } from '../../context/product_context';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import ProductMiniItem from '../product-mini-item/ProductMiniItem';
import { useButtonContext } from '../../context/button_context';
import SortIcon from '@material-ui/icons/Sort';

const FilterProduct = () => {
  const { products } = useProductContext();

  const [numberGrid, setNumberGrid] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [productPerPage, setProductPerpage] = useState(8);
  const [pageNumbers, setPageNumbers] = useState(0);

  const { miniAction } = useButtonContext();
  const actionOpenFilterMini = () => {
    miniAction('open', 'FilterMini');
  };
  const actionOpenSortMini = () => {
    miniAction('open', 'SortMini');
  };
  const switchPage = (value) => {
    if (value === 'inc') {
      setCurrentPage((oldpage) => oldpage + 1);
    } else {
      setCurrentPage((oldpage) => oldpage - 1);
    }
  };
  useEffect(() => {
    setPageNumbers(Math.round(products.length / productPerPage));
  }, [products]);
  return (
    <div className='filter-and-product-section'>
      <div className='filter-and-product-container section-container'>
        <div className='filter-and-product-wrapper section-content-wrapper'>
          <div className='filter-and-product-header'>
            <div className='filter-btn' onClick={actionOpenFilterMini}>
              <FilterListOutlinedIcon />
              <span>Filter</span>
            </div>
            <div className='product-view'>
              {Array.from({ length: 3 }, (_, i) => i).map((a, index) => {
                return (
                  <div
                    className={`product-view-btn column${index + 2} ${
                      numberGrid === index && 'active'
                    }`}
                    onClick={() => setNumberGrid(index)}
                  ></div>
                );
              })}
            </div>
            <div className='sort-btn-wrapper'>
              <div className='filter-btn' onClick={actionOpenSortMini}>
                <SortIcon />
                <span>Sort</span>
              </div>
              <select className='filter-select' name='product_type'>
                <option value='*'>Sort</option>
                <option value='Acessories'>Best selling</option>
                <option value='Bag'>Alphabetically, A-Z</option>
                <option value='Camera'>Alphabetically, Z-A</option>
                <option value='Decor'>Price, low to high</option>
                <option value='Earphones'>Price, high to low</option>
              </select>
            </div>
          </div>
          <Grid container>
            <Grid item xs={0} sm={0} md={2} lg={2}>
              <div className='wrapper-filter'>
                <Filter />
              </div>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={10}
              lg={10}
              className='section-grid-content-wrapper'
            >
              {products
                .slice(
                  currentPage * productPerPage,
                  currentPage * productPerPage + productPerPage
                )
                .map((product) => (
                  <Grid
                    item
                    xs={12 / (numberGrid + 2)}
                    sm={12 / (numberGrid + 2)}
                    md={12 / (numberGrid + 2)}
                    lg={12 / (numberGrid + 2)}
                  >
                    <ProductMiniItem product={product} />
                  </Grid>
                ))}
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className='pagination'>
                  <div className='section-container'>
                    <div className='section-content-wrapper bottom margin center'>
                      <button
                        className={
                          currentPage === 0
                            ? 'pagination-btn none'
                            : 'pagination-btn'
                        }
                        onClick={() => switchPage('dec')}
                      >
                        Prev
                      </button>
                      {Array.from({ length: pageNumbers }, (_, i) => i).map(
                        (a, index) => {
                          return (
                            <button
                              className={
                                index === currentPage
                                  ? 'number-pagination-btn actived'
                                  : 'number-pagination-btn'
                              }
                              onClick={() => setCurrentPage(index)}
                            >
                              {index + 1}
                            </button>
                          );
                        }
                      )}
                      <button
                        className={
                          currentPage === pageNumbers - 1 ||
                          products.length === 0
                            ? 'pagination-btn none'
                            : 'pagination-btn'
                        }
                        onClick={() => {
                          switchPage('inc');
                        }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
