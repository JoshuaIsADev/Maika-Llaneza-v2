import styled, { css } from 'styled-components';

const variations = {
  cms: css`
    margin: 10rem auto;

    @media (max-width: 550px) {
      margin: 10rem auto;
    }
  `,
};

const Main = styled.main`
  padding: 2rem;
  max-width: var(--container-width);
  margin: 6rem auto;

  @media (max-width: 550px) {
    margin: 2rem auto;
  }
  ${(props) => variations[props.$variation]};
`;

export default Main;
