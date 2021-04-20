import React from 'react';
import './sortMini.scss';
import { useButtonContext } from '../../context/button_context';
import RotateCloseBtn from '../rotateCloseBtn/RotateCloseBtn';

const SortMini = () => {
  const { isSortMiniOpen, miniAction } = useButtonContext();

  const action = () => {
    miniAction('close', 'SortMini');
  };

  return (
    <div className={isSortMiniOpen ? 'sort-mini openned' : 'sort-mini'}>
      <div className='filter-mini-header-title'>
        <h3>FILTER</h3>
        <RotateCloseBtn action={action} />
      </div>
      <div className='search-filter-wrapper filter-wrapper padding-20px'>
        <div className='filter-title'>
          <h5>Sort by</h5>
        </div>
        <ul className='sort-list'>
          <li className='sort-item active'>Featured</li>
          <li className='sort-item'>Best Selling</li>
          <li className='sort-item'>Alphabetically, A-Z</li>
          <li className='sort-item'>Alphabetically, Z-A</li>
          <li className='sort-item'>Price, Low To High</li>
          <li className='sort-item'>Price, High To Low</li>
          <li className='sort-item'>Date, Old To New</li>
          <li className='sort-item'>Date, New To Old</li>
        </ul>
        <button onClick={action} className='filter-mini-btn button_primary'>
          Sort
        </button>
      </div>
    </div>
  );
};

export default SortMini;
