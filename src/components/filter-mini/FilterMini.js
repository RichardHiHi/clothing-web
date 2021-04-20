import React from 'react';
import Filter from '../filter/Filter';
import './filterMini.scss';
import RotateCloseBtn from '../rotateCloseBtn/RotateCloseBtn';
import { useButtonContext } from '../../context/button_context';

const FilterMini = () => {
  const { isFilterMiniOpen, miniAction } = useButtonContext();
  console.log(isFilterMiniOpen);
  const action = () => {
    miniAction('close', 'FilterMini');
  };
  return (
    <div className={isFilterMiniOpen ? 'filter-mini openned' : 'filter-mini'}>
      <div className=' filter-mini-header-title'>
        <h3>FILTER</h3>
      </div>
      <div className='filter-wrapper'>
        <Filter />
        <button onClick={action} className='filter-mini-btn button_primary'>
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterMini;
