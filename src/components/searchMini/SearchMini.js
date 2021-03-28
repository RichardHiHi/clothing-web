import React from 'react';
import './searchMini.scss';
import { useButtonContext } from '../../context/button_context';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import RotateCloseBtn from '../rotateCloseBtn/RotateCloseBtn';
import prch20_2 from '../../assets/prch20_2.jpg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const SearchMini = () => {
  const { isMiniSearchOpen, miniAction } = useButtonContext();
  const action = () => {
    miniAction('close', 'MiniSearch');
  };
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
              <select name='product_type'>
                <option value='*'>All Categories</option>
                <option value='Acessories'>Acessories</option>
                <option value='Bag'>Bag</option>
                <option value='Camera'>Camera</option>
                <option value='Decor'>Decor</option>
                <option value='Earphones'>Earphones</option>
                <option value='Electric'>Electric</option>
                <option value='Furniture'>Furniture</option>
                <option value='Headphone'>Headphone</option>
                <option value='Men'>Men</option>
                <option value='Shoes'>Shoes</option>
                <option value='Speaker'>Speaker</option>
                <option value='Watch'>Watch</option>
                <option value='Women'>Women</option>
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
                name='q'
                placeholder='Search for products'
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
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <div className='price-title'>
                        <del>$60.00</del>
                        <ins>$45.00</ins>
                        <span class='onsale-label'>-25%</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <div className='price-title'>
                        <del>$60.00</del>
                        <ins>$45.00</ins>
                        <span class='onsale-label'>-25%</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <div className='price-title'>
                        <del>$60.00</del>
                        <ins>$45.00</ins>
                        <span class='onsale-label'>-25%</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <div className='price-title'>
                        <del>$60.00</del>
                        <ins>$45.00</ins>
                        <span class='onsale-label'>-25%</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <div className='price-title'>
                        <del>$60.00</del>
                        <ins>$45.00</ins>
                        <span class='onsale-label'>-25%</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <div className='price-title'>
                        <del>$60.00</del>
                        <ins>$45.00</ins>
                        <span class='onsale-label'>-25%</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <div className='price-title'>
                        <span className='price'>$28.00</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <div className='price-title'>
                        <del>$60.00</del>
                        <ins>$45.00</ins>
                        <span class='onsale-label'>-25%</span>
                      </div>
                    </div>
                  </a>
                </li>
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
