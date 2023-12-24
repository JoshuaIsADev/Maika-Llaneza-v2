import styled, { css } from 'styled-components';

const variations = {
  default: css`
    flex-direction: column;
    gap: 2rem;
  `,

  cms: css`
    flex-direction: row;
  `,
};

const Container = styled.div`
  width: 100%;
  max-width: var(--container-width-small);
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin: 0 auto;
  ${(props) => variations[props.$variation]};

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export default Container;
