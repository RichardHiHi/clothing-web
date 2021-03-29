import React from 'react';
import './loginMini.scss';
import { useButtonContext } from '../../context/button_context';
import RotateCloseBtn from '../rotateCloseBtn/RotateCloseBtn';
import CloseIcon from '@material-ui/icons/Close';
const LoginMini = () => {
  const { isMiniLoginOpen, miniAction } = useButtonContext();
  const action = () => {
    miniAction('close', 'MiniLogin');
  };
  return (
    <div
      className={
        isMiniLoginOpen ? 'login-mini login-mini-openned' : 'login-mini'
      }
    >
      <div className='mini-wrap'>
        <div className=' mini-header-title mini-header-title-shadow'>
          <h3>LOGIN</h3>
          <RotateCloseBtn action={action} />
        </div>
        <div className='mini-wrap-2'>
          <div className='content-login-wrapper'>
            <form action='' className='content-login'>
              <div
                className={
                  isMiniLoginOpen
                    ? 'content-login-form-row userName openned'
                    : 'content-login-form-row userName'
                }
              >
                <label for='userName'>User name</label>
                <input type='text' id='userName' />
              </div>
              <div
                className={
                  isMiniLoginOpen
                    ? 'content-login-form-row password openned'
                    : 'content-login-form-row password'
                }
              >
                <label for='password'>Password</label>
                <input type='text' id='password' />
              </div>
              <button
                className={
                  isMiniLoginOpen ? 'button_primary openned' : 'button_primary'
                }
              >
                SIGN IN
              </button>
              <div
                className={
                  isMiniLoginOpen
                    ? 'link-acc-wrapper openned'
                    : 'link-acc-wrapper'
                }
              >
                <p class='login-link-acc'>
                  New customer?
                  <a href='#'>Create your account</a>
                </p>
                <p class='login-link-acc'>
                  Lost password?
                  <a href='#'>Recover password</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMini;
