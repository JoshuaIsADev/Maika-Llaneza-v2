import { StyledHashLink, StyledNav } from './StyledNav';

function MainNav() {
  return (
    <nav>
      <StyledNav>
        <li>
          <StyledHashLink to='#about'>About</StyledHashLink>
        </li>
        <li>
          <StyledHashLink to='#writings'>Writings</StyledHashLink>
        </li>
        <li>
          <StyledHashLink to='#contact'>Contact</StyledHashLink>
        </li>
      </StyledNav>
    </nav>
  );
}

export default MainNav;
