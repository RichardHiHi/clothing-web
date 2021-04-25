import React, { useEffect, useState } from 'react';
import './backToTop.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { scrollToTop } from '../../utils/helper';
const BackToTop = () => {
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (e.path[1].scrollY > 75) {
        document.querySelector('.back-to-top-btn').classList.add('hidden');
      } else {
        document.querySelector('.back-to-top-btn').classList.remove('hidden');
      }
    });
  });
  return (
    <button onClick={scrollToTop} className='back-to-top-btn'>
      <ExpandLessIcon />
    </button>
  );
};

export default BackToTop;
