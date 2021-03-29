import React from 'react';
import './sassStyles/global.scss';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Navbar,
  SideBar,
  MaskOverlay,
  SearchMini,
  LoginMini,
  CartMini,
} from './components';
import { HomePage } from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <SideBar />
      <MaskOverlay />
      <SearchMini />
      <LoginMini />
      <CartMini />
      <Switch>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
