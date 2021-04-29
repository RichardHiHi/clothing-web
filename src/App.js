import React from 'react';
import './sassStyles/global.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
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
  Toolbar,
} from './components';
import {
  HomePage,
  BlogPage,
  AboutPage,
  ProductsPage,
  SingleProductPage,
} from './pages';
import ScrollToTop from 'react-router-scroll-top';
import { useButtonContext } from './context/button_context';
function App() {
  const { setIsInProductPage } = useButtonContext();
  let location = useLocation();
  React.useEffect(() => {
    if (location.pathname === '/products') {
      setIsInProductPage(true);
    } else {
      setIsInProductPage(false);
    }
  }, [location]);
  return (
    <ScrollToTop>
      <Navbar />
      <SideBar />
      <MaskOverlay />
      <SearchMini />
      <LoginMini />
      <CartMini />
      <FilterMini />
      <Toolbar />
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
        <Route
          exact
          path='/singleProduct/:page?/:category?'
          children={<SingleProductPage />}
        />
      </Switch>
      <Footer />
    </ScrollToTop>
  );
}

export default App;
