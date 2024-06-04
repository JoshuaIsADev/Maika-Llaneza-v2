import { Outlet } from 'react-router-dom';
import Header from './Header';
import StyledMain from './../ui/StyledMain';
import Monsters from './Monsters';

function AppLayout() {
  return (
    <>
      {/* <Header /> */}
      <StyledMain>
        <Outlet />
      </StyledMain>
      {/* <Monsters /> */}
    </>
  );
}

export default AppLayout;
