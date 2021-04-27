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
  FilterMini,
  SortMini,
} from './components';
import { HomePage, BlogPage, AboutPage, ProductsPage } from './pages';
import ScrollToTop from 'react-router-scroll-top';
function App() {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <SideBar />
        <MaskOverlay />
        <SearchMini />
        <LoginMini />
        <CartMini />
        <FilterMini />
        <SortMini />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/blog'>
            <BlogPage />
          </Route>
          <Route exact path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/products'>
            <ProductsPage />
          </Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
