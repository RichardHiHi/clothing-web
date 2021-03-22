import React from 'react';
import './sassStyles/global.scss';
import logo from './assets/logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import { HomePage } from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
