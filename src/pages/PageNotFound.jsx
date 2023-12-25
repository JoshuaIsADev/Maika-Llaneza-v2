import styled from 'styled-components';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import { StyledNav, StyledNavLink } from '../ui/StyledNav';

const PageNotFoundLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
`;

function PageNotFound() {
  return (
    <PageNotFoundLayout>
      <Row type='horizontal' $variation='center'>
        <Heading as='h2' $variation='center'>
          Sorry, page not found
        </Heading>
        <StyledNav>
          <li>
            <StyledNavLink to='/home'>
              Please go back to maikallaneza.com
            </StyledNavLink>
          </li>
        </StyledNav>
      </Row>
    </PageNotFoundLayout>
  );
}

export default PageNotFound;
