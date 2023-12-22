import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-grey-900);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-300);
    border-bottom: 2px solid var(--color-grey-100);
  }
`;

function MainNavCms() {
  return (
    <nav>
      <GlobalStyles />
      <NavList>
        <li>
          <StyledNavLink to='/aboutcms'>about</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/projectscms'>projects</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/contactscms'>contact</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNavCms;
