import React from 'react';
import './searchMini.scss';
import { useButtonContext } from '../../context/button_context';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import RotateCloseBtn from '../rotateCloseBtn/RotateCloseBtn';
import prch20_2 from '../../assets/prch20_2.jpg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useFilterContext } from '../../context/filter_context';
import { formatPrice } from '../../utils/helper';
import { useProductContext } from '../../context/product_context';
import { Link } from 'react-router-dom';
const SearchMini = () => {
  const { isMiniSearchOpen, miniAction } = useButtonContext();
  const action = () => {
    miniAction('close', 'MiniSearch');
  };
  const { getSingleProduct } = useProductContext();
  const {
    color,
    size,
    category,
    brand,
    filter: {
      color: filteredColor,
      minPrice,
      maxPrice,
      currentMinPrice,
      currentMaxPrice,
      category: filteredCategory,
      size: filteredSize,
      brand: filteredBrand,
    },
    setCurrentMinPrice,
    setCurrentMaxPrice,
    filterUpdate,
    filteredProducts,
    clearAllFilter,
  } = useFilterContext();

  return (
    <div
      className={
        isMiniSearchOpen ? 'search-mini search-mini-openned' : 'search-mini'
      }
    >
      <div className='mini-wrap'>
        <div className=' mini-header-title'>
          <h3>SEARCH OUR SITE</h3>
          <RotateCloseBtn action={action} />
        </div>
        <div className='mini-wrap-2'>
          <form action='/search' className='flex11 search-header'>
            <div
              className={isMiniSearchOpen ? 'cat-search openned' : 'cat-search'}
            >
              <select name='MINIcategory' onChange={filterUpdate}>
                <option value='All'>All Categories</option>
                {category.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
            <div
              className={
                isMiniSearchOpen ? 'input-search openned' : 'input-search'
              }
            >
              <input
                class='input'
                type='text'
                name='search'
                placeholder='Search for products'
                onChange={filterUpdate}
              />
              <button class='input-submit-btn' type='submit'>
                <SearchOutlinedIcon />
              </button>
            </div>
          </form>
          <div className='result-header'>
            <span>Search Results:</span>
          </div>
          <div className='wraper-result-content'>
            <div
              className={
                isMiniSearchOpen ? 'result-content openned' : 'result-content'
              }
            >
              <ul className='result-list'>
                {filteredProducts.map((product) => {
                  return (
                    <li>
                      <Link
                        to={`/singleProduct/miniSearch/${category}`}
                        onClick={() => {
                          getSingleProduct(product.id);
                          miniAction('close', 'MiniSearch');
                        }}
                      >
                        <img
                          src={product.colorImg[0].img[0].thumbnails.large.url}
                          alt=''
                        />
                        <div className='product-title'>
                          <span className='product-name'>{product.name}</span>
                          {product.onSale ? (
                            <div className='price-title'>
                              <del>{formatPrice(product.price)}</del>
                              <ins>
                                {formatPrice(
                                  product.price * (1 - product.onSale)
                                )}
                              </ins>
                              <span class='onsale-label'>-25%</span>
                            </div>
                          ) : (
                            <div className='price-title none-decoration'>
                              <del>{formatPrice(product.price)}</del>
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                })}

                <div className='mini-search-footer'>
                  <div>
                    <a href='#' className='link-to-all-product-btn'>
                      View All
                    </a>
                  </div>
                  <div className='arrow-icon'>
                    <ArrowForwardIcon />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMini;
