import React from 'react';
import './searchMini.scss';
import { useButtonContext } from '../../context/button_context';
import CloseIcon from '@material-ui/icons/Close';
const SearchMini = () => {
  const { isMiniSearchOpen, miniAction } = useButtonContext();
  console.log(isMiniSearchOpen);
  return (
    <div
      className={
        isMiniSearchOpen ? 'search-mini search-mini-openned' : 'search-mini'
      }
    >
      <button onClick={() => miniAction('close', 'MiniSearch')}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default SearchMini;
