import React from 'react';
import * as S from './styles';

const Navbar = (): JSX.Element => (
  <S.NavBar>
    <S.NavBarNavLink end to="/">
      About
    </S.NavBarNavLink>
    <S.NavBarNavLink to="/react-fundamentals">
      React Fundamentals
    </S.NavBarNavLink>
    <S.NavBarNavLink to="/forms">Forms</S.NavBarNavLink>
    <S.NavBarNavLink to="/state-management">State Management</S.NavBarNavLink>
  </S.NavBar>
);

export default Navbar;
