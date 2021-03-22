import React from 'react';
import './sidebar.scss';
import CloseIcon from '@material-ui/icons/Close';
import { useButtonContext } from '../../context/button_context';
const SideBar = () => {
  const { isSideBarOpen, miniAction } = useButtonContext();
  return (
    <div className={isSideBarOpen ? 'sidebar sidebar-openned' : 'sidebar '}>
      <button onClick={() => miniAction('close', 'SideBar')}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default SideBar;
