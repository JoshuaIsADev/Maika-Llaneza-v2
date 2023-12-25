import { Outlet } from 'react-router-dom';
import HeaderCms from './HeaderCms';
import StyledMain from './../ui/StyledMain';

function AppLayoutCms() {
  return (
    <>
      <HeaderCms />
      <StyledMain $variation='cms'>
        <Outlet />
      </StyledMain>
    </>
  );
}

export default AppLayoutCms;
