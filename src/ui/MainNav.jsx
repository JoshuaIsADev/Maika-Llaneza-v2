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

function MainNav() {
  return (
    <nav>
      <GlobalStyles />
      <NavList>
        <li>
          <StyledNavLink to='/about'>about</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/writings'>writings</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/blog'>blog</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/contact'>contact</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/aboutcms'>about cms</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/writingscms'>writings cms</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/blogcms'>blog cms</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/contactcms'>contact cms</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;