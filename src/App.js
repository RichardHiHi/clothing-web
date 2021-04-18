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
import { HomePage, BlogPage, AboutPage } from './pages';

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
        <Route path='/about'>
          <AboutPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
