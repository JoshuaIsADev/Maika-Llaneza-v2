import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getHeadline } from '../services/apiHeadline';
import Spinner from './Spinner';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: var(--grid-column);
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 0;
  background-color: var(--background-color);
  padding-top: 1rem;
`;

const HeaderContainer = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 700px) {
    gap: 0.5rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  text-align: left;
  height: 5rem;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
  /* height: 5rem; */
`;

function Header() {
  const {
    isLoading: isLoadingHeadline,
    data: headline,
    // error,
  } = useQuery({
    queryKey: ['headline'],
    queryFn: getHeadline,
  });

  const { subHeadline } = headline && headline.length > 0 ? headline[0] : {};

  if (isLoadingHeadline) return <Spinner />;

  return (
    <StyledHeader>
      <HeaderContainer>
        <h1 className='font-m font-special'>{subHeadline}</h1>
        <nav aria-label='table of contents'>
          <Ul>
            <li>
              <a
                href='#about'
                className='font-xs font-special font-special-link'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#writer'
                className='font-xs font-special font-special-link'
              >
                Writings
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='font-xs font-special font-special-link'
              >
                Contact
              </a>
            </li>
          </Ul>
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
}
export default Header;
