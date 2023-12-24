import Logout from '../features/authentication/Logout';
import { StyledNav, StyledNavLink } from './StyledNav';

function MainNavCms() {
  return (
    <nav>
      <StyledNav>
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
      </StyledNav>
    </nav>
  );
}

export default MainNavCms;
