import Container from './Container';
import MainNav from './MainNav';
import StyledHeader from './StyledHeader';
// import Row from './Row';

function Header() {
  return (
    <StyledHeader>
      <Container $variation='default'>
        <MainNav />
      </Container>
    </StyledHeader>
  );
}
export default Header;
