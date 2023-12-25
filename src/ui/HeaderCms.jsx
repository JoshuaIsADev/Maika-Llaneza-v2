import MainNavCms from './MainNavCms';
import StyledHeader from './StyledHeader';
import Container from '../ui/Container';
import Heading from './Heading';

function HeaderCms() {
  return (
    <StyledHeader>
      <Container $variation='cms'>
        <Heading as='h4'>CMS</Heading>
        <MainNavCms />
      </Container>
    </StyledHeader>
  );
}
export default HeaderCms;
