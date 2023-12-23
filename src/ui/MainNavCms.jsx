import styled from 'styled-components';
// import GlobalStyles from '../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';
import Logout from '../features/authentication/Logout';

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-grey-900);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-300);
    /* border-bottom: 2px solid var(--color-grey-100); */
  }
`;

function MainNavCms() {
  return (
    <nav>
      {/* <GlobalStyles /> */}
      <NavList>
        <li>
          <StyledNavLink to='/aboutcms'>About</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/projectscms'>Projects</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/contactscms'>Contact</StyledNavLink>
        </li>
        <Logout />
      </NavList>
    </nav>
  );
}

export default MainNavCms;
