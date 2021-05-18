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
  SingleProductModal,
  CartModal,
} from './components';
import {
  HomePage,
  BlogPage,
  AboutPage,
  ProductsPage,
  SingleProductPage,
  CartPage,
  WishListPage,
  PrivateRouter,
  CheckOutPage,
} from './pages';
import ScrollToTop from 'react-router-scroll-top';
import { useButtonContext } from './context/button_context';
function App() {
  const { setIsInProductPage, setPage } = useButtonContext();
  let location = useLocation();
  React.useEffect(() => {
    if (location.pathname === '/products') {
      setIsInProductPage(true);
    } else {
      setIsInProductPage(false);
    }
    setPage(location.pathname);
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
      <SingleProductModal />
      <CartModal />
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
        <Route exact path='/cart'>
          <CartPage />
        </Route>
        <Route exact path='/wishList'>
          <WishListPage />
        </Route>
        <PrivateRouter exact path='/checkOut'>
          <CheckOutPage />
        </PrivateRouter>
        <Route exact path='/singleProduct/:page?/:category?'>
          <SingleProductPage />
        </Route>
      </Switch>
      <Footer />
    </ScrollToTop>
  );
}

export default App;
