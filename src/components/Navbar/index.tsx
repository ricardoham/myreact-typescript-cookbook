import React from 'react';
import { NavBar } from './styles';

const Navbar = () => (
  <NavBar>
    <NavBar.NavLink exact="true" to="/">
      Home
    </NavBar.NavLink>
    <NavBar.NavLink to="/hooks">Hooks</NavBar.NavLink>
    <NavBar.NavLink to="/portals">React Portals</NavBar.NavLink>
    <NavBar.NavLink to="/forms">Forms Example</NavBar.NavLink>
  </NavBar>
);

export default Navbar;
