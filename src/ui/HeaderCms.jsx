import MainNavCms from './MainNavCms';
import StyledHeader from './StyledHeader';
import Container from '../ui/Container';

function HeaderCms() {
  return (
    <StyledHeader>
      <Container $variation='cms'>
        <h3>Maika Llaneza | CMS</h3>
        <MainNavCms />
      </Container>
    </StyledHeader>
  );
}
export default HeaderCms;
