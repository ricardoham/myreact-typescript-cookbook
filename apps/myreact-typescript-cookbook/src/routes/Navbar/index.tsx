import React from 'react';
import * as S from './styles';

const Navbar = (): JSX.Element => (
  <S.NavBar>
    <S.NavBarNavLink end to="/">
      Home
    </S.NavBarNavLink>
    <S.NavBarNavLink to="/hooks">Hooks</S.NavBarNavLink>
    <S.NavBarNavLink to="/portals">React Portals</S.NavBarNavLink>
    <S.NavBarNavLink to="/forms">Forms Example</S.NavBarNavLink>
    <S.NavBarNavLink to="/redux">Redux</S.NavBarNavLink>
  </S.NavBar>
);

export default Navbar;
