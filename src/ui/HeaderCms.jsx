import styled from 'styled-components';
import MainNavCms from './MainNavCms';
import Logout from '../features/authentication/Logout';
// import Row from './Row';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  padding: 2rem;
  max-width: var(--container-width);
  margin: auto;
  padding-bottom: 10rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const H1 = styled.h1`
  font-size: 1.6rem;
`;

function HeaderCms() {
  return (
    <StyledHeader>
      <H1 as='h2'>Maika Llaneza | CMS</H1>
      <MainNavCms />
      {/* <Logout /> */}
    </StyledHeader>
  );
}
export default HeaderCms;
