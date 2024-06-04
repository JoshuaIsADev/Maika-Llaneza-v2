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
  margin: 0 auto;
  padding: 0 0 10rem;

  @media (max-width: 550px) {
    margin: 2rem auto;
  }
  ${(props) => variations[props.$variation]};
`;

export default Main;
