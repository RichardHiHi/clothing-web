import React from 'react';
import './loginMini.scss';
import { useButtonContext } from '../../context/button_context';
import CloseIcon from '@material-ui/icons/Close';
const LoginMini = () => {
  const { isMiniLoginOpen, miniAction } = useButtonContext();
  return (
    <div
      className={
        isMiniLoginOpen ? 'login-mini login-mini-openned' : 'login-mini'
      }
    >
      <button onClick={() => miniAction('close', 'MiniLogin')}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default LoginMini;
