import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar: any = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eceff1;
`;

NavBar.NavLink = styled(NavLink)`
  margin: 1em;
  font-size: 2em;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: .3em;
  text-indent: .3em;
  color: #181818;
  border-bottom: 3px solid transparent;
`;

export { NavBar };
