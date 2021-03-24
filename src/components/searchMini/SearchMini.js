import React from 'react';
import './searchMini.scss';
import { useButtonContext } from '../../context/button_context';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import RotateCloseBtn from '../rotateCloseBtn/RotateCloseBtn';
import prch20_2 from '../../assets/prch20_2.jpg';
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
      <div className='wrap-mini-search'>
        <div className=' mini-header-title'>
          <h3>SEARCH OUR SITE</h3>
          <RotateCloseBtn action={action} />
        </div>
        <div className=' flex11 mini_cart_wrap'>
          <form action='/search' className='flex11 search-header'>
            <div className='cat-search'>
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
            <div className='input-search'>
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
          <div className='flex11 wraper-result-content'>
            <div className='result-content'>
              <ul className='result-list'>
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <span className='price'>$28.00</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <span className='price'>$28.00</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <span className='price'>$28.00</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={prch20_2} alt='' />
                    <div className='product-title'>
                      <span className='product-name'>Combat Hoodie</span>
                      <span className='price'>$28.00</span>
                    </div>
                  </a>
                </li>
                <a href='#' className='link-btn'></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMini;
