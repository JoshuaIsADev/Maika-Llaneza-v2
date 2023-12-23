import styled from 'styled-components';
import MainNav from './MainNav';
// import Row from './Row';

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--color-grey-0);
  padding: 2rem;
  max-width: var(--container-width);
  margin: auto;

  @media screen and (max-width: 480px) {
    &:link,
    &:visited {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

const H1 = styled.h1`
  font-size: 1.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <H1 as='h2'>Maika Llaneza</H1>
      <MainNav />
    </StyledHeader>
  );
}
export default Header;
