import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import HeaderCms from './HeaderCms';

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 2rem;
`;

function AppLayoutCms() {
  return (
    <div>
      <HeaderCms />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayoutCms;
