import React from 'react';
import './rotateCloseBtn.scss';
import { useButtonContext } from '../../context/button_context';
const RotateCloseBtn = ({ action }) => {
  return (
    <div className='wrap-btn-rotate' onClick={() => action()}>
      <div className='btn-rotate'>
        <div className='line-1'>
          <div className='line-2'></div>
        </div>
      </div>
    </div>
  );
};

export default RotateCloseBtn;
