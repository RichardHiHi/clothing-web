import React from 'react';
import './sassStyles/global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import firebase from './firebase';
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
        <Route path='/'>
          <BlogPage />
          {/* <HomePage /> */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
