import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 8px 12px 16px 12px;
`;

export const NavBarNavLink = styled(NavLink)`
  margin: 8px;
  font-size: 1em;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  text-decoration: none;
  text-indent: 0.3em;
  color: #181818;
  &.active {
    color: #9c88ff;
    font-weight: 600;
  }
  border-bottom: 3px solid transparent;
`;

export { NavBar };
