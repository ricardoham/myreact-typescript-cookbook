import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import HooksPage from 'pages/HooksPage';
import PortalsPage from 'pages/PortalsPage';
import FormsExample from 'pages/FormsExample/Form';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/hooks" component={HooksPage} />
    <Route path="/portals" component={PortalsPage} />
    <Route path="/forms" component={FormsExample} />
  </Switch>
);

export default Routes;
