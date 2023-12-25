import Container from './Container';
import MainNav from './MainNav';
import StyledHeader from './StyledHeader';

function Header() {
  return (
    <StyledHeader>
      <Container $variation='header'>
        <MainNav />
      </Container>
    </StyledHeader>
  );
}
export default Header;
