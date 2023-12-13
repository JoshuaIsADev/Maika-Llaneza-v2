import styled from 'styled-components';
import MainNavCms from './MainNavCms';
// import Row from './Row';

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--color-grey-0);
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

const H1 = styled.h1`
  font-size: 1.4rem;
`;

function HeaderCms() {
  return (
    <StyledHeader>
      <H1 as='h2'>maikallaneza.com | content manager</H1>
      <MainNavCms />
    </StyledHeader>
  );
}
export default HeaderCms;
