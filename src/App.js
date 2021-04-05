import React from 'react';
import './sassStyles/global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Navbar,
  SideBar,
  MaskOverlay,
  SearchMini,
  LoginMini,
  CartMini,
  Footer,
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
      <Footer />
    </Router>
  );
}

export default App;
