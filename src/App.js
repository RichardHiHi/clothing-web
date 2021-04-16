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
import { HomePage, BlogPage } from './pages';

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
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/blog'>
          <BlogPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
