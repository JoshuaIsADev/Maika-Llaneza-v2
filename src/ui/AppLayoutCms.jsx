import { Outlet } from 'react-router-dom';
import HeaderCms from './HeaderCms';
import StyledMain from './../ui/StyledMain';

function AppLayoutCms() {
  return (
    <div>
      <HeaderCms />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </div>
  );
}

export default AppLayoutCms;
