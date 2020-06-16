import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar } from  './styles';

const Navbar = () => (
  <NavBar>
    <NavBar.NavLink exact to="/">
      Home
    </NavBar.NavLink>
    <NavBar.NavLink to="/hooks">
      Hooks
    </NavBar.NavLink>
  </NavBar>
);

export default Navbar;
