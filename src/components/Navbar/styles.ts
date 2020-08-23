import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar: any = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #9c88ff;
  border-radius: 8px;
  margin: 8px 12px 16px 12px;
`;

NavBar.NavLink = styled(NavLink)`
  margin: 8px;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  text-decoration: none;
  text-indent: 0.3em;
  color: #181818;
  border-bottom: 3px solid transparent;
`;

export { NavBar };
