import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 2rem;
  max-width: var(--container-width);
  margin: auto;
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
