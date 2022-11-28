import * as S from './styles';

const Navbar = (): JSX.Element => {
  console.log(window.location.origin);
  const originURL =
    window.location.origin === 'http://localhost:4200'
      ? '/myreact-cookbook'
      : '';

  return (
    <S.NavBar>
      <S.NavBarNavLink end to={`${originURL}/`}>
        About
      </S.NavBarNavLink>
      <S.NavBarNavLink to={`${originURL}/react-fundamentals`}>
        React Fundamentals
      </S.NavBarNavLink>
      <S.NavBarNavLink to={`${originURL}/forms`}>Forms</S.NavBarNavLink>
      <S.NavBarNavLink to={`${originURL}/state-management`}>
        State Management
      </S.NavBarNavLink>
    </S.NavBar>
  );
};

export default Navbar;
