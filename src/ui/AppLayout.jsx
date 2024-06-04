import { Outlet } from 'react-router-dom';
import Header from './Header';
import StyledMain from './../ui/StyledMain';

function AppLayout() {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
}

export default AppLayout;
