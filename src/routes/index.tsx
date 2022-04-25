import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Home from 'pages/Home';
import HooksPage from 'pages/HooksPage';
import PortalsPage from 'pages/PortalsPage';
import FormsExample from 'pages/FormsExample/Form';

const Routes = () => (
  <Switch>
    <Route path="/" element={<Home />} />
    <Route path="/hooks" element={<HooksPage />} />
    <Route path="/portals" element={<PortalsPage />} />
    <Route path="/forms" element={<FormsExample />} />
  </Switch>
);

export default Routes;
