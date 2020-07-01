import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../configs/history';
import Home from '../pages';
import Navbar from '../components/Navbar';
import HooksPage from '../pages/HooksPage'

const Routes = () => (
  <main>
    <Router history={history}>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hooks" component={HooksPage} />
      </Switch>
    </Router>
  </main>
)

export default Routes;
